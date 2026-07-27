/* ==========================================================================
   DNA LANDMARKZ Interactivity Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 0. Sync Dynamic Content from CMS Storage
    // ==========================================================================
    const syncCMSContent = () => {
        const dataStr = localStorage.getItem("dnalandmarkz_cms_data");
        if (!dataStr) return;

        try {
            const cms = JSON.parse(dataStr);

            // Update Moving Festival Offer Train Ticker Bar
            const tickerEl = document.getElementById("announcementTicker");
            if (tickerEl) {
                if (cms.ticker && cms.ticker.enabled === false) {
                    tickerEl.classList.add("hidden");
                    document.body.classList.add("no-ticker");
                } else {
                    tickerEl.classList.remove("hidden");
                    document.body.classList.remove("no-ticker");
                    if (cms.ticker) {
                        const badgeEl = document.getElementById("tickerBadgeText");
                        const msgEl = document.getElementById("tickerMessageText");
                        if (badgeEl && cms.ticker.badge) badgeEl.innerText = cms.ticker.badge;
                        if (msgEl && cms.ticker.text) msgEl.innerText = cms.ticker.text;
                    }
                }
            }

            // Update Phone Numbers & Address
            if (cms.general) {
                if (cms.general.mainPhone) {
                    document.querySelectorAll("a[href^='tel:+919080206002']").forEach(el => {
                        el.href = "tel:" + cms.general.mainPhone.replace(/\s+/g, '');
                        const textSpan = el.querySelector("span") || el;
                        if (textSpan) textSpan.innerText = cms.general.mainPhone;
                    });
                }
                if (cms.general.devPhone) {
                    document.querySelectorAll("a[href^='tel:+919025066953']").forEach(el => {
                        el.href = "tel:" + cms.general.devPhone.replace(/\s+/g, '');
                        // If text contains number, update
                        if (el.innerText.includes("9025066953")) {
                            el.childNodes.forEach(child => {
                                if (child.nodeType === Node.TEXT_NODE && child.textContent.includes("9025066953")) {
                                    child.textContent = child.textContent.replace("+91 9025066953", cms.general.devPhone);
                                }
                            });
                        }
                    });
                }
                if (cms.general.address) {
                    const addrEl = document.getElementById("contactAddressText");
                    if (addrEl) addrEl.innerText = cms.general.address;
                }
            }

            // Navigation / Brand Logo
            if (cms.nav) {
                document.querySelectorAll(".logo-title").forEach(el => {
                    const accent = cms.nav.logoAccent ? `<span class="text-accent">${cms.nav.logoAccent}</span>` : "";
                    el.innerHTML = `${cms.nav.logoTitle || "DNA"} ${accent}`;
                });
                document.querySelectorAll(".logo-subtitle").forEach(el => {
                    if (cms.nav.logoSubtitle) el.innerText = cms.nav.logoSubtitle;
                });
            }

            // Hero Section
            if (cms.hero) {
                const heroSec = document.querySelector(".hero-section");
                if (heroSec && cms.hero.heroBg) {
                    heroSec.style.backgroundImage = "url('" + cms.hero.heroBg + "')";
                }

                const heroSub = document.querySelector(".hero-subtitle");
                if (heroSub && cms.hero.subtitle) heroSub.innerText = cms.hero.subtitle;

                const heroTitle = document.querySelector(".hero-title");
                if (heroTitle && cms.hero.title) heroTitle.innerHTML = cms.hero.title.replace("Construction", "<span class='gradient-text'>Construction</span>");

                const heroDesc = document.querySelector(".hero-desc");
                if (heroDesc && cms.hero.desc) heroDesc.innerText = cms.hero.desc;
            }

            // Services Section
            if (cms.services) {
                const sSec = document.getElementById("services");
                if (sSec) {
                    const sub = sSec.querySelector(".section-subtitle");
                    const title = sSec.querySelector(".section-title");
                    const desc = sSec.querySelector(".section-desc");
                    if (sub && cms.services.subtitle) sub.innerText = cms.services.subtitle;
                    if (title && cms.services.title) title.innerText = cms.services.title;
                    if (desc && cms.services.desc) desc.innerText = cms.services.desc;

                    const cards = sSec.querySelectorAll(".service-card");
                    const sKeys = ['s1', 's2', 's3', 's4'];
                    cards.forEach((card, idx) => {
                        const key = sKeys[idx];
                        if (cms.services[key + 'Title']) {
                            const h3 = card.querySelector("h3");
                            if (h3) h3.innerText = cms.services[key + 'Title'];
                        }
                        if (cms.services[key + 'Bullets']) {
                            const ul = card.querySelector(".service-bullet-list");
                            if (ul) {
                                const bullets = cms.services[key + 'Bullets'].split(",").map(b => b.trim()).filter(Boolean);
                                ul.innerHTML = bullets.map(b => `<li>${b}</li>`).join("");
                            }
                        }
                    });
                }
            }

            // Why Choose Us Section
            if (cms.whyChoose) {
                const wSec = document.getElementById("why-choose-us");
                if (wSec) {
                    const sub = wSec.querySelector(".section-subtitle");
                    const title = wSec.querySelector(".section-title");
                    const desc = wSec.querySelector(".section-desc");
                    if (sub && cms.whyChoose.subtitle) sub.innerText = cms.whyChoose.subtitle;
                    if (title && cms.whyChoose.title) title.innerText = cms.whyChoose.title;
                    if (desc && cms.whyChoose.desc) desc.innerText = cms.whyChoose.desc;

                    const items = wSec.querySelectorAll(".why-item");
                    items.forEach((item, idx) => {
                        const num = idx + 1;
                        const tKey = 'item' + num + 'Title';
                        const dKey = 'item' + num + 'Desc';
                        const h3 = item.querySelector("h3");
                        const p = item.querySelector("p");
                        if (h3 && cms.whyChoose[tKey]) h3.innerText = cms.whyChoose[tKey];
                        if (p && cms.whyChoose[dKey]) p.innerText = cms.whyChoose[dKey];
                    });
                }
            }

            // About Us & Stats Section
            if (cms.about) {
                const aSec = document.getElementById("about");
                if (aSec) {
                    const sub = aSec.querySelector(".section-subtitle");
                    const title = aSec.querySelector(".section-title");
                    const desc = aSec.querySelector(".section-desc");
                    if (sub && cms.about.subtitle) sub.innerText = cms.about.subtitle;
                    if (title && cms.about.title) title.innerText = cms.about.title;
                    if (desc && cms.about.desc) desc.innerText = cms.about.desc;

                    // Stats Counter
                    const statNums = aSec.querySelectorAll(".stat-number");
                    if (statNums.length >= 3) {
                        if (cms.about.statProjects) {
                            statNums[0].innerText = cms.about.statProjects;
                            statNums[0].setAttribute("data-target", cms.about.statProjects.replace(/\D/g,''));
                        }
                        if (cms.about.statQuality) {
                            statNums[1].innerText = cms.about.statQuality;
                            statNums[1].setAttribute("data-target", cms.about.statQuality.replace(/\D/g,''));
                        }
                        if (cms.about.statExperience) {
                            statNums[2].innerText = cms.about.statExperience;
                            statNums[2].setAttribute("data-target", cms.about.statExperience.replace(/\D/g,''));
                        }
                    }

                    // Vision & Mission
                    const visionPane = document.getElementById("vision");
                    const missionPane = document.getElementById("mission");
                    if (visionPane && cms.about.visionText) {
                        const p = visionPane.querySelector("p");
                        if (p) p.innerText = cms.about.visionText;
                    }
                    if (missionPane && cms.about.missionText) {
                        const p = missionPane.querySelector("p");
                        if (p) p.innerText = cms.about.missionText;
                    }
                }
            }

            // Contact & Free Consultation Panel
            if (cms.general && cms.general.contactDesc) {
                const cDesc = document.querySelector(".contact-panel-desc");
                if (cDesc) cDesc.innerText = cms.general.contactDesc;
            }

            // Footer Section
            if (cms.footer) {
                if (cms.footer.copyright) {
                    const cEl = document.querySelector(".footer-copyright p");
                    if (cEl) cEl.innerText = cms.footer.copyright;
                }
                if (cms.footer.devName) {
                    const devStrong = document.querySelector(".dev-info-container strong");
                    if (devStrong) devStrong.innerText = cms.footer.devName;
                }
            }

            // SEO Metadata
            if (cms.seo) {
                if (cms.seo.title) document.title = cms.seo.title;
                if (cms.seo.desc) {
                    const metaDesc = document.querySelector("meta[name='description']");
                    if (metaDesc) metaDesc.setAttribute("content", cms.seo.desc);
                }
            }

            // Update Projects Portfolio Grid if Custom Projects exist
            if (cms.projects && cms.projects.length > 0) {
                const portfolioGrid = document.querySelector(".portfolio-grid");
                if (portfolioGrid) {
                    const customHtml = cms.projects.map((p, idx) => `
                        <div class="portfolio-item ${p.category ? p.category.toLowerCase() : 'construction'} animate-scroll appeared">
                            <div class="portfolio-card">
                                <div class="portfolio-img-box">
                                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                                    <div class="portfolio-overlay">
                                        <span class="portfolio-category">${p.category}</span>
                                        <h3 class="portfolio-title">${p.title}</h3>
                                        <button class="btn-project-detail" data-project="${p.id || idx+1}">
                                            <span>View Details</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join("");
                    portfolioGrid.innerHTML = customHtml;
                }
            }

            // Update Testimonials Slider if Custom Testimonials exist
            if (cms.testimonials && cms.testimonials.length > 0) {
                const slider = document.getElementById("testimonialsSlider");
                const indicatorsBox = document.querySelector(".slider-indicators");
                if (slider) {
                    slider.innerHTML = cms.testimonials.map((t, idx) => `
                        <div class="testimonial-slide ${idx === 0 ? 'active' : ''}">
                            <div class="testimonial-card-inner">
                                <div class="quote-symbol">“</div>
                                <p class="testimonial-text">${t.text}</p>
                                <div class="client-profile">
                                    <img src="${t.image}" alt="${t.name} client portrait" class="client-img">
                                    <div class="client-info">
                                        <h4 class="client-name">${t.name}</h4>
                                        <span class="client-role">${t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join("");
                }
                if (indicatorsBox) {
                    indicatorsBox.innerHTML = cms.testimonials.map((t, idx) => `
                        <button class="indicator ${idx === 0 ? 'active' : ''}" data-slide="${idx}"></button>
                    `).join("");
                }
            }
        } catch (e) {
            console.error("CMS Sync Error:", e);
        }
    };

    // Run Initial Sync
    syncCMSContent();

    // Listen for storage changes from Admin tab
    window.addEventListener("storage", syncCMSContent);

    // ==========================================================================
    // 1. Sticky Header Shrink
    // ==========================================================================
    const mainHeader = document.getElementById('mainHeader');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // 2. Mobile Menu Toggle
    // ==========================================================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            // Toggle body scroll locking when mobile menu is open
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'initial';
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                navMenu.classList.remove('open');
                document.body.style.overflow = 'initial';
            });
        });
    }

    // ==========================================================================
    // 3. Scroll Active Navigation Link Highlight
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjust threshold slightly to match visual screen center
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}` || 
                (currentSectionId === 'home' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 4. Scroll-in Reveal Animations (Intersection Observer)
    // ==========================================================================
    const scrollElements = document.querySelectorAll('.animate-scroll');
    
    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay classes if not pre-defined
                if (!entry.target.classList.contains('delay-100') && idx % 3 === 1) {
                    entry.target.classList.add('delay-100');
                } else if (!entry.target.classList.contains('delay-200') && idx % 3 === 2) {
                    entry.target.classList.add('delay-200');
                }
                
                entry.target.classList.add('appeared');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    scrollElements.forEach(el => elementObserver.observe(el));

    // ==========================================================================
    // 5. About Tabs UI Switcher
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Set active states
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ==========================================================================
    // 6. Statistics Counter Animation
    // ==========================================================================
    const statsRow = document.getElementById('statsRow');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds animation
            const stepTime = 30; // speed update intervals
            const increment = target / (duration / stepTime);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (target === 100 ? '%' : '+');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                }
            }, stepTime);
        });
    };

    if (statsRow) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsRow);
    }

    // ==========================================================================
    // 7. Portfolio Filter Mechanics
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Toggle active classes on filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });

    // ==========================================================================
    // 8. Testimonials Carousel Slider
    // ==========================================================================
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        let index = currentSlide + 1;
        if (index >= slides.length) index = 0;
        showSlide(index);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 6000); // Change testimonial every 6 seconds
    };

    const resetSlideShow = () => {
        clearInterval(slideInterval);
        startSlideShow();
    };

    // Click on indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetSlideShow();
        });
    });

    // Initialize slide show
    if (slides.length > 0) {
        startSlideShow();
    }

    // ==========================================================================
    // 9. Modal Showcase Detail Drawer
    // ==========================================================================
    // Mock details data for projects
    const projectsData = {
        "1": {
            title: "DNA Commercial Square",
            category: "Commercial Space",
            location: "Chennai, Tamil Nadu",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            desc: "Designed as a turnkey corporate space for modern IT hubs, incorporating energy-saving double glazed facades, eco-friendly concrete structural pillars, and centralized climate zone controls.",
            client: "DNA Landmarkz Commercial Division",
            area: "145,000 sq ft",
            duration: "18 Months"
        },
        "2": {
            title: "DNA Glass Obsidian Villa",
            category: "Luxury Residential",
            location: "ECR Beach Road, Chennai",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            desc: "A custom beachfront luxury estate featuring reinforced concrete frame structures, customized structural glazing, modern infinity pool foundations, and integrated automation systems.",
            client: "Mr. Marcus Sterling",
            area: "8,200 sq ft",
            duration: "14 Months"
        },
        "3": {
            title: "DNA Corporate Office Interiors",
            category: "Commercial Space",
            location: "OMR IT Corridor, Chennai",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            desc: "Custom turnkey office interior design prioritizing open workplace layouts, sound absorption wall panels, modular desk zones, and customized LED suspended false ceilings.",
            client: "Vanguard IT Solutions",
            area: "35,000 sq ft",
            duration: "6 Months"
        },
        "4": {
            title: "DNA Logistical Terminal",
            category: "Industrial Hub",
            location: "Sriperumbudur, Tamil Nadu",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            desc: "Industrial grade heavy structural steel framing warehouse with specialized heavy-load dustless flooring, natural roof ventilation bays, and solar grid interfaces.",
            client: "Astra Logistics Solutions",
            area: "380,000 sq ft",
            duration: "16 Months"
        },
        "5": {
            title: "DNA Aura Eco-Villa",
            category: "Luxury Residential",
            location: "Coimbatore, Tamil Nadu",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            desc: "A luxury green villa constructed using thermal insulated panels, passive airflow designs, solar electrical walls, and localized rainwater harvesting networks.",
            client: "Dr. Eleanor Vance",
            area: "4,500 sq ft",
            duration: "10 Months"
        },
        "6": {
            title: "DNA Solar Arrays Facility",
            category: "Industrial Facility",
            location: "Madurai, Tamil Nadu",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
            desc: "Civil foundation layout works spanning 15 acres, engineered specifically for high thermal expansion tolerances, wind shear support structures, and battery bank layouts.",
            client: "Solaria Energy Corporation",
            area: "15 Acres",
            duration: "12 Months"
        }
    };

    const projectModal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImg');
    const modalCat = document.getElementById('modalCat');
    const modalTitle = document.getElementById('modalTitle');
    const modalLoc = document.getElementById('modalLoc');
    const modalDesc = document.getElementById('modalDesc');
    const modalClient = document.getElementById('modalClient');
    const modalArea = document.getElementById('modalArea');
    const modalDuration = document.getElementById('modalDuration');
    
    const btnProjectDetails = document.querySelectorAll('.btn-project-detail');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    const openModal = (projectId) => {
        const data = projectsData[projectId];
        if (!data) return;

        // Load project data
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalCat.textContent = data.category;
        modalTitle.textContent = data.title;
        modalLoc.textContent = data.location;
        modalDesc.textContent = data.desc;
        modalClient.textContent = data.client;
        modalArea.textContent = data.area;
        modalDuration.textContent = data.duration;

        // Show Modal
        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // block background scrolling
    };

    const closeModal = () => {
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'initial'; // restore scrolling
    };

    btnProjectDetails.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape Key Modal Close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('open')) {
            closeModal();
        }
    });

    // ==========================================================================
    // 10. Contact & Consultation Form Validation
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');
    const toastNotification = document.getElementById('toastNotification');
    const toastClose = document.getElementById('toastClose');

    const showToast = () => {
        toastNotification.classList.add('show');
        // Auto hide toast after 6 seconds
        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 6000);
    };

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toastNotification.classList.remove('show');
        });
    }

    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const btnSubmit = document.getElementById('btnSubmit');

        // Email validation regex
        const isValidEmail = (email) => {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
        };

        const validateField = (input, validatorFn = null) => {
            const formGroup = input.parentElement;
            let isValid = true;

            if (input.required && !input.value.trim()) {
                isValid = false;
            } else if (validatorFn && !validatorFn(input.value.trim())) {
                isValid = false;
            }

            if (!isValid) {
                formGroup.classList.add('invalid');
            } else {
                formGroup.classList.remove('invalid');
            }

            return isValid;
        };

        // Real-time error removal
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('input', () => {
                const formGroup = input.parentElement;
                if (formGroup.classList.contains('invalid')) {
                    if (input === emailInput) {
                        validateField(input, isValidEmail);
                    } else {
                        validateField(input);
                    }
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate all fields
            const isNameValid = validateField(nameInput);
            const isEmailValid = validateField(emailInput, isValidEmail);
            const isMessageValid = validateField(messageInput);

            if (isNameValid && isEmailValid && isMessageValid) {
                // Form is valid: simulate loading state
                btnSubmit.classList.add('loading');
                btnSubmit.disabled = true;

                setTimeout(() => {
                    // Reset Form
                    contactForm.reset();
                    btnSubmit.classList.remove('loading');
                    btnSubmit.disabled = false;
                    
                    // Show Toast Notification
                    showToast();
                }, 1800); // Simulate network latency
            }
        });
    }

    // Newsletter Form Submission simulation
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            if (emailInput.value.trim()) {
                emailInput.value = '';
                alert('Thank you for subscribing to our DNA Landmarkz newsletter!');
            }
        });
    }
});
