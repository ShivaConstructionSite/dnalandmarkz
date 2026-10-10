$port = 8088
$folder = $PSScriptRoot
if (-not $folder) { $folder = "c:\Users\sadai\OneDrive\Desktop\ContructionSite\ConstructionWebSite" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host " DNA LANDMARKZ Web Server is RUNNING at:" -ForegroundColor Green
    Write-Host " -> Main Site:     http://localhost:$port/index.html" -ForegroundColor Yellow
    Write-Host " -> Privacy Policy: http://localhost:$port/privacy.html" -ForegroundColor Yellow
    Write-Host " -> Terms:         http://localhost:$port/terms.html" -ForegroundColor Yellow
    Write-Host " -> Admin Portal:  http://localhost:$port/admin.html" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C to stop the server." -ForegroundColor Gray

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $path = $request.Url.LocalPath
            if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }
            $localPath = Join-Path $folder $path.TrimStart('/')

            # Add CORS headers
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            if (Test-Path $localPath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $mime = "text/plain"
                switch ($ext) {
                    ".html" { $mime = "text/html; charset=utf-8" }
                    ".css"  { $mime = "text/css; charset=utf-8" }
                    ".js"   { $mime = "application/javascript; charset=utf-8" }
                    ".svg"  { $mime = "image/svg+xml" }
                    ".png"  { $mime = "image/png" }
                    ".jpg"  { $mime = "image/jpeg" }
                    ".jpeg" { $mime = "image/jpeg" }
                    ".json" { $mime = "application/json" }
                    ".xml"  { $mime = "application/xml" }
                    ".ico"  { $mime = "image/x-icon" }
                }
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentType = "text/plain"
                $response.ContentLength64 = $msg.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($msg, 0, $msg.Length)
                }
            }
            $response.OutputStream.Close()
        } catch {
            # Silently catch closed client sockets
        }
    }
} finally {
    $listener.Stop()
}
