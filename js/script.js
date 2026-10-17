document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        ar: {
            logo: "ᗅℬ",
            page_title: "عبير الغامدي | مهندسة حاسب آلي",
            meta_description: "عبير الغامدي، مهندسة حاسب آلي متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية والروبوتات والأنظمة المدمجة وتطوير الويب المتكامل.",
            aria_lang_toggle: "التبديل إلى الإنجليزية",
            aria_theme_toggle: "تبديل المظهر",
            aria_menu_toggle: "فتح أو إغلاق قائمة التنقل",
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
            hero_subtitle: "مهندسة حاسب آلي | الذكاء الاصطناعي والرؤية الحاسوبية | الروبوتات | الأنظمة المدمجة | تطوير الويب المتكامل",
            hero_description: "مهندسة حاسب آلي متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، ولديّ خبرة عملية في الروبوتات والأنظمة المدمجة وتطوير الويب المتكامل. أقود فرقاً تقنية وأنجز مشاريع من مرحلة التصميم حتى النشر.",
            stat_members: "عضو في مجتمع قدته",
            stat_projects: "مشروعاً",
            stat_hours: "ساعة تطوعية معتمدة",
            btn_contact: "تواصل معي",
            btn_more: "المزيد عني",
            section_about: "من أنا",
            about_text: "مهندسة حاسب آلي متخصصة في الذكاء الاصطناعي والرؤية الحاسوبية، ولديّ خبرة عملية في الروبوتات والأنظمة المدمجة وتطوير الويب المتكامل. قدت فرقاً تقنية وأنجزت مشاريع من مرحلة التصميم حتى النشر.",
            about_list_1: "قيادة مجتمع تقني يضم أكثر من 300 عضو في نادي البرمجة والذكاء الاصطناعي، عبر أربعة مسارات.",
            about_list_2: "الإشراف على تنفيذ نحو 70 مشروعاً تقنياً في النادي.",
            about_list_3: "نائبة رئيس القسم النسائي الذي يضم أكثر من 100 عضو، مع إنجاز أكثر من 250 ساعة تطوعية معتمدة.",

            section_experience: "الخبرات العملية",
            exp_1_title: "مطوّرة ويب ومنصات",
            exp_1_subtitle: "Neon Educational Platform — عن بُعد، بدوام جزئي",
            exp_1_point_1: "إعادة تصميم واجهة وتجربة المستخدم للصفحة الرئيسية وبوابات المدرّبين والطلاب باستخدام Next.js.",
            exp_1_point_2: "تحسين التنقّل وبنية المعلومات في المنصة.",
            exp_1_point_3: "تقديم الدعم التقني والتشغيلي للمنصة التعليمية.",
            exp_2_title: "مهندسة ذكاء اصطناعي — تدريب تعاوني",
            exp_2_subtitle: "Rimal X — قسم الابتكار التقني",
            exp_2_point_1: "تطوير مساعد محادثة متكامل قائم على RAG (Next.js · Supabase · Groq/Llama)، يستند إلى قاعدة معرفية للحد من الهلوسة.",
            exp_2_point_2: "قيادة فريق من 3 أعضاء لتطوير المشروع من الصفر.",
            exp_2_point_3: "معالجة ملاحظات التدقيق الأمني، بما يشمل صلاحيات الوصول على مستوى الصفوف (RLS) وتحديد معدلات الطلبات على نقاط النهاية.",
            exp_3_title: "برنامج تدريبي مكثف (7 أسابيع)",
            exp_3_subtitle: "تدريب تقني متعدد المجالات",
            exp_3_point_1: "إعداد شبكة لاسلكية آمنة باستخدام Cisco Packet Tracer.",
            exp_3_point_2: "بثّ بيانات ESP32 عبر MQTT.",
            exp_3_point_3: "تطبيقات للرؤية الحاسوبية تشمل استعادة الصور والتعرّف على الإيماءات، ومحاكاة التحكم بالطائرات المسيّرة.",

            section_projects: "المشاريع البارزة",
            proj_badge_1: "🥇 المركز الأول",
            proj_badge_2: "🤖 قائدة فريق",
            proj_badge_3: "🌐 تطوير ويب",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "مشروع التخرج — مسابقة جامعية",
            proj_1_desc: "درّبت ودمجت نموذج YOLOv8 لكشف الأجسام مع خط معالجة V-SLAM أحادي الكاميرا يعمل في الزمن الحقيقي، ضمن لوحة موحّدة لعرض نتائج الإدراك، لدعم إنشاء خرائط ثلاثية الأبعاد تحت الماء بدقة عالية. تحققت من أداء النموذج عبر تجارب في حوض سباحة، بمقارنة النتائج ببيانات مرجعية موسومة يدوياً.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — قسم الابتكار التقني",
            proj_2_desc: "مساعد محادثة متكامل قائم على RAG (Next.js · Supabase · Groq/Llama)، يستند إلى قاعدة معرفية للحد من الهلوسة. تولّيت معالجة ملاحظات التدقيق الأمني، بما يشمل صلاحيات الوصول على مستوى الصفوف وتحديد معدلات الطلبات. وصمّمت مساراً لتأهيل العملاء المحتملين يحدد نية الزائر ويوصي بالباقات المناسبة.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "منصة تعليمية — عن بُعد",
            proj_3_desc: "أعدت تصميم تجربة المستخدم وبنية المعلومات للصفحة الرئيسية وبوابات المدرّبين والطلاب باستخدام Next.js، مع تحسين التنقّل ودعم العمليات التشغيلية للمنصة.",

            section_achievements: "الإنجازات",
            achieve_1_title: "المركز الأول",
            achieve_1_subtitle: "مسابقة مشاريع التخرج الجامعية",
            achieve_1_desc: "الفوز بالمركز الأول في مسابقة مشاريع التخرج على مستوى الجامعة عن مشروع Bio-Inspired Cooperative UUVs لمراقبة قاع البحر باستخدام YOLOv8 وV-SLAM.",
            achieve_2_title: "مرتبة الشرف الأولى",
            achieve_2_subtitle: "بكالوريوس هندسة الحاسب",
            achieve_2_desc: "تخرّجت بمرتبة الشرف الأولى بمعدل 3.85 من 4.0 في تخصص هندسة الحاسب من جامعة الطائف.",
            achieve_3_title: "+300 عضو",
            achieve_3_subtitle: "قيادة المجتمع التقني",
            achieve_3_desc: "قدت المجتمع التقني في نادي البرمجة والذكاء الاصطناعي بجامعة الطائف، الذي يضم أكثر من 300 عضو، عبر أربعة مسارات: الذكاء الاصطناعي وعلوم البيانات، تطوير البرمجيات، برمجة الألعاب، وArduino والأنظمة المدمجة.",
            achieve_4_title: "نحو 70 مشروعاً تقنياً",
            achieve_4_subtitle: "إشراف على التنفيذ",
            achieve_4_desc: "أشرفت على تنفيذ نحو 70 مشروعاً تقنياً في نادي البرمجة والذكاء الاصطناعي، موزّعة على أربعة مسارات.",
            achieve_5_title: "250+ ساعة تطوعية",
            achieve_5_subtitle: "معتمدة (2025 - 2026)",
            achieve_5_desc: "أنجزت أكثر من 250 ساعة تطوعية معتمدة رسمياً في ورش النادي ومشاريعه التقنية خلال عامي 2025 و2026.",
            achieve_6_title: "نائبة رئيس القسم النسائي",
            achieve_6_subtitle: "إدارة قسم +100 عضو",
            achieve_6_desc: "شغلت منصب نائبة رئيس القسم النسائي في نادي البرمجة والذكاء الاصطناعي، وتولّيت إدارة قسم يضم أكثر من 100 عضو وتنسيق فعالياته.",
            achieve_7_title: "قائدة فريق",
            achieve_7_subtitle: "فريق هندسي من 3 أعضاء",
            achieve_7_desc: "قدت فريقاً هندسياً من ثلاثة أعضاء لبناء مساعد محادثة متكامل قائم على RAG (Ramla) في Rimal X، من التصميم إلى النشر ومعالجة الملاحظات الأمنية.",

            section_skills: "المهارات التقنية",
            skill_cat_1: "🤖 الذكاء الاصطناعي · تعلّم الآلة · الرؤية الحاسوبية",
            skill_cat_2: "🌐 تطوير الويب · البرمجيات",
            skill_cat_3: "⚙️ الأنظمة المدمجة · الروبوتات",
            skill_cat_4: "🛠️ الأنظمة والأدوات",

            section_services: "الخدمات",
            service_1_title: "قيادة الفرق التقنية",
            service_1_desc: "إدارة وتوجيه الفرق التقنية لتحقيق أهداف المشروع بكفاءة.",
            service_2_title: "حلول الذكاء الاصطناعي والرؤية الحاسوبية",
            service_2_desc: "بناء نماذج ذكاء اصطناعي ورؤية حاسوبية مخصصة لحل مشكلات محددة.",
            service_3_title: "تطوير الويب (Full-Stack)",
            service_3_desc: "بناء تطبيقات ويب متكاملة.",
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
            page_title: "Abeer Alghamdi | Computer Engineer",
            meta_description: "Abeer Alghamdi is a computer engineer specializing in AI, computer vision, robotics, embedded systems, and full-stack web development.",
            aria_lang_toggle: "Switch to Arabic",
            aria_theme_toggle: "Toggle color theme",
            aria_menu_toggle: "Toggle navigation menu",
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
            hero_description: "I am a computer engineer specializing in AI and computer vision, with hands-on experience in robotics, embedded systems, and full-stack web development. I lead technical teams and take projects from design through deployment.",
            stat_members: "Club Members Led",
            stat_projects: "Projects",
            stat_hours: "Volunteer Hours",
            btn_contact: "Contact Me",
            btn_more: "More About Me",
            section_about: "About Me",
            about_text: "I am a computer engineer specializing in AI and computer vision, with hands-on experience in robotics, embedded systems, and full-stack web development. I have led technical teams and delivered projects from design through deployment.",
            about_list_1: "Led a 300+ member technical community at the Programming and AI Club across four tracks.",
            about_list_2: "Oversaw approximately 70 technical projects delivered through the club.",
            about_list_3: "Served as Deputy Head of the Women's Section (100+ members) and completed 250+ certified volunteer hours.",

            section_experience: "Experience",
            exp_1_title: "Web and Platform Developer",
            exp_1_subtitle: "Neon Educational Platform — Remote, part-time",
            exp_1_point_1: "Redesigned the homepage and instructor and student portals using Next.js, with a focus on UI/UX.",
            exp_1_point_2: "Improved navigation and information architecture across the platform.",
            exp_1_point_3: "Provided technical and operational support for the educational platform.",
            exp_2_title: "AI Engineer (Co-op)",
            exp_2_subtitle: "Rimal X — Technical Innovation Department",
            exp_2_point_1: "Built a full-stack RAG chatbot (Next.js · Supabase · Groq/Llama) grounded in a knowledge base to reduce hallucinations.",
            exp_2_point_2: "Led a three-person team to develop the project from scratch.",
            exp_2_point_3: "Addressed security audit findings by implementing role-based Row-Level Security and endpoint rate limiting.",
            exp_3_title: "Seven-Week Intensive Technical Training",
            exp_3_subtitle: "Multidisciplinary Technical Training",
            exp_3_point_1: "Configured a secure wireless network using Cisco Packet Tracer.",
            exp_3_point_2: "Streamed ESP32 sensor data via MQTT.",
            exp_3_point_3: "Applied computer vision to image restoration and gesture recognition; simulated drone flight control.",

            section_projects: "Featured Projects",
            proj_badge_1: "🥇 First Place",
            proj_badge_2: "🤖 Team Lead",
            proj_badge_3: "🌐 Web Development",
            proj_1_title: "Bio-Inspired Cooperative UUVs",
            proj_1_subtitle: "Graduation Project — University Competition",
            proj_1_desc: "Trained and integrated a YOLOv8 object-detection model with a real-time monocular V-SLAM pipeline in a unified perception dashboard for underwater 3D mapping, achieving high detection accuracy. Validated performance through pool trials against manually annotated reference data.",
            proj_2_title: "AI Agent Chatbot — Ramla",
            proj_2_subtitle: "Rimal X — Technical Innovation Department",
            proj_2_desc: "Built a full-stack RAG chatbot (Next.js · Supabase · Groq/Llama) grounded in a knowledge base to reduce hallucinations. Led post-audit security remediation, including role-based RLS and endpoint rate limiting. Designed a lead-qualification flow to identify visitor intent and recommend suitable packages.",
            proj_3_title: "Neon Educational Platform",
            proj_3_subtitle: "Educational Platform — Remote",
            proj_3_desc: "Redesigned the UI/UX and information architecture of the homepage and instructor and student portals using Next.js, improving navigation and supporting platform operations.",

            section_achievements: "Achievements",
            achieve_1_title: "1st Place",
            achieve_1_subtitle: "University Graduation Projects Competition",
            achieve_1_desc: "Won first place university-wide in the Graduation Projects Competition for the Bio-Inspired Cooperative UUVs project (YOLOv8 and V-SLAM).",
            achieve_2_title: "First-Class Honors",
            achieve_2_subtitle: "BSc Computer Engineering",
            achieve_2_desc: "Graduated with first-class honors and a 3.85/4.0 GPA in Computer Engineering from Taif University.",
            achieve_3_title: "300+ Members",
            achieve_3_subtitle: "Tech Community Leadership",
            achieve_3_desc: "Led a 300+ member technical community at Taif University's Programming and AI Club across four tracks: AI and Data Science, Software Development, Game Programming, and Arduino and Embedded Systems.",
            achieve_4_title: "~70 Technical Projects",
            achieve_4_subtitle: "Supervision & Delivery",
            achieve_4_desc: "Oversaw approximately 70 technical projects across four tracks at the Programming and AI Club.",
            achieve_5_title: "250+ Volunteer Hours",
            achieve_5_subtitle: "Certified (2025 - 2026)",
            achieve_5_desc: "Completed 250+ officially certified volunteer hours through club workshops and technical projects in 2025 and 2026.",
            achieve_6_title: "Deputy Head — Female Section",
            achieve_6_subtitle: "Managing 100+ Members",
            achieve_6_desc: "Served as Deputy Head of the Women's Section at the Programming and AI Club, managing a section of 100+ members and coordinating events.",
            achieve_7_title: "Team Lead",
            achieve_7_subtitle: "3-Member Engineering Team",
            achieve_7_desc: "Led a three-person engineering team in building Ramla, a full-stack RAG chatbot at Rimal X, from design through deployment and security remediation.",

            section_skills: "Technical Skills",
            skill_cat_1: "🤖 AI · Machine Learning · Computer Vision",
            skill_cat_2: "🌐 Web · Software",
            skill_cat_3: "⚙️ Embedded · Robotics",
            skill_cat_4: "🛠️ Systems & Tools",

            section_services: "Services",
            service_1_title: "Technical Team Leadership",
                service_1_desc: "Lead technical teams toward efficient project delivery.",
            service_2_title: "AI & Computer Vision Solutions",
                service_2_desc: "Develop tailored AI and computer vision solutions to address specific problems.",
            service_3_title: "Full-Stack Web Development",
                service_3_desc: "Build full-stack web applications.",
            service_4_title: "Embedded Systems & Robotics",
                service_4_desc: "Develop embedded systems and robotics solutions using Jetson Nano, Arduino, and ESP32.",

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
        document.title = translations[lang].page_title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', translations[lang].meta_description);
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
            langToggleBtn.setAttribute('aria-label', translations[lang].aria_lang_toggle);
        }
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('aria-label', translations[lang].aria_theme_toggle);
        }
        document.querySelector('.mobile-menu-toggle')?.setAttribute('aria-label', translations[lang].aria_menu_toggle);
        
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
