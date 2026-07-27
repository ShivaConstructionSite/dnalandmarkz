/**
 * DNA LANDMARKZ - Comprehensive CMS Engine
 * Full section-by-section dynamic content management.
 */

// Comprehensive Default State Schema
const DEFAULT_CMS_DATA = {
    ticker: {
        enabled: true,
        badge: "🎉 FESTIVAL SPECIAL OFFER",
        text: "Get 50% OFF on 3D Architectural Elevation Designs & Free Consultation! Limited Time Offer — Book Your Site Visit Today! 🚂✨"
    },
    nav: {
        logoTitle: "DNA",
        logoAccent: "LANDMARKZ",
        logoSubtitle: "BUILDING DREAMS. CREATING LANDMARKS.",
        navBtnText: "+91 90802 06002"
    },
    hero: {
        subtitle: "Building Dreams. Creating Landmarks.",
        title: "Turnkey Construction & Interior Service",
        desc: "DNA LANDMARKZ specializes in custom architectural designs, premium quality building constructions, end-to-end luxury interiors, and full home renovations.",
        heroBg: "hero-bg.jpg"
    },
    services: {
        subtitle: "Our Services",
        title: "Comprehensive Building Solutions",
        desc: "We offer end-to-end expertise across architectural drafting, structural constructions, custom interiors, and modern renovations.",
        s1Title: "Architectural Design",
        s1Bullets: "2D Plan Development, 3D Elevation Renderings, Structural Layout Designs, Electrical Layout Schemes, Plumbing Layout Diagrams, 2D Elevation Drafting",
        s2Title: "Construction",
        s2Bullets: "Free Consultation Design, End to End Construction, Residential Construction, Commercial Construction, Structural Site Work, Supervised Engineering",
        s3Title: "Interiors",
        s3Bullets: "Free Design Concept, End to End Interiors, Residential Interiors, Commercial Fitouts, Modern False Ceilings, Premium Finished Carpentry",
        s4Title: "Renovation",
        s4Bullets: "Free Consultation Design, Full House Renovation, Toilet Renovation Specialists, Space Refurbishments, Waterproofing Services, Structural Modifications"
    },
    whyChoose: {
        subtitle: "Core Strengths",
        title: "Why Choose DNA LANDMARKZ",
        desc: "We combine structured processes, master craftsmanship, and absolute budget transparency to build trust at every step.",
        item1Title: "Quality Assured",
        item1Desc: "We source double-tested raw materials and follow strict engineering checklist audits to guarantee structural integrity.",
        item2Title: "Custom Design",
        item2Desc: "Every blueprint is custom-tailored to represent your unique space preferences, functionality requirements, and aesthetic goals.",
        item3Title: "On Time Delivery",
        item3Desc: "Our project managers execute disciplined timeline schedules to complete structural handovers right on schedule.",
        item4Title: "Transparent Costs",
        item4Desc: "Zero hidden charges. Itemized material estimations with clear rate breakdowns before any site work begins."
    },
    about: {
        subtitle: "About Our Firm",
        title: "Crafting Exceptional Spaces Across South India",
        desc: "DNA LANDMARKZ is a premier construction and interior design firm committed to turning architectural visions into timeless structural reality.",
        statProjects: "100+",
        statQuality: "100%",
        statExperience: "10+",
        visionText: "To lead South India's construction and interior landscaping by delivering sustainable, structurally supreme, and aesthetically inspiring landmarks.",
        missionText: "To offer transparent, on-time turnkey building solutions using tested materials, skilled engineering, and modern architectural techniques."
    },
    general: {
        mainPhone: "+91 9080206002",
        devPhone: "+91 9025066953",
        address: "No 12, Landmark Towers, Greenways Road, Chennai, Tamil Nadu, India",
        email: "info@dnalandmarkz.com",
        contactDesc: "Get in touch with us to schedule your free design consultation. Our estimation and architecture team is ready to design your next landmark."
    },
    footer: {
        copyright: "© 2026 DNA LANDMARKZ. All rights reserved.",
        devName: "Sadaiyandi",
        devExp: "2+ Yrs Experience",
        endText: "- END -"
    },
    seo: {
        title: "DNA LANDMARKZ | Turnkey Construction & Interior Service",
        desc: "DNA LANDMARKZ delivers turnkey construction, premium architectural designs, end-to-end interiors, and home renovations. Quality assured with transparent costs.",
        keywords: "DNA Landmarkz, construction Chennai, architectural designs India, turnkey construction Chennai, premium interiors, dnalandmarkz"
    },
    adminAuth: {
        email: "admin@dnalandmarkz.com",
        pass: "admin"
    },
    projects: [
        {
            id: 1,
            title: "Modern Turnkey Residential Villa",
            category: "Construction",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Luxury Contemporary Living Interiors",
            category: "Interiors",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Architectural 3D Structural Blueprint",
            category: "Architectural",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "M. Subramanian",
            role: "Retired Chief Engineer, Anna Nagar",
            text: "DNA LANDMARKZ turned our custom home dreams into reality. The turnkey service was absolute perfection, managing everything from architectural drafting to custom modular kitchen details.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
        },
        {
            id: 2,
            name: "Dr. Kavitha Sridhar",
            role: "Director, Adyar Dental Clinic",
            text: "Building our clinical space under tight timelines and budget specifications was easy with DNA. They delivered Adyar clinic with absolute cost transparency and zero delays.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
        }
    ]
};

// Store Helper
function getCMSData() {
    const dataStr = localStorage.getItem("dnalandmarkz_cms_data");
    if (!dataStr) {
        localStorage.setItem("dnalandmarkz_cms_data", JSON.stringify(DEFAULT_CMS_DATA));
        return DEFAULT_CMS_DATA;
    }
    const data = JSON.parse(dataStr);
    
    // Ensure all section schemas exist
    let updated = false;
    ['ticker','nav','hero','services','whyChoose','about','general','footer','seo','adminAuth','projects','testimonials'].forEach(k => {
        if (!data[k]) {
            data[k] = DEFAULT_CMS_DATA[k];
            updated = true;
        }
    });
    if (updated) localStorage.setItem("dnalandmarkz_cms_data", JSON.stringify(data));
    return data;
}

function saveCMSData(data) {
    localStorage.setItem("dnalandmarkz_cms_data", JSON.stringify(data));
    showSuccessAlert();
}

let tempUploadedImageBase64 = "";
let tempUploadedTestimonialImgBase64 = "";

function convertImageToBase64(input, targetUrlInputId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (targetUrlInputId === 'newTestimonialImageUrl') {
                tempUploadedTestimonialImgBase64 = e.target.result;
            } else {
                tempUploadedImageBase64 = e.target.result;
            }
            document.getElementById(targetUrlInputId).value = "[Uploaded Image File]";
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Authentication
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const cms = getCMSData();

    if (email === cms.adminAuth.email && pass === cms.adminAuth.pass) {
        sessionStorage.setItem("dnalandmarkz_admin_session", "true");
        showDashboardScreen();
    } else {
        const err = document.getElementById("loginError");
        err.style.display = "block";
    }
}

function handleLogout() {
    sessionStorage.removeItem("dnalandmarkz_admin_session");
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("dashboardScreen").style.display = "none";
}

function showDashboardScreen() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboardScreen").style.display = "block";
    loadDashboardFields();
}

// Load Dashboard Inputs
function loadDashboardFields() {
    const cms = getCMSData();

    // 1. Ticker
    if (document.getElementById("cfgTickerBadge")) {
        document.getElementById("cfgTickerEnabled").checked = cms.ticker.enabled !== false;
        document.getElementById("cfgTickerBadge").value = cms.ticker.badge || "";
        document.getElementById("cfgTickerText").value = cms.ticker.text || "";
    }

    // 2. Navigation
    if (document.getElementById("cfgLogoTitle")) {
        document.getElementById("cfgLogoTitle").value = cms.nav.logoTitle || "DNA";
        document.getElementById("cfgLogoAccent").value = cms.nav.logoAccent || "LANDMARKZ";
        document.getElementById("cfgLogoSubtitle").value = cms.nav.logoSubtitle || "BUILDING DREAMS. CREATING LANDMARKS.";
    }

    // 3. Hero
    if (document.getElementById("cfgHeroSubtitle")) {
        document.getElementById("cfgHeroSubtitle").value = cms.hero.subtitle || "";
        document.getElementById("cfgHeroTitle").value = cms.hero.title || "";
        document.getElementById("cfgHeroDesc").value = cms.hero.desc || "";
        if (document.getElementById("cfgHeroBg")) {
            document.getElementById("cfgHeroBg").value = cms.hero.heroBg || "hero-bg.jpg";
        }
    }

    // 4. Services
    if (document.getElementById("cfgServicesTitle")) {
        document.getElementById("cfgServicesSubtitle").value = cms.services.subtitle || "";
        document.getElementById("cfgServicesTitle").value = cms.services.title || "";
        document.getElementById("cfgServicesDesc").value = cms.services.desc || "";
        document.getElementById("cfgS1Title").value = cms.services.s1Title || "";
        document.getElementById("cfgS1Bullets").value = cms.services.s1Bullets || "";
        document.getElementById("cfgS2Title").value = cms.services.s2Title || "";
        document.getElementById("cfgS2Bullets").value = cms.services.s2Bullets || "";
        document.getElementById("cfgS3Title").value = cms.services.s3Title || "";
        document.getElementById("cfgS3Bullets").value = cms.services.s3Bullets || "";
        document.getElementById("cfgS4Title").value = cms.services.s4Title || "";
        document.getElementById("cfgS4Bullets").value = cms.services.s4Bullets || "";
    }

    // 5. Why Choose Us
    if (document.getElementById("cfgWhyTitle")) {
        document.getElementById("cfgWhySubtitle").value = cms.whyChoose.subtitle || "";
        document.getElementById("cfgWhyTitle").value = cms.whyChoose.title || "";
        document.getElementById("cfgWhyDesc").value = cms.whyChoose.desc || "";
        document.getElementById("cfgWhy1Title").value = cms.whyChoose.item1Title || "";
        document.getElementById("cfgWhy1Desc").value = cms.whyChoose.item1Desc || "";
        document.getElementById("cfgWhy2Title").value = cms.whyChoose.item2Title || "";
        document.getElementById("cfgWhy2Desc").value = cms.whyChoose.item2Desc || "";
        document.getElementById("cfgWhy3Title").value = cms.whyChoose.item3Title || "";
        document.getElementById("cfgWhy3Desc").value = cms.whyChoose.item3Desc || "";
        document.getElementById("cfgWhy4Title").value = cms.whyChoose.item4Title || "";
        document.getElementById("cfgWhy4Desc").value = cms.whyChoose.item4Desc || "";
    }

    // 6. About Us
    if (document.getElementById("cfgAboutTitle")) {
        document.getElementById("cfgAboutSubtitle").value = cms.about.subtitle || "";
        document.getElementById("cfgAboutTitle").value = cms.about.title || "";
        document.getElementById("cfgAboutDesc").value = cms.about.desc || "";
        document.getElementById("cfgStatProjects").value = cms.about.statProjects || "100+";
        document.getElementById("cfgStatQuality").value = cms.about.statQuality || "100%";
        document.getElementById("cfgStatExperience").value = cms.about.statExperience || "10+";
        document.getElementById("cfgVisionText").value = cms.about.visionText || "";
        document.getElementById("cfgMissionText").value = cms.about.missionText || "";
    }

    // 7. Contact Info
    if (document.getElementById("cfgMainPhone")) {
        document.getElementById("cfgMainPhone").value = cms.general.mainPhone || "+91 9080206002";
        document.getElementById("cfgDevPhone").value = cms.general.devPhone || "+91 9025066953";
        document.getElementById("cfgAddress").value = cms.general.address || "";
        document.getElementById("cfgEmail").value = cms.general.email || "info@dnalandmarkz.com";
        document.getElementById("cfgContactDesc").value = cms.general.contactDesc || "";
    }

    // 8. Footer
    if (document.getElementById("cfgCopyright")) {
        document.getElementById("cfgCopyright").value = cms.footer.copyright || "";
        document.getElementById("cfgDevName").value = cms.footer.devName || "Sadaiyandi";
        document.getElementById("cfgDevExp").value = cms.footer.devExp || "2+ Yrs Experience";
        document.getElementById("cfgEndText").value = cms.footer.endText || "- END -";
    }

    // 9. SEO & Account
    document.getElementById("cfgSeoTitle").value = cms.seo.title;
    document.getElementById("cfgSeoDesc").value = cms.seo.desc;
    document.getElementById("cfgSeoKeywords").value = cms.seo.keywords;
    document.getElementById("cfgAdminEmail").value = cms.adminAuth.email;
    document.getElementById("activeUserLabel").innerText = cms.adminAuth.email;

    // Render Lists
    renderProjectsList(cms.projects);
    renderTestimonialsList(cms.testimonials);
}

// Renderers
function renderProjectsList(projects) {
    const container = document.getElementById("projectsContainer");
    if (!container) return;
    if (!projects || projects.length === 0) {
        container.innerHTML = `<p style="color: #9ca3af; font-size: 0.9rem;">No custom projects added yet.</p>`;
        return;
    }
    container.innerHTML = projects.map(p => `
        <div class="project-item">
            <img src="${p.image}" class="project-thumb" alt="${p.title}">
            <div class="project-details">
                <h4>${p.title}</h4>
                <span>${p.category}</span>
            </div>
            <button class="btn-delete" onclick="deleteProject(${p.id})">Delete</button>
        </div>
    `).join("");
}

function renderTestimonialsList(testimonials) {
    const container = document.getElementById("testimonialsContainer");
    if (!container) return;
    if (!testimonials || testimonials.length === 0) {
        container.innerHTML = `<p style="color: #9ca3af; font-size: 0.9rem;">No testimonials added yet.</p>`;
        return;
    }
    container.innerHTML = testimonials.map(t => `
        <div class="project-item">
            <img src="${t.image}" class="project-thumb" style="border-radius: 50%;" alt="${t.name}">
            <div class="project-details">
                <h4>${t.name}</h4>
                <span>${t.role}</span>
                <p style="color: #cbd5e1; font-size: 0.85rem; margin-top: 4px;">"${t.text}"</p>
            </div>
            <button class="btn-delete" onclick="deleteTestimonial(${t.id})">Delete</button>
        </div>
    `).join("");
}

// Save Handlers for Each Section
function saveTickerConfig() {
    const cms = getCMSData();
    cms.ticker = {
        enabled: document.getElementById("cfgTickerEnabled").checked,
        badge: document.getElementById("cfgTickerBadge").value.trim(),
        text: document.getElementById("cfgTickerText").value.trim()
    };
    saveCMSData(cms);
}

function saveNavConfig() {
    const cms = getCMSData();
    cms.nav = {
        logoTitle: document.getElementById("cfgLogoTitle").value.trim(),
        logoAccent: document.getElementById("cfgLogoAccent").value.trim(),
        logoSubtitle: document.getElementById("cfgLogoSubtitle").value.trim()
    };
    saveCMSData(cms);
}

function saveHeroConfig() {
    const cms = getCMSData();
    let bg = "hero-bg.jpg";
    if (document.getElementById("cfgHeroBg")) {
        bg = document.getElementById("cfgHeroBg").value.trim() || "hero-bg.jpg";
    }
    cms.hero = {
        subtitle: document.getElementById("cfgHeroSubtitle").value.trim(),
        title: document.getElementById("cfgHeroTitle").value.trim(),
        desc: document.getElementById("cfgHeroDesc").value.trim(),
        heroBg: bg
    };
    saveCMSData(cms);
}

function saveServicesConfig() {
    const cms = getCMSData();
    cms.services = {
        subtitle: document.getElementById("cfgServicesSubtitle").value.trim(),
        title: document.getElementById("cfgServicesTitle").value.trim(),
        desc: document.getElementById("cfgServicesDesc").value.trim(),
        s1Title: document.getElementById("cfgS1Title").value.trim(),
        s1Bullets: document.getElementById("cfgS1Bullets").value.trim(),
        s2Title: document.getElementById("cfgS2Title").value.trim(),
        s2Bullets: document.getElementById("cfgS2Bullets").value.trim(),
        s3Title: document.getElementById("cfgS3Title").value.trim(),
        s3Bullets: document.getElementById("cfgS3Bullets").value.trim(),
        s4Title: document.getElementById("cfgS4Title").value.trim(),
        s4Bullets: document.getElementById("cfgS4Bullets").value.trim()
    };
    saveCMSData(cms);
}

function saveWhyChooseConfig() {
    const cms = getCMSData();
    cms.whyChoose = {
        subtitle: document.getElementById("cfgWhySubtitle").value.trim(),
        title: document.getElementById("cfgWhyTitle").value.trim(),
        desc: document.getElementById("cfgWhyDesc").value.trim(),
        item1Title: document.getElementById("cfgWhy1Title").value.trim(),
        item1Desc: document.getElementById("cfgWhy1Desc").value.trim(),
        item2Title: document.getElementById("cfgWhy2Title").value.trim(),
        item2Desc: document.getElementById("cfgWhy2Desc").value.trim(),
        item3Title: document.getElementById("cfgWhy3Title").value.trim(),
        item3Desc: document.getElementById("cfgWhy3Desc").value.trim(),
        item4Title: document.getElementById("cfgWhy4Title").value.trim(),
        item4Desc: document.getElementById("cfgWhy4Desc").value.trim()
    };
    saveCMSData(cms);
}

function saveAboutConfig() {
    const cms = getCMSData();
    cms.about = {
        subtitle: document.getElementById("cfgAboutSubtitle").value.trim(),
        title: document.getElementById("cfgAboutTitle").value.trim(),
        desc: document.getElementById("cfgAboutDesc").value.trim(),
        statProjects: document.getElementById("cfgStatProjects").value.trim(),
        statQuality: document.getElementById("cfgStatQuality").value.trim(),
        statExperience: document.getElementById("cfgStatExperience").value.trim(),
        visionText: document.getElementById("cfgVisionText").value.trim(),
        missionText: document.getElementById("cfgMissionText").value.trim()
    };
    saveCMSData(cms);
}

function saveGeneralConfig() {
    const cms = getCMSData();
    cms.general.mainPhone = document.getElementById("cfgMainPhone").value.trim();
    cms.general.devPhone = document.getElementById("cfgDevPhone").value.trim();
    cms.general.address = document.getElementById("cfgAddress").value.trim();
    cms.general.email = document.getElementById("cfgEmail").value.trim();
    cms.general.contactDesc = document.getElementById("cfgContactDesc").value.trim();
    saveCMSData(cms);
}

function saveFooterConfig() {
    const cms = getCMSData();
    cms.footer = {
        copyright: document.getElementById("cfgCopyright").value.trim(),
        devName: document.getElementById("cfgDevName").value.trim(),
        devExp: document.getElementById("cfgDevExp").value.trim(),
        endText: document.getElementById("cfgEndText").value.trim()
    };
    saveCMSData(cms);
}

function saveSEOConfig() {
    const cms = getCMSData();
    cms.seo.title = document.getElementById("cfgSeoTitle").value.trim();
    cms.seo.desc = document.getElementById("cfgSeoDesc").value.trim();
    cms.seo.keywords = document.getElementById("cfgSeoKeywords").value.trim();
    saveCMSData(cms);
}

function saveAdminCredentials() {
    const pass = document.getElementById("cfgAdminPass").value;
    const confirm = document.getElementById("cfgAdminPassConfirm").value;
    const email = document.getElementById("cfgAdminEmail").value.trim();

    if (pass && pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    const cms = getCMSData();
    cms.adminAuth.email = email;
    if (pass) cms.adminAuth.pass = pass;

    saveCMSData(cms);
    document.getElementById("cfgAdminPass").value = "";
    document.getElementById("cfgAdminPassConfirm").value = "";
}

// Add/Delete
function addNewProject() {
    const title = document.getElementById("newProjTitle").value.trim();
    const category = document.getElementById("newProjCategory").value;
    let url = document.getElementById("newProjImageUrl").value.trim();
    if (tempUploadedImageBase64) url = tempUploadedImageBase64;
    if (!title || !url || url === "[Uploaded Image File]") {
        alert("Please provide a Project Title and an Image.");
        return;
    }
    const cms = getCMSData();
    cms.projects.unshift({ id: Date.now(), title, category, image: url });
    saveCMSData(cms);
    document.getElementById("newProjTitle").value = "";
    document.getElementById("newProjImageUrl").value = "";
    document.getElementById("newProjFileInput").value = "";
    tempUploadedImageBase64 = "";
    renderProjectsList(cms.projects);
}

function deleteProject(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const cms = getCMSData();
    cms.projects = cms.projects.filter(p => p.id !== id);
    saveCMSData(cms);
    renderProjectsList(cms.projects);
}

function addNewTestimonial() {
    const name = document.getElementById("newTestimonialName").value.trim();
    const role = document.getElementById("newTestimonialRole").value.trim();
    const text = document.getElementById("newTestimonialText").value.trim();
    let image = document.getElementById("newTestimonialImageUrl").value.trim();
    if (tempUploadedTestimonialImgBase64) image = tempUploadedTestimonialImgBase64;
    if (!image || image === "[Uploaded Image File]") image = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80";
    if (!name || !text) {
        alert("Please provide Client Name and Testimonial Review text.");
        return;
    }
    const cms = getCMSData();
    cms.testimonials.unshift({ id: Date.now(), name, role: role || "Valued Client", text, image });
    saveCMSData(cms);
    document.getElementById("newTestimonialName").value = "";
    document.getElementById("newTestimonialRole").value = "";
    document.getElementById("newTestimonialText").value = "";
    document.getElementById("newTestimonialImageUrl").value = "";
    document.getElementById("newTestimonialFileInput").value = "";
    tempUploadedTestimonialImgBase64 = "";
    renderTestimonialsList(cms.testimonials);
}

function deleteTestimonial(id) {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    const cms = getCMSData();
    cms.testimonials = cms.testimonials.filter(t => t.id !== id);
    saveCMSData(cms);
    renderTestimonialsList(cms.testimonials);
}

function switchTab(tabId, el) {
    document.querySelectorAll(".tab-pane").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    el.classList.add("active");
}

function showSuccessAlert() {
    const box = document.getElementById("saveSuccess");
    if (box) {
        box.style.display = "block";
        setTimeout(() => box.style.display = "none", 4000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("dashboardScreen")) {
        if (sessionStorage.getItem("dnalandmarkz_admin_session") === "true") {
            showDashboardScreen();
        }
    }
});
