document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        ar: {
            logo: "ᗅℬ",
            nav_home: "الرئيسية",
            nav_about: "من أنا",
            nav_experience: "الخبرات",
            nav_projects: "المشاريع",
            nav_achievements: "الإنجازات",
            nav_skills: "المهارات",
            nav_services: "الخدمات",
            nav_contact: "تواصل",
            hero_greeting: "مرحباً، أنا",
            hero_title: "عبير الغامدي",
            hero_subtitle: "Computer Engineer | AI & Computer Vision | Robotics | Embedded Systems | Full-Stack",
            hero_description: "مهندسة حاسب متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، مع خبرة عملية في الروبوتات، الأنظمة المدمجة، والتطوير المتكامل. أقود فرقاً تقنية وأنفّذ مشاريع من التصميم حتى النشر.",
            stat_members: "عضو تحت قيادتي",
            stat_projects: "مشروع",
            stat_hours: "ساعة تطوعية",
            btn_contact: "تواصل معي",
            btn_more: "المزيد عني",
            section_about: "من أنا",
            about_text: "مهندسة حاسب متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، مع خبرة عملية في الروبوتات، الأنظمة المدمجة، والتطوير المتكامل. قدت فرقاً تقنية وسلّمت مشاريع من التصميم حتى النشر — بما فيها مشروع تخرّج حاز المركز الأول على مستوى الجامعة.",
            about_list_1: "قيادة المجتمع التقني في نادي البرمجة والذكاء الاصطناعي (+300 عضو) عبر أربعة مسارات.",
            about_list_2: "الإشراف على تنفيذ ~70 مشروع تقني في النادي.",
            about_list_3: "نائبة رئيس القسم النسائي (100+ عضو) — 250+ ساعة تطوعية معتمدة.",

            section_experience: "الخبرات العملية",
            exp_1_title: "مطوّرة ويب / منصة",
            exp_1_subtitle: "Neon Educational Platform — عن بُعد · دوام جزئي",
            exp_1_point_1: "إعادة تصميم واجهة المستخدم (UI/UX) للصفحة الرئيسية وبوابات المدربين والطلاب باستخدام Next.js.",
            exp_1_point_2: "تحسين التنقّل وبنية المعلومات في المنصة.",
            exp_1_point_3: "دعم تقني وتشغيلي لعمليات المنصة التعليمية.",
            exp_2_title: "مهندسة ذكاء اصطناعي — تدريب تعاوني",
            exp_2_subtitle: "Rimal X — قسم الابتكار التقني",
            exp_2_point_1: "بناء شات بوت RAG متكامل (Next.js · Supabase · Groq/Llama) يقلل الهلوسة عبر قاعدة معرفية.",
            exp_2_point_2: "قيادة فريق من 3 أعضاء لتطوير المشروع من التصميم حتى النشر.",
            exp_2_point_3: "معالجة أمنية بعد التدقيق: Row-Level Security + Rate Limiting.",
            exp_3_title: "برنامج تدريبي مكثف (7 أسابيع)",
            exp_3_subtitle: "تدريب تقني متعدد المجالات",
            exp_3_point_1: "تهيئة شبكة لاسلكية آمنة باستخدام Cisco Packet Tracer.",
            exp_3_point_2: "بثّ بيانات ESP32 عبر MQTT.",
            exp_3_point_3: "تطبيق الرؤية الحاسوبية على استعادة الصور والتعرّف على الإيماءات، ومحاكاة التحكم بالطائرات بدون طيار.",

            section_projects: "المشاريع البارزة",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "مشروع التخرج — مسابقة جامعية",
            proj_1_desc: "تدريب ودمج نموذج YOLOv8 لكشف الأجسام مع خط أنابيب V-SLAM أحادي العين في الوقت الحقيقي ضمن لوحة إدراك موحّدة، مع تحقيق دقة كشف عالية لرسم خرائط ثلاثية الأبعاد تحت الماء. تم التحقق من أداء النموذج عبر اختبارات ميدانية في حوض سباحة مقابل بيانات مُعنونة يدوياً.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — قسم الابتكار التقني",
            proj_2_desc: "شات بوت RAG متكامل (Next.js · Supabase · Groq/Llama) يقلل الهلوسة عبر قاعدة معرفية. قدت المعالجة الأمنية بعد التدقيق: Row-Level Security + Rate Limiting. صمّمت تدفق تأهيل العملاء الذي يحدد نية الزائر ويوصي بالباقات المناسبة.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "منصة تعليمية — عن بُعد",
            proj_3_desc: "إعادة تصميم واجهة المستخدم وبنية المعلومات للصفحة الرئيسية وبوابات المدربين والطلاب باستخدام Next.js، مع تحسين التنقل ودعم العمليات التشغيلية للمنصة.",

            section_achievements: "الإنجازات",
            achieve_1_title: "المركز الأول",
            achieve_1_subtitle: "مسابقة مشاريع التخرج الجامعية",
            achieve_1_desc: "المركز الأول في مسابقة مشاريع التخرج على مستوى الجامعة، عن مشروع Bio-Inspired Cooperative UUVs لمراقبة قاع البحر باستخدام YOLOv8 و V-SLAM.",
            achieve_2_title: "مرتبة الشرف الأولى",
            achieve_2_subtitle: "بكالوريوس هندسة الحاسب",
            achieve_2_desc: "تخرّجت بمرتبة الشرف الأولى بمعدل 3.85/4.0 في تخصص هندسة الحاسب من جامعة الطائف.",
            achieve_3_title: "+300 عضو",
            achieve_3_subtitle: "قيادة المجتمع التقني",
            achieve_3_desc: "قدت المجتمع التقني في نادي البرمجة والذكاء الاصطناعي بجامعة الطائف لأكثر من 300 عضو عبر أربعة مسارات: الذكاء الاصطناعي وعلوم البيانات، تطوير البرمجيات، برمجة الألعاب، وبرمجة Arduino/الأنظمة المدمجة.",
            achieve_4_title: "~70 مشروع تقني",
            achieve_4_subtitle: "إشراف على التنفيذ",
            achieve_4_desc: "الإشراف على تنفيذ ما يقارب 70 مشروعاً تقنياً ضمن نادي البرمجة والذكاء الاصطناعي، موزّعة على أربعة مسارات تقنية.",
            achieve_5_title: "250+ ساعة تطوعية",
            achieve_5_subtitle: "معتمدة (2025 - 2026)",
            achieve_5_desc: "أكثر من 250 ساعة تطوعية معتمدة رسمياً في الورش والمشاريع التقنية داخل النادي خلال الفترة 2025-2026.",
            achieve_6_title: "نائبة رئيس القسم النسائي",
            achieve_6_subtitle: "إدارة قسم +100 عضو",
            achieve_6_desc: "نائبة رئيس القسم النسائي في نادي البرمجة والذكاء الاصطناعي (100+ عضو)، مع إدارة القسم وتنسيق الفعاليات.",
            achieve_7_title: "قائدة فريق",
            achieve_7_subtitle: "فريق هندسي من 3 أعضاء",
            achieve_7_desc: "قيادة فريق هندسي من 3 أعضاء لبناء شات بوت RAG متكامل (Ramla) في Rimal X — من التصميم حتى النشر والمعالجة الأمنية.",

            section_skills: "المهارات التقنية",
            skill_cat_1: "🤖 AI · ML · Computer Vision",
            skill_cat_2: "🌐 Web · Software",
            skill_cat_3: "⚙️ Embedded · Robotics",
            skill_cat_4: "🛠️ Systems & Tools",

            section_services: "الخدمات",
            service_1_title: "قيادة الفرق التقنية",
            service_1_desc: "إدارة وتوجيه الفرق التقنية لتحقيق أهداف المشروع بكفاءة.",
            service_2_title: "حلول AI & Computer Vision",
            service_2_desc: "بناء نماذج ذكاء اصطناعي ورؤية حاسوبية مخصصة لحل مشكلات محددة.",
            service_3_title: "تطوير الويب (Full-Stack)",
            service_3_desc: "بناء تطبيقات ويب متكاملة من التصميم حتى النشر.",
            service_4_title: "الأنظمة المدمجة والروبوتات",
            service_4_desc: "تطوير حلول مدمجة وروبوتية باستخدام Jetson Nano و Arduino و ESP32.",

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
            nav_achievements: "Achievements",
            nav_skills: "Skills",
            nav_services: "Services",
            nav_contact: "Contact",
            hero_greeting: "Hello, I'm",
            hero_title: "Abeer Alghamdi",
            hero_subtitle: "Computer Engineer | AI & Computer Vision | Robotics | Embedded Systems | Full-Stack",
            hero_description: "Computer Engineer specialized in AI and Computer Vision, with hands-on experience in robotics, embedded systems, and full-stack development. I lead technical teams and deliver projects from design to deployment.",
            stat_members: "Members Led",
            stat_projects: "Projects",
            stat_hours: "Volunteer Hours",
            btn_contact: "Contact Me",
            btn_more: "More About Me",
            section_about: "About Me",
            about_text: "Computer Engineer specialized in AI and Computer Vision, with hands-on experience in robotics, embedded systems, and full-stack development. Led technical teams and delivered projects from design to deployment — including a graduation project that won 1st Place university-wide.",
            about_list_1: "Led the technical community at the Programming & AI Club (+300 members) across four tracks.",
            about_list_2: "Supervised ~70 technical projects delivered within the club.",
            about_list_3: "Deputy Head of the Female Section (100+ members) — 250+ certified volunteer hours.",

            section_experience: "Experience",
            exp_1_title: "Web / Platform Developer",
            exp_1_subtitle: "Neon Educational Platform — Remote · Part-time",
            exp_1_point_1: "Redesigned UI/UX of homepage and instructor/student portals using Next.js.",
            exp_1_point_2: "Improved navigation and information architecture across the platform.",
            exp_1_point_3: "Provided technical and operational support for course operations.",
            exp_2_title: "AI Engineer — Co-op Training",
            exp_2_subtitle: "Rimal X — Technical Innovation Department",
            exp_2_point_1: "Built a full-stack RAG chatbot (Next.js · Supabase · Groq/Llama) reducing hallucinations via knowledge-base.",
            exp_2_point_2: "Led a 3-member team from design to deployment.",
            exp_2_point_3: "Post-audit security remediation: role-based Row-Level Security + endpoint rate limiting.",
            exp_3_title: "Seven-Week Technical Training",
            exp_3_subtitle: "Multi-domain technical training",
            exp_3_point_1: "Configured a secure wireless network using Cisco Packet Tracer.",
            exp_3_point_2: "Streamed ESP32 sensor data via MQTT.",
            exp_3_point_3: "Applied computer vision to image restoration and gesture recognition; simulated drone flight control.",

            section_projects: "Featured Projects",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "Graduation Project — University Competition",
            proj_1_desc: "Trained and integrated a YOLOv8 object-detection model with a real-time monocular V-SLAM pipeline into a unified perception dashboard, achieving strong detection accuracy for live underwater 3D mapping. Validated model performance through real-world pool testing against manually labeled ground truth.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — Technical Innovation Department",
            proj_2_desc: "Full-stack RAG chatbot (Next.js · Supabase · Groq/Llama) reducing hallucinations via knowledge-base. Led post-audit security remediation: role-based RLS + endpoint rate limiting. Designed a lead-qualification flow identifying visitor intent and recommending tailored packages.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "Educational Platform — Remote",
            proj_3_desc: "Redesigned UI/UX and information architecture of homepage and instructor/student portals using Next.js, improving navigation and supporting the platform's course operations.",

            section_achievements: "Achievements",
            achieve_1_title: "1st Place",
            achieve_1_subtitle: "University Graduation Projects Competition",
            achieve_1_desc: "Won 1st Place university-wide in the Graduation Projects Competition for the Bio-Inspired Cooperative UUVs project (YOLOv8 + V-SLAM).",
            achieve_2_title: "First-Class Honors",
            achieve_2_subtitle: "BSc Computer Engineering",
            achieve_2_desc: "Graduated with First-Class Honors, GPA 3.85/4.0 in Computer Engineering from Taif University.",
            achieve_3_title: "300+ Members",
            achieve_3_subtitle: "Tech Community Leadership",
            achieve_3_desc: "Led the technical community at the Programming & AI Club at Taif University (300+ members) across four tracks: AI & Data Science, Software Development, Game Programming, and Arduino/Embedded Programming.",
            achieve_4_title: "~70 Technical Projects",
            achieve_4_subtitle: "Supervision & Delivery",
            achieve_4_desc: "Supervised the delivery of ~70 technical projects within the Programming & AI Club, distributed across four technical tracks.",
            achieve_5_title: "250+ Volunteer Hours",
            achieve_5_subtitle: "Certified (2025 - 2026)",
            achieve_5_desc: "250+ certified volunteer hours in workshops and technical projects within the club during 2025-2026.",
            achieve_6_title: "Deputy Head — Female Section",
            achieve_6_subtitle: "Managing 100+ Members",
            achieve_6_desc: "Deputy Head of the Female Section at the Programming & AI Club (100+ members) — departmental management and event coordination.",
            achieve_7_title: "Team Lead",
            achieve_7_subtitle: "3-Member Engineering Team",
            achieve_7_desc: "Led a 3-member engineering team to build the full-stack RAG chatbot (Ramla) at Rimal X — from design to deployment and security remediation.",

            section_skills: "Technical Skills",
            skill_cat_1: "🤖 AI · ML · Computer Vision",
            skill_cat_2: "🌐 Web · Software",
            skill_cat_3: "⚙️ Embedded · Robotics",
            skill_cat_4: "🛠️ Systems & Tools",

            section_services: "Services",
            service_1_title: "Technical Team Leadership",
            service_1_desc: "Managing and guiding technical teams to achieve project goals efficiently.",
            service_2_title: "AI & Computer Vision Solutions",
            service_2_desc: "Building custom AI and Computer Vision models for specific problems.",
            service_3_title: "Full-Stack Web Development",
            service_3_desc: "Building full-stack web applications from design to deployment.",
            service_4_title: "Embedded Systems & Robotics",
            service_4_desc: "Developing embedded and robotics solutions using Jetson Nano, Arduino, and ESP32.",

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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

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
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
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
            .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
            .fade-in-section.visible { opacity: 1; transform: translateY(0); }
        `;
        document.head.appendChild(style);
    }

    const yearSpan = document.querySelector('#current-year');
    if(yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
    
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recipient = 'aabeer.azez@gmail.com';
            const lang = document.documentElement.lang || 'ar';
            const name = (document.getElementById('name')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const msg = (document.getElementById('message')?.value || '').trim();

            const subject = lang === 'ar' ? `رسالة جديدة من ${name || 'زائر'}` : `New message from ${name || 'Visitor'}`;
            const bodyLines = lang === 'ar'
                ? ['تفاصيل الرسالة:', `الاسم: ${name || '-'}`, `البريد: ${email || '-'}`, '', msg]
                : ['Message details:', `Name: ${name || '-'}`, `Email: ${email || '-'}`, '', msg];

            const body = bodyLines.join('\n');
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            let opened = null;
            try { opened = window.open(gmailUrl, '_blank'); } catch (e) {}
            if (!opened) { window.location.href = mailto; }
            const info = lang === 'ar'
                ? 'تم فتح مسودة بريد للإرسال. إذا لم تظهر، سيفتح تطبيق البريد على جهازك.'
                : 'A mail draft has been opened. If not visible, your default mail app will open.';
            alert(info);
            contactForm.reset();
        });
    }
});

// Achievement Toggle Details
function toggleDetails(card) {
    const isActive = card.classList.contains('active');
    
    document.querySelectorAll('.achievement-card.active').forEach(activeCard => {
        if (activeCard !== card) {
            activeCard.classList.remove('active');
            const details = activeCard.querySelector('.achievement-details');
            if (details) { details.style.maxHeight = null; details.style.opacity = '0'; }
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
