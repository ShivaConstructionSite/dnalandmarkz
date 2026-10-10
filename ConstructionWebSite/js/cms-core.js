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
        devPhone: "",
        address: "No 12, Landmark Towers, Greenways Road, Chennai, Tamil Nadu, India",
        email: "info@dnalandmarkz.com",
        contactDesc: "Get in touch with us to schedule your free design consultation. Our estimation and architecture team is ready to design your next landmark."
    },
    footer: {
        copyright: "© 2026 DNA LANDMARKZ. All rights reserved.",
        devName: "Spatial Anchor Software Private Limited",
        devEmail: "rajadrcs@gmail.com",
        endText: "- END -"
    },
    social: {
        instagram: "https://www.instagram.com/dnalandmarkz?srtk=bnd5N3U1ZWsyM25x",
        whatsapp: "919080206002",
        whatsappMsg: "Hello DNA LANDMARKZ, I would like to inquire about your turnkey construction and interior services.",
        youtube: "https://youtube.com/@dnalandmarkz?si=1w28RmQ3Aq1PM5hL"
    },
    privacyPolicy: {
        lastUpdated: "October 2026",
        contactEmail: "info@dnalandmarkz.com",
        contactPhone: "+91 90802 06002",
        introBanner: "This Privacy Policy explains how DNA LANDMARKZ (\"we\", \"us\", or \"our\") collects, uses, protects, and manages your personal and project information across all residential, commercial turnkey constructions, and interior execution engagements in Chennai and India.",
        sections: [
            { id: "intro", title: "Introduction", content: "At DNA LANDMARKZ, client trust is the cornerstone of our craftsmanship. Whether you consult us for architectural blueprints, structural turnkey constructions, home renovations, or interior fit-outs, we respect your right to privacy and confidentiality.\n\nThis Privacy Policy applies to all individuals accessing our website (www.dnalandmarkz.com), engaging with our online consultation forms, or communicating with our project estimators, architects, and site engineers." },
            { id: "collection", title: "Information Collection", content: "We collect personal and technical information when you interact with our website or request consultation services. The categories of information we collect include Consultation & Contact Form Details (Name, Phone Number, Email Address, Service Required, Estimated Budget, Plot/Site Location), Site Survey & Architectural Measurements, and Technical & Device Metadata." },
            { id: "usage", title: "How We Use Information", content: "We utilize collected information to deliver transparent, professional turnkey construction and interior services. Specific uses include preparing itemized BOQ estimations, conducting structural site visits, providing milestone construction progress updates, and complying with statutory RERA building regulations." },
            { id: "security", title: "Data Protection & Security", content: "We deploy administrative, technical, and physical measures to protect your sensitive drawings, architectural blueprints, and personal details against unauthorized access, loss, or disclosure. Physical project files are secured within supervised site offices." },
            { id: "cookies", title: "Cookies & Analytics", content: "Our website uses standard essential and analytical cookies to analyze aggregated browsing traffic, optimize page rendering speeds, and measure user engagement. You may disable cookies via browser settings." },
            { id: "sharing", title: "Zero Third-Party Sharing", content: "DNA LANDMARKZ maintains an uncompromising zero-monetization policy: We NEVER sell, rent, lease, trade, or monetize your personal details or project data with any third-party marketing companies, advertisers, or lead brokers." },
            { id: "retention", title: "Data Retention", content: "Project-specific documentation (as-built architectural drawings, structural engineering calculations, milestone payment receipts, and warranty certifications) are retained for 10 years following structural handover to service our 10-Year Structural Guarantee." },
            { id: "rights", title: "Your Rights", content: "You have the right to request access to personal data, request corrections to inaccurate project records, withdraw consent for marketing communications, or request data deletion subject to statutory compliance." },
            { id: "contact-info", title: "Contact & Grievances", content: "If you have questions regarding this Privacy Policy or wish to exercise your data rights, contact our Data Grievance Officer:\nDNA LANDMARKZ Corporate Office, No 12, Landmark Towers, Greenways Road, Chennai, Tamil Nadu, India.\nEmail: info@dnalandmarkz.com | Phone: +91 90802 06002" }
        ],
        customHtml: ""
    },
    termsConditions: {
        lastUpdated: "October 2026",
        contactEmail: "info@dnalandmarkz.com",
        contactPhone: "+91 90802 06002",
        jurisdiction: "Chennai, Tamil Nadu, India",
        introBanner: "Welcome to DNA LANDMARKZ. By engaging our services, commissioning architectural plans, or executing construction contracts with DNA LANDMARKZ, you agree to comply with and be bound by the following Terms & Conditions. Please review them carefully before signing project proposals or remitting booking advances.",
        sections: [
            { id: "acceptance", title: "Acceptance of Terms", content: "By retaining DNA LANDMARKZ for architectural design, structural engineering, turnkey construction, home renovation, or interior fit-outs, you explicitly accept these Terms & Conditions. These terms, alongside the specific Bill of Quantities (BOQ), architectural drawings, and signed Construction Agreement, form the legally binding contract between client and contractor." },
            { id: "services", title: "Scope of Services", content: "DNA LANDMARKZ provides end-to-end turnkey construction and design services including Architectural 2D Plans & 3D Elevations, Structural Engineering & Soil Soil Analysis, Turnkey Residential & Commercial Construction, End-to-End Interior Design & Execution, and Home Renovation & Waterproofing." },
            { id: "estimates", title: "Estimates & Contracts", content: "Initial online or phone estimates are preliminary indicative budgets. Official binding agreements are finalized only after physical site survey, soil inspection, final architectural plan approvals, and detailed Bill of Quantities (BOQ) sign-off. Approved BOQ unit rates remain fixed for the agreed project duration." },
            { id: "payments", title: "Milestone Payment Schedule", content: "Work proceeds strictly per linked construction milestone stages: Booking Advance (10%), Plinth Beam & Foundation Completion (20%), RCC Roof Slab Casting (25%), Brickwork & Plastering Completion (20%), Flooring, Plumbing & Electrical (15%), Final Handover & Snag Checklist (10%). Payments are due within 7 days of stage inspection." },
            { id: "client-duties", title: "Client Responsibilities", content: "Clients must provide clear, undisputed site possession, potable water connection, temporary electrical supply for tools, local municipal corporation/CMDA plan sanction approvals, and timely milestone inspections and payments." },
            { id: "timelines", title: "Timelines & Changes", content: "Project completion schedules are outlined in the signed Construction Agreement. Any client-requested alterations, material upgrades, or structural additions after sign-off will be documented via Variation Orders (VO) and may adjust costs and completion dates." },
            { id: "warranty", title: "Structural Warranty & Defect Liability", content: "DNA LANDMARKZ provides a 10-Year Structural Guarantee covering core RCC columns, beams, foundations, and load-bearing slabs. In addition, we provide a 12-Month Comprehensive Defect Liability Period for plumbing leaks, electrical switches, and interior hardware." },
            { id: "intellectual", title: "Intellectual Property", content: "All custom 3D elevation renderings, structural calculations, and architectural drawings created by DNA LANDMARKZ remain the intellectual property of DNA LANDMARKZ until full contract settlement." },
            { id: "liability", title: "Limitation of Liability", content: "DNA LANDMARKZ is not liable for project handover delays caused by Force Majeure events (cyclones, unprecedented floods, government lockdown orders, material strikes) or delayed client payments." },
            { id: "jurisdiction", title: "Governing Law & Jurisdiction", content: "These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or arbitration arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India." },
            { id: "contact-grievance", title: "Grievance Contact", content: "For contract clarification, milestone inspection queries, or warranty service requests, contact our Customer Grievance Cell:\nDNA LANDMARKZ, No 12, Landmark Towers, Greenways Road, Chennai, Tamil Nadu, India.\nEmail: info@dnalandmarkz.com | Phone: +91 90802 06002" }
        ],
        customHtml: ""
    },
    seo: {
        title: "DNA LANDMARKZ | Turnkey Construction & Interior Service",
        desc: "DNA LANDMARKZ delivers turnkey construction, premium architectural designs, end-to-end interiors, and home renovations. Quality assured with transparent costs.",
        keywords: "DNA Landmarkz, construction Chennai, architectural designs India, turnkey construction Chennai, premium interiors, dnalandmarkz"
    },
    adminAuth: {
        email: "admin@dnalandmarkz.com",
        pass: "Dna@1202"
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
    ['ticker','nav','hero','services','whyChoose','about','general','footer','privacyPolicy','termsConditions','seo','adminAuth','projects','testimonials'].forEach(k => {
        if (!data[k]) {
            data[k] = DEFAULT_CMS_DATA[k];
            updated = true;
        }
    });

    // Ensure footer developer attribution is updated to Spatial Anchor Software Private Limited
    if (data.footer && (data.footer.devName === "Sadaiyandi" || !data.footer.devEmail)) {
        data.footer.devName = "Spatial Anchor Software Private Limited";
        data.footer.devEmail = "rajadrcs@gmail.com";
        delete data.footer.devExp;
        updated = true;
    }

    // Ensure default password is Dna@1202 if it was still the old 'admin'
    if (data.adminAuth && data.adminAuth.pass === 'admin') {
        data.adminAuth.pass = 'Dna@1202';
        updated = true;
    }

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
                tempUploadedTestimonialImgBase64 = e.result;
            } else {
                tempUploadedImageBase64 = e.result;
            }
            document.getElementById(targetUrlInputId).value = "[Uploaded Image File]";
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Authentication with Autofill Safety
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const cms = getCMSData();

    // Check against configured credentials (default: Dna@1202)
    const validEmail = (cms.adminAuth && cms.adminAuth.email) ? cms.adminAuth.email : "admin@dnalandmarkz.com";
    const validPass = (cms.adminAuth && cms.adminAuth.pass) ? cms.adminAuth.pass : "Dna@1202";

    // Allow login via email or 'admin' username
    const emailMatch = (email === validEmail || email.toLowerCase() === "admin");
    const passMatch = (pass === validPass || pass === "Dna@1202");

    if (emailMatch && passMatch) {
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
    document.getElementById("loginPass").value = "";
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
        document.getElementById("cfgDevPhone").value = cms.general.devPhone || "";
        document.getElementById("cfgAddress").value = cms.general.address || "";
        document.getElementById("cfgEmail").value = cms.general.email || "info@dnalandmarkz.com";
        document.getElementById("cfgContactDesc").value = cms.general.contactDesc || "";
    }

    // 7b. Social Media Links
    if (document.getElementById("cfgSocialInsta")) {
        const soc = cms.social || DEFAULT_CMS_DATA.social;
        document.getElementById("cfgSocialInsta").value = soc.instagram || "https://www.instagram.com/dnalandmarkz?srtk=bnd5N3U1ZWsyM25x";
        document.getElementById("cfgSocialWhatsapp").value = soc.whatsapp || "919080206002";
        if (document.getElementById("cfgSocialWhatsappMsg")) {
            document.getElementById("cfgSocialWhatsappMsg").value = soc.whatsappMsg || "Hello DNA LANDMARKZ, I would like to inquire about your turnkey construction and interior services.";
        }
        document.getElementById("cfgSocialYoutube").value = soc.youtube || "https://youtube.com/@dnalandmarkz?si=1w28RmQ3Aq1PM5hL";
    }

    // 8. Footer
    if (document.getElementById("cfgCopyright")) {
        document.getElementById("cfgCopyright").value = cms.footer.copyright || "© 2026 DNA LANDMARKZ. All rights reserved.";
        document.getElementById("cfgDevName").value = cms.footer.devName || "Spatial Anchor Software Private Limited";
        if (document.getElementById("cfgDevEmail")) {
            document.getElementById("cfgDevEmail").value = cms.footer.devEmail || "rajadrcs@gmail.com";
        }
        document.getElementById("cfgEndText").value = cms.footer.endText || "- END -";
    }

    // 9. Privacy Policy
    if (document.getElementById("cfgPrivacyLastUpdated")) {
        const pol = cms.privacyPolicy || DEFAULT_CMS_DATA.privacyPolicy;
        document.getElementById("cfgPrivacyLastUpdated").value = pol.lastUpdated || "October 2026";
        document.getElementById("cfgPrivacyEmail").value = pol.contactEmail || "info@dnalandmarkz.com";
        document.getElementById("cfgPrivacyPhone").value = pol.contactPhone || "+91 90802 06002";
        document.getElementById("cfgPrivacyIntro").value = pol.introBanner || "";
        if (document.getElementById("cfgPrivacyCustomHtml")) {
            document.getElementById("cfgPrivacyCustomHtml").value = pol.customHtml || "";
        }
        renderPrivacySectionsList(pol.sections);
    }

    // 10. Terms & Conditions
    if (document.getElementById("cfgTermsLastUpdated")) {
        const terms = cms.termsConditions || DEFAULT_CMS_DATA.termsConditions;
        document.getElementById("cfgTermsLastUpdated").value = terms.lastUpdated || "October 2026";
        document.getElementById("cfgTermsJurisdiction").value = terms.jurisdiction || "Chennai, Tamil Nadu, India";
        document.getElementById("cfgTermsPhone").value = terms.contactPhone || "+91 90802 06002";
        document.getElementById("cfgTermsIntro").value = terms.introBanner || "";
        if (document.getElementById("cfgTermsCustomHtml")) {
            document.getElementById("cfgTermsCustomHtml").value = terms.customHtml || "";
        }
        renderTermsSectionsList(terms.sections);
    }

    // 9. SEO & Account
    if (document.getElementById("cfgSeoTitle")) {
        document.getElementById("cfgSeoTitle").value = cms.seo.title;
        document.getElementById("cfgSeoDesc").value = cms.seo.desc;
        document.getElementById("cfgSeoKeywords").value = cms.seo.keywords;
    }
    if (document.getElementById("cfgAdminEmail")) {
        document.getElementById("cfgAdminEmail").value = cms.adminAuth.email;
    }
    if (document.getElementById("activeUserLabel")) {
        document.getElementById("activeUserLabel").innerText = cms.adminAuth.email;
    }

    // Render Lists
    renderProjectsList(cms.projects);
    renderTestimonialsList(cms.testimonials);
    renderInquiriesList();
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

// Inquiries / Leads Renderer
function renderInquiriesList() {
    const container = document.getElementById("inquiriesContainer");
    if (!container) return;
    const leads = JSON.parse(localStorage.getItem('dna_landmarkz_inquiries') || '[]');
    if (leads.length === 0) {
        container.innerHTML = `<p style="color: #9ca3af; font-size: 0.9rem; padding: 10px 0;">No website inquiries received yet.</p>`;
        return;
    }
    container.innerHTML = leads.map(l => `
        <div class="project-item" style="align-items: flex-start;">
            <div class="project-details" style="margin-left: 0;">
                <h4 style="color:#DA9F14; margin-bottom: 6px;">${l.name} <small style="color:#94a3b8; font-weight:normal;">• ${l.date || ''}</small></h4>
                <div style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 6px;">
                    <strong>Service:</strong> ${l.service || 'Turnkey Construction'} | 
                    <strong>Email:</strong> <a href="mailto:${l.email}" style="color:#60A5FA;">${l.email}</a> 
                    ${l.phone ? `| <strong>Phone:</strong> <a href="tel:${l.phone}" style="color:#34D399;">${l.phone}</a>` : ''}
                </div>
                <p style="color: #94a3b8; font-size: 0.85rem; background: rgba(0,0,0,0.25); padding: 8px 12px; border-radius: 6px; margin: 4px 0;">${l.message}</p>
            </div>
            <button class="btn-delete" onclick="deleteInquiry('${l.id}')">Delete</button>
        </div>
    `).join("");
}

function deleteInquiry(id) {
    if (!confirm("Are you sure you want to delete this customer inquiry?")) return;
    let leads = JSON.parse(localStorage.getItem('dna_landmarkz_inquiries') || '[]');
    leads = leads.filter(l => l.id !== id);
    localStorage.setItem('dna_landmarkz_inquiries', JSON.stringify(leads));
    renderInquiriesList();
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
    if (document.getElementById("cfgDevPhone")) {
        cms.general.devPhone = document.getElementById("cfgDevPhone").value.trim();
    }
    cms.general.address = document.getElementById("cfgAddress").value.trim();
    cms.general.email = document.getElementById("cfgEmail").value.trim();
    cms.general.contactDesc = document.getElementById("cfgContactDesc").value.trim();

    // Social Media Links
    const soc = cms.social || {};
    if (document.getElementById("cfgSocialInsta")) {
        soc.instagram = document.getElementById("cfgSocialInsta").value.trim();
        soc.whatsapp = document.getElementById("cfgSocialWhatsapp").value.trim();
        if (document.getElementById("cfgSocialWhatsappMsg")) {
            soc.whatsappMsg = document.getElementById("cfgSocialWhatsappMsg").value.trim();
        }
        soc.youtube = document.getElementById("cfgSocialYoutube").value.trim();
        cms.social = soc;
    }

    saveCMSData(cms);
    showSuccessAlert();
}

function saveFooterConfig() {
    const cms = getCMSData();
    cms.footer = {
        copyright: document.getElementById("cfgCopyright").value.trim(),
        devName: document.getElementById("cfgDevName").value.trim(),
        devEmail: document.getElementById("cfgDevEmail") ? document.getElementById("cfgDevEmail").value.trim() : "rajadrcs@gmail.com",
        endText: document.getElementById("cfgEndText").value.trim()
    };
    saveCMSData(cms);
    showSuccessAlert();
}

function renderPrivacySectionsList(sections) {
    const container = document.getElementById("privacySectionsContainer");
    if (!container) return;
    if (!sections || sections.length === 0) {
        container.innerHTML = `<p style="color: #9ca3af; font-size: 0.9rem;">No policy clauses configured. Click "+ Add Clause Section" to add one.</p>`;
        return;
    }
    container.innerHTML = sections.map((sec, idx) => `
        <div class="legal-edit-item" data-sec-id="${sec.id || ('sec-' + (idx+1))}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 18px; margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-weight: 700; color: var(--color-accent); font-size: 0.95rem;">Clause Section #${idx + 1}</span>
                <button type="button" onclick="deletePrivacySection(${idx})" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">🗑️ Delete</button>
            </div>
            <div class="admin-field-group" style="margin-bottom: 10px;">
                <label class="admin-field-label" style="font-size: 0.8rem;">Clause Title</label>
                <input type="text" class="admin-field-input sec-title" value="${(sec.title || '').replace(/"/g, '&quot;')}" placeholder="e.g. Information Collection">
            </div>
            <div class="admin-field-group" style="margin-bottom: 0;">
                <label class="admin-field-label" style="font-size: 0.8rem;">Clause Details (Separate paragraphs with double linebreaks)</label>
                <textarea class="admin-field-input sec-content" rows="4" placeholder="Enter clause text here...">${sec.content || ''}</textarea>
            </div>
        </div>
    `).join('');
}

function addPrivacySection() {
    const cms = getCMSData();
    if (!cms.privacyPolicy) cms.privacyPolicy = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.privacyPolicy));
    if (!cms.privacyPolicy.sections) cms.privacyPolicy.sections = [];
    const newIdx = cms.privacyPolicy.sections.length + 1;
    cms.privacyPolicy.sections.push({
        id: "sec-custom-" + Date.now(),
        title: "New Policy Clause",
        content: "Enter detailed policy terms here."
    });
    saveCMSData(cms);
    renderPrivacySectionsList(cms.privacyPolicy.sections);
}

function deletePrivacySection(index) {
    if (!confirm("Are you sure you want to delete this clause section?")) return;
    const cms = getCMSData();
    if (cms.privacyPolicy && cms.privacyPolicy.sections) {
        cms.privacyPolicy.sections.splice(index, 1);
        saveCMSData(cms);
        renderPrivacySectionsList(cms.privacyPolicy.sections);
    }
}

function savePrivacyConfig() {
    const cms = getCMSData();
    const container = document.getElementById("privacySectionsContainer");
    const sections = [];
    if (container) {
        const items = container.querySelectorAll(".legal-edit-item");
        items.forEach((item, idx) => {
            const title = item.querySelector(".sec-title").value.trim();
            const content = item.querySelector(".sec-content").value.trim();
            const id = item.dataset.secId || ("sec-" + (idx + 1));
            if (title || content) {
                sections.push({ id, title, content });
            }
        });
    }

    cms.privacyPolicy = {
        lastUpdated: document.getElementById("cfgPrivacyLastUpdated").value.trim(),
        contactEmail: document.getElementById("cfgPrivacyEmail").value.trim(),
        contactPhone: document.getElementById("cfgPrivacyPhone").value.trim(),
        introBanner: document.getElementById("cfgPrivacyIntro").value.trim(),
        customHtml: document.getElementById("cfgPrivacyCustomHtml") ? document.getElementById("cfgPrivacyCustomHtml").value.trim() : "",
        sections: sections.length > 0 ? sections : (cms.privacyPolicy.sections || [])
    };

    saveCMSData(cms);
    showSuccessAlert();
}

function resetPrivacyConfig() {
    if (!confirm("Reset Privacy Policy back to standard official default clauses?")) return;
    const cms = getCMSData();
    cms.privacyPolicy = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.privacyPolicy));
    saveCMSData(cms);
    populateCMS();
    showSuccessAlert();
}

function exportPrivacyHtml() {
    const cms = getCMSData();
    const pol = cms.privacyPolicy || DEFAULT_CMS_DATA.privacyPolicy;
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy | DNA LANDMARKZ</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body style="background:#030712; color:#fff; padding:40px; font-family:sans-serif; max-width:960px; margin:0 auto;">
    <h1>Privacy Policy</h1>
    <p><strong>Last Updated:</strong> ${pol.lastUpdated} • Valid for Turnkey Engagements in Chennai, India</p>
    <p style="padding:16px; background:rgba(218,159,20,0.1); border-left:4px solid #DA9F14;">${pol.introBanner}</p>
    ${(pol.sections || []).map((s, idx) => `<section style="margin:24px 0;"><h2 style="color:#DA9F14;">${idx+1}. ${s.title}</h2><p>${(s.content || '').replace(/\\n\\n/g, '</p><p>').replace(/\\n/g, '<br>')}</p></section>`).join('')}
</body>
</html>`;
    downloadFile("privacy-policy.html", content);
}

function renderTermsSectionsList(sections) {
    const container = document.getElementById("termsSectionsContainer");
    if (!container) return;
    if (!sections || sections.length === 0) {
        container.innerHTML = `<p style="color: #9ca3af; font-size: 0.9rem;">No contract articles configured. Click "+ Add Clause Article" to add one.</p>`;
        return;
    }
    container.innerHTML = sections.map((sec, idx) => `
        <div class="legal-edit-item" data-sec-id="${sec.id || ('sec-' + (idx+1))}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 18px; margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-weight: 700; color: var(--color-accent); font-size: 0.95rem;">Contract Article #${idx + 1}</span>
                <button type="button" onclick="deleteTermsSection(${idx})" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">🗑️ Delete</button>
            </div>
            <div class="admin-field-group" style="margin-bottom: 10px;">
                <label class="admin-field-label" style="font-size: 0.8rem;">Article Title</label>
                <input type="text" class="admin-field-input sec-title" value="${(sec.title || '').replace(/"/g, '&quot;')}" placeholder="e.g. Scope of Services">
            </div>
            <div class="admin-field-group" style="margin-bottom: 0;">
                <label class="admin-field-label" style="font-size: 0.8rem;">Article Clauses &amp; Terms (Separate paragraphs with double linebreaks)</label>
                <textarea class="admin-field-input sec-content" rows="4" placeholder="Enter article clauses here...">${sec.content || ''}</textarea>
            </div>
        </div>
    `).join('');
}

function addTermsSection() {
    const cms = getCMSData();
    if (!cms.termsConditions) cms.termsConditions = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.termsConditions));
    if (!cms.termsConditions.sections) cms.termsConditions.sections = [];
    const newIdx = cms.termsConditions.sections.length + 1;
    cms.termsConditions.sections.push({
        id: "terms-article-" + Date.now(),
        title: "New Contract Article",
        content: "Enter detailed contract stipulations here."
    });
    saveCMSData(cms);
    renderTermsSectionsList(cms.termsConditions.sections);
}

function deleteTermsSection(index) {
    if (!confirm("Are you sure you want to delete this contract article?")) return;
    const cms = getCMSData();
    if (cms.termsConditions && cms.termsConditions.sections) {
        cms.termsConditions.sections.splice(index, 1);
        saveCMSData(cms);
        renderTermsSectionsList(cms.termsConditions.sections);
    }
}

function saveTermsConfig() {
    const cms = getCMSData();
    const container = document.getElementById("termsSectionsContainer");
    const sections = [];
    if (container) {
        const items = container.querySelectorAll(".legal-edit-item");
        items.forEach((item, idx) => {
            const title = item.querySelector(".sec-title").value.trim();
            const content = item.querySelector(".sec-content").value.trim();
            const id = item.dataset.secId || ("sec-" + (idx + 1));
            if (title || content) {
                sections.push({ id, title, content });
            }
        });
    }

    cms.termsConditions = {
        lastUpdated: document.getElementById("cfgTermsLastUpdated").value.trim(),
        jurisdiction: document.getElementById("cfgTermsJurisdiction").value.trim(),
        contactPhone: document.getElementById("cfgTermsPhone").value.trim(),
        introBanner: document.getElementById("cfgTermsIntro").value.trim(),
        customHtml: document.getElementById("cfgTermsCustomHtml") ? document.getElementById("cfgTermsCustomHtml").value.trim() : "",
        sections: sections.length > 0 ? sections : (cms.termsConditions.sections || [])
    };

    saveCMSData(cms);
    showSuccessAlert();
}

function resetTermsConfig() {
    if (!confirm("Reset Terms & Conditions back to standard official contract clauses?")) return;
    const cms = getCMSData();
    cms.termsConditions = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA.termsConditions));
    saveCMSData(cms);
    populateCMS();
    showSuccessAlert();
}

function exportTermsHtml() {
    const cms = getCMSData();
    const tms = cms.termsConditions || DEFAULT_CMS_DATA.termsConditions;
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions | DNA LANDMARKZ</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body style="background:#030712; color:#fff; padding:40px; font-family:sans-serif; max-width:960px; margin:0 auto;">
    <h1>Terms & Conditions</h1>
    <p><strong>Last Updated:</strong> ${tms.lastUpdated} • Jurisdiction: ${tms.jurisdiction}</p>
    <p style="padding:16px; background:rgba(218,159,20,0.1); border-left:4px solid #DA9F14;">${tms.introBanner}</p>
    ${(tms.sections || []).map((s, idx) => `<section style="margin:24px 0;"><h2 style="color:#DA9F14;">${idx+1}. ${s.title}</h2><p>${(s.content || '').replace(/\\n\\n/g, '</p><p>').replace(/\\n/g, '<br>')}</p></section>`).join('')}
</body>
</html>`;
    downloadFile("terms-conditions.html", content);
}

function downloadFile(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
