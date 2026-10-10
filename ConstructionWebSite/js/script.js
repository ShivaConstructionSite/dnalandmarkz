/* ==========================================================================
   DNA LANDMARKZ Interactivity Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

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
                // Save inquiry to localStorage for Admin Portal
                const subjectInput = document.getElementById('subject');
                const serviceVal = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'Turnkey Construction';
                const now = new Date();
                const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + 
                                ', ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

                const newInquiry = {
                    id: 'INQ-' + Math.floor(10000 + Math.random() * 90000),
                    name: nameInput.value.trim(),
                    phone: '',
                    email: emailInput.value.trim(),
                    service: serviceVal,
                    message: messageInput.value.trim(),
                    status: 'New',
                    date: dateStr,
                    notes: 'Submitted via website consultation form.'
                };

                try {
                    const existing = JSON.parse(localStorage.getItem('dna_landmarkz_inquiries') || '[]');
                    existing.unshift(newInquiry);
                    localStorage.setItem('dna_landmarkz_inquiries', JSON.stringify(existing));
                } catch(err) {
                    console.error('Error saving inquiry to admin storage:', err);
                }

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

    // Dynamic CMS Footer Hydration
    (function hydrateIndexFooter() {
        try {
            const dataStr = localStorage.getItem('dnalandmarkz_cms_data');
            if (!dataStr) return;
            const cms = JSON.parse(dataStr);
            if (cms && cms.footer) {
                const devName = document.getElementById('footerDevName');
                const devEmail = document.getElementById('footerDevEmail');
                const devEmailLink = document.getElementById('footerDevEmailLink');
                if (devName && cms.footer.devName) devName.innerText = cms.footer.devName;
                if (devEmail && cms.footer.devEmail) devEmail.innerText = cms.footer.devEmail;
                if (devEmailLink && cms.footer.devEmail) devEmailLink.href = 'mailto:' + cms.footer.devEmail;
            }
        } catch(e) {
            console.error('Footer hydration error:', e);
        }
    })();
});
