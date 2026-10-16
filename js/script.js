document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        ar: {
            logo: "ᗅℬ",
            nav_home: "الرئيسية",
            nav_about: "من أنا",
            nav_experience: "الخبرات",
            nav_projects: "المشاريع",
            nav_interests: "الاهتمامات",
            nav_achievements: "الإنجازات",
            nav_skills: "المهارات",
            nav_services: "الخدمات",
            nav_contact: "تواصل",
            hero_greeting: "مرحباً، أنا",
            hero_title: "عبير الغامدي",
            hero_subtitle: "مهندسة حاسب | ذكاء اصطناعي ورؤية حاسوبية | مطوّرة ويب",
            hero_description: "مهندسة حاسب متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، مع خبرة عملية في الروبوتات، الأنظمة المدمجة، وتطوير الويب. أقود فرقاً تقنية وأنفّذ مشاريع من التصميم حتى النشر.",
            stat_members: "عضو تحت قيادتي",
            stat_projects: "مشروع",
            stat_hours: "ساعة تطوعية",
            btn_contact: "تواصل معي",
            btn_more: "المزيد عني",
            section_about: "من أنا",
            about_text: "مهندسة حاسب متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، مع خبرة عملية في الروبوتات، الأنظمة المدمجة، وتطوير الويب. قدت فرقاً تقنية وسلّمت مشاريع من التصميم حتى النشر — بما فيها مشروع تخرّج حاز المركز الأول على مستوى الجامعة.",
            about_list_1: "قيادة المجتمع التقني في نادي البرمجة والذكاء الاصطناعي (+300 عضو) عبر 4 مسارات.",
            about_list_2: "الإشراف على تنفيذ ~70 مشروع تقني في النادي.",
            about_list_3: "نائبة رئيس القسم النسائي مع استمرار القيادة المجتمعية (250+ ساعة تطوعية).",

            section_experience: "الخبرات العملية",
            exp_1_title: "مهندسة ذكاء اصطناعي",
            exp_1_subtitle: "Rimal X — تدريب تعاوني",
            exp_1_point_1: "بناء شات بوت RAG متكامل (Next.js · Supabase · Groq/Llama).",
            exp_1_point_2: "قيادة فريق من 3 أعضاء لتطوير المشروع من التصميم للنشر.",
            exp_1_point_3: "تطبيق Row-Level Security وتحديد معدل نقاط النهاية.",
            exp_2_title: "مطوّرة ويب ومنصة",
            exp_2_subtitle: "Neon Educational Platform — عن بُعد",
            exp_2_point_1: "إعادة تصميم UI/UX للصفحة الرئيسية وبوابات المدربين والطلاب.",
            exp_2_point_2: "تحسين التنقّل وبنية المعلومات باستخدام Next.js.",
            exp_2_point_3: "دعم تقني وتشغيلي لعمليات المنصة التعليمية.",

            section_projects: "المشاريع البارزة",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "مشروع التخرج — مسابقة جامعية",
            proj_1_desc: "دمجت نموذج YOLOv8 لكشف الأجسام مع خط أنابيب V-SLAM أحادي العين في الوقت الحقيقي ضمن لوحة إدراك موحّدة لرسم خرائط ثلاثية الأبعاد تحت الماء، مع التحقق عبر اختبارات ميدانية.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — قسم الابتكار التقني",
            proj_2_desc: "شات بوت RAG متكامل يقلل الهلوسة عبر قاعدة معرفية، مع معالجة أمنية (RLS + Rate Limiting) وتدفق تأهيل عملاء يحدد نية الزائر ويوصي بالباقات المناسبة.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "Neon — عن بُعد",
            proj_3_desc: "إعادة تصميم واجهة المستخدم وبنية المعلومات لمنصة تعليمية، مع تحسين التنقل في بوابات المدربين والطلاب.",

            section_interests: "الاهتمامات",
            interest_ai: "الذكاء الاصطناعي",
            interest_cv: "الرؤية الحاسوبية",
            interest_web: "تطوير الويب",
            interest_robotics: "الروبوتات",

            section_achievements: "الإنجازات",
            achieve_1_title: "المركز الأول",
            achieve_1_subtitle: "مسابقة مشاريع التخرج",
            achieve_1_desc: "فزت بالمركز الأول على مستوى الجامعة في مسابقة مشاريع التخرج عن نظام غواصات ذاتية لمراقبة قاع البحر باستخدام YOLOv8 و V-SLAM.",
            achieve_2_title: "مرتبة الشرف الأولى",
            achieve_2_subtitle: "بكالوريوس هندسة الحاسب",
            achieve_2_desc: "تخرّجت بمرتبة الشرف الأولى بمعدل 3.85/4.0 في تخصص هندسة الحاسب من جامعة الطائف.",
            achieve_3_title: "250+ ساعة",
            achieve_3_subtitle: "تطوع معتمد (2025-2026)",
            achieve_3_desc: "كرّست أكثر من 250 ساعة تطوعية معتمدة في الورش والمشاريع التقنية داخل النادي. كانت هذه المرحلة الأساس الحقيقي لتطوير مهاراتي البرمجية عمليًا.",
            achieve_4_title: "قائدة تقنية",
            achieve_4_subtitle: "قيادة +300 عضو",
            achieve_4_desc: "قدت المجتمع التقني في نادي البرمجة والذكاء الاصطناعي لأكثر من 300 عضو عبر أربعة مسارات، مع الإشراف على تنفيذ ~70 مشروع تقني.",
            achieve_5_title: "شهادة أمن معلومات",
            achieve_5_subtitle: "برنامج مكثف",
            achieve_5_desc: "أتممت برنامجًا مكثفًا في أمن المعلومات ركز على حماية الأنظمة والبيانات والبنية الآمنة للأنظمة التقنية الحديثة.",
            achieve_6_title: "قائدة فريق",
            achieve_6_subtitle: "فريق هندسي من 3 أعضاء",
            achieve_6_desc: "قدت فريقاً هندسياً مكوناً من 3 أعضاء لبناء شات بوت RAG متكامل في Rimal X، من التصميم حتى النشر والتدقيق الأمني.",

            section_skills: "المهارات التقنية",
            skill_cat_1: "🤖 الذكاء الاصطناعي والرؤية الحاسوبية",
            skill_cat_2: "🌐 تطوير الويب",
            skill_cat_3: "⚙️ الأنظمة المدمجة والروبوتات",
            skill_cat_4: "🛠️ الأدوات",

            section_services: "الخدمات",
            service_1_title: "قيادة الفرق التقنية",
            service_1_desc: "إدارة وتوجيه الفرق لتحقيق أهداف المشروع بكفاءة.",
            service_2_title: "تطوير حلول AI و CV",
            service_2_desc: "بناء نماذج ذكاء اصطناعي ورؤية حاسوبية مخصصة لحل مشكلات محددة.",
            service_3_title: "تطوير الويب والمنصات",
            service_3_desc: "بناء تطبيقات ويب متكاملة من التصميم حتى النشر.",
            service_4_title: "بناء نماذج أولية",
            service_4_desc: "تحويل الأفكار إلى نماذج عمل (Prototyping) قابلة للاختبار.",

            section_contact: "تواصل معي",
            label_name: "الاسم",
            label_email: "البريد الإلكتروني",
            label_message: "الرسالة",
            btn_send: "إرسال الرسالة"
        },
        en: {
            logo: "ᗅℬ",
            nav_home: "Home",
            nav_about: "About",
            nav_experience: "Experience",
            nav_projects: "Projects",
            nav_interests: "Interests",
            nav_achievements: "Achievements",
            nav_skills: "Skills",
            nav_services: "Services",
            nav_contact: "Contact",
            hero_greeting: "Hello, I'm",
            hero_title: "Abeer Alghamdi",
            hero_subtitle: "Computer Engineer | AI & Computer Vision | Web Developer",
            hero_description: "Computer Engineer specialized in AI and Computer Vision, with hands-on experience in robotics, embedded systems, and web development. I lead technical teams and deliver projects from design to deployment.",
            stat_members: "Members Led",
            stat_projects: "Projects",
            stat_hours: "Volunteer Hours",
            btn_contact: "Contact Me",
            btn_more: "More About Me",
            section_about: "About Me",
            about_text: "Computer Engineer specialized in AI and Computer Vision, with hands-on experience in robotics, embedded systems, and web development. Led technical teams and delivered projects from design to deployment — including a graduation project that won 1st Place university-wide.",
            about_list_1: "Leading the technical community at the Programming & AI Club (+300 members) across 4 tracks.",
            about_list_2: "Supervised ~70 technical projects delivered within the club.",
            about_list_3: "Deputy Head of the Female Section — 250+ certified volunteer hours.",

            section_experience: "Experience",
            exp_1_title: "AI Engineer",
            exp_1_subtitle: "Rimal X — Co-op Training",
            exp_1_point_1: "Built a full-stack RAG chatbot (Next.js · Supabase · Groq/Llama).",
            exp_1_point_2: "Led a 3-member team from design to deployment.",
            exp_1_point_3: "Implemented Row-Level Security and endpoint rate limiting.",
            exp_2_title: "Web / Platform Developer",
            exp_2_subtitle: "Neon Educational Platform — Remote",
            exp_2_point_1: "Redesigned UI/UX of homepage and instructor/student portals.",
            exp_2_point_2: "Improved navigation and information architecture with Next.js.",
            exp_2_point_3: "Provided technical and operational support for course operations.",

            section_projects: "Featured Projects",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "Graduation Project — University Competition",
            proj_1_desc: "Integrated a YOLOv8 detection model with a real-time monocular V-SLAM pipeline into a unified perception dashboard for underwater 3D mapping, validated through real-world pool testing.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — Technical Innovation",
            proj_2_desc: "Full-stack RAG chatbot reducing hallucinations via knowledge-base integration, with security hardening (RLS + rate limiting) and a lead-qualification flow.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "Neon — Remote",
            proj_3_desc: "Redesigned UI/UX and information architecture for an educational platform, improving navigation across instructor and student portals.",

            section_interests: "Interests",
            interest_ai: "Artificial Intelligence",
            interest_cv: "Computer Vision",
            interest_web: "Web Development",
            interest_robotics: "Robotics",

            section_achievements: "Achievements",
            achieve_1_title: "1st Place",
            achieve_1_subtitle: "Graduation Projects Competition",
            achieve_1_desc: "Won 1st Place university-wide in the Graduation Projects Competition for a bio-inspired UUV system using YOLOv8 and V-SLAM.",
            achieve_2_title: "First-Class Honors",
            achieve_2_subtitle: "BSc Computer Engineering",
            achieve_2_desc: "Graduated with First-Class Honors, GPA 3.85/4.0 in Computer Engineering from Taif University.",
            achieve_3_title: "250+ Hours",
            achieve_3_subtitle: "Certified Volunteering (2025-2026)",
            achieve_3_desc: "Dedicated over 250 certified volunteer hours in workshops and technical projects within the club. This phase was the true foundation for practically developing my programming skills.",
            achieve_4_title: "Tech Leader",
            achieve_4_subtitle: "Leading 300+ Members",
            achieve_4_desc: "Led the technical community at the Programming & AI Club for over 300 members across 4 tracks, supervising ~70 technical projects.",
            achieve_5_title: "InfoSec Certificate",
            achieve_5_subtitle: "Intensive Program",
            achieve_5_desc: "Completed an intensive program in Information Security focused on system and data protection, and strengthening understanding of secure modern architectures.",
            achieve_6_title: "Team Lead",
            achieve_6_subtitle: "3-Member Engineering Team",
            achieve_6_desc: "Led a 3-member engineering team to build a full-stack RAG chatbot at Rimal X — from design to deployment and security audit.",

            section_skills: "Technical Skills",
            skill_cat_1: "🤖 AI · ML · Computer Vision",
            skill_cat_2: "🌐 Web Development",
            skill_cat_3: "⚙️ Embedded & Robotics",
            skill_cat_4: "🛠️ Tools",

            section_services: "Services",
            service_1_title: "Tech Team Leadership",
            service_1_desc: "Managing and guiding teams to achieve project goals efficiently.",
            service_2_title: "AI & CV Solutions",
            service_2_desc: "Building custom AI and Computer Vision models for specific problems.",
            service_3_title: "Web & Platform Development",
            service_3_desc: "Building full-stack web applications from design to deployment.",
            service_4_title: "Prototyping",
            service_4_desc: "Transforming ideas into working models (Prototyping) ready for testing.",

            section_contact: "Contact Me",
            label_name: "Name",
            label_email: "Email",
            label_message: "Message",
            btn_send: "Send Message"
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    let currentLang = localStorage.getItem('lang') || 'ar';
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
        }
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    setLanguage(currentLang);
    setTheme(currentTheme);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
        });
    }
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const next = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    }

    // --- End Translations ---

    // Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Reveal on Scroll Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            .fade-in-section {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .fade-in-section.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Dynamic Copyright Year
    const yearSpan = document.querySelector('#current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recipient = 'aabeer.azez@gmail.com';
            const lang = document.documentElement.lang || 'ar';
            const name = (document.getElementById('name')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const msg = (document.getElementById('message')?.value || '').trim();

            const subject = lang === 'ar'
                ? `رسالة جديدة من ${name || 'زائر'}`
                : `New message from ${name || 'Visitor'}`;

            const bodyLines = lang === 'ar'
                ? [
                    'تفاصيل الرسالة:',
                    `الاسم: ${name || '-'}`,
                    `البريد: ${email || '-'}`,
                    '',
                    msg
                  ]
                : [
                    'Message details:',
                    `Name: ${name || '-'}`,
                    `Email: ${email || '-'}`,
                    '',
                    msg
                  ];

            const body = bodyLines.join('\n');
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            let opened = null;
            try { opened = window.open(gmailUrl, '_blank'); } catch (e) {}
            if (!opened) {
                window.location.href = mailto;
            }
            const info = lang === 'ar'
                ? 'تم فتح مسودة بريد للإرسال. إذا لم تظهر، سيفتح تطبيق البريد على جهازك.'
                : 'A mail draft has been opened. If not visible, your default mail app will open.';
            alert(info);

            contactForm.reset();
        });
    }
});

// Achievement Toggle Details (Global function for onclick)
function toggleDetails(card) {
    const isActive = card.classList.contains('active');
    
    document.querySelectorAll('.achievement-card.active').forEach(activeCard => {
        if (activeCard !== card) {
            activeCard.classList.remove('active');
            const details = activeCard.querySelector('.achievement-details');
            if (details) {
                details.style.maxHeight = null;
                details.style.opacity = '0';
            }
        }
    });

    const details = card.querySelector('.achievement-details');
    if (details) {
        if (isActive) {
            card.classList.remove('active');
            details.style.maxHeight = null;
            details.style.opacity = '0';
        } else {
            card.classList.add('active');
            details.style.maxHeight = details.scrollHeight + "px";
            details.style.opacity = '1';
        }
    }
}
