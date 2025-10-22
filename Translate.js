// --- FRONTEND TRANSLATION PROTOTYPE ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Define the translation "dictionary"
    const translations = {
        "en": {
            // Top Nav
            "text-portal-subtitle": "Patient Portal",
            // Welcome
            "text-welcome": "Welcome back, User",
            "text-patient-id": "Patient ID: DEMO-176",
            "text-status": "Active Patient",
            // Tabs
            "tab-overview": "Overview",
            "tab-sessions": "Sessions",
            "tab-progress": "Progress",
            "tab-feedback": "Feedback",
            // Overview: Stats
            "text-current-therapy": "Current Therapy",
            "data-therapy-name": "Panchakarma",
            "text-sessions-completed": "Sessions Completed",
            "text-next-session": "Next Session",
            "data-next-session": "Tomorrow",
            "text-recovery-score": "Recovery Score",
            // Overview: Progress Card
            "text-progress-title": "Current Therapy Progress",
            "data-program-name": "Panchakarma Detox Program",
            "data-session-count": "8/12 sessions",
            "text-recovery-score-label": "Recovery Score",
            "text-milestone-label": "Next Milestone",
            "data-milestone": "Complete Phase 2",
            // Overview: Wellness Card
            "text-wellness-title": "Today's Wellness Tip",
            "text-wellness-desc": "Drink warm water with lemon in the morning to support your digestive fire (Agni) and enhance detoxification.",
            "text-learn-more": "Learn More",
            // Overview: Notifications
            "text-notification-1": "Upcoming session tomorrow at 10:00 AM",
            "text-notification-2": "Your therapy progress report is ready",
            "text-notification-3": "Please complete your weekly health assessment",
            // Sessions Tab
            "text-sessions-title": "Your Sessions",
            "text-sessions-desc": "A list of your past and upcoming sessions will appear here.",
            // Progress Tab
            "text-progress-page-title": "Your Progress",
            "text-progress-desc": "Detailed charts and graphs of your recovery progress will appear here.",
            // Feedback Tab
            "text-feedback-title": "Submit Your Feedback",
            "text-feedback-label": "How are you feeling about your progress?",
            "text-feedback-submit": "Submit",
            "text-feedback-history": "Your Feedback History"
        },
        "hi": {
            // Top Nav
            "text-portal-subtitle": "रोगी पोर्टल",
            // Welcome
            "text-welcome": "वापस स्वागत है, उपयोगकर्ता",
            "text-patient-id": "रोगी आईडी: डेमो-176",
            "text-status": "सक्रिय रोगी",
            // Tabs
            "tab-overview": "अवलोकन",
            "tab-sessions": "सत्र",
            "tab-progress": "प्रगति",
            "tab-feedback": "प्रतिक्रिया",
            // Overview: Stats
            "text-current-therapy": "वर्तमान थेरेपी",
            "data-therapy-name": "पंचकर्म",
            "text-sessions-completed": "सत्र पूरे हुए",
            "text-next-session": "अगला सत्र",
            "data-next-session": "कल",
            "text-recovery-score": "रिकवरी स्कोर",
            // Overview: Progress Card
            "text-progress-title": "वर्तमान थेरेपी प्रगति",
            "data-program-name": "पंचकर्म डिटॉक्स कार्यक्रम",
            "data-session-count": "8/12 सत्र",
            "text-recovery-score-label": "रिकवरी स्कोर",
            "text-milestone-label": "अगला मील का पत्थर",
            "data-milestone": "चरण 2 पूरा करें",
            // Overview: Wellness Card
            "text-wellness-title": "आज का वेलनेस टिप",
            "text-wellness-desc": "अपने पाचन अग्नि (अग्नि) का समर्थन करने और विषहरण को बढ़ाने के लिए सुबह नींबू के साथ गर्म पानी पिएं।",
            "text-learn-more": "और जानें",
            // Overview: Notifications
            "text-notification-1": "कल सुबह 10:00 बजे आगामी सत्र",
            "text-notification-2": "आपकी थेरेपी प्रगति रिपोर्ट तैयार है",
            "text-notification-3": "कृपया अपना साप्ताहिक स्वास्थ्य मूल्यांकन पूरा करें",
            // Sessions Tab
            "text-sessions-title": "आपके सत्र",
            "text-sessions-desc": "आपके पिछले और आगामी सत्रों की सूची यहां दिखाई देगी।",
            // Progress Tab
            "text-progress-page-title": "आपकी प्रगति",
            "text-progress-desc": "आपकी रिकवरी प्रगति के विस्तृत चार्ट और ग्राफ़ यहां दिखाई देंगे।",
            // Feedback Tab
            "text-feedback-title": "अपनी प्रतिक्रिया जमा करें",
            "text-feedback-label": "आप अपनी प्रगति के बारे में कैसा महसूस कर रहे हैं?",
            "text-feedback-submit": "जमा करें",
            "text-feedback-history": "आपकी प्रतिक्रिया का इतिहास"
        }
    };


    // =============================================
    // --- 1. TRANSLATION LOGIC ---
    // =============================================
    const langSelector = document.getElementById('lang-select');
    
    function translatePage(language) {
        document.documentElement.lang = language;
        const langData = translations[language];
        for (const id in langData) {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = langData[id];
            }
        }
    }

    if (langSelector) {
        langSelector.addEventListener('change', (event) => {
            translatePage(event.target.value);
        });
    }


    // =============================================
    // --- 2. NEW: TAB SWITCHING LOGIC ---
    // =============================================
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the link from changing the URL
            
            // Get the target tab ID from the 'data-tab' attribute
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // 1. Remove 'active' from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Add 'active' to the clicked tab
            tab.classList.add('active');

            // 3. Hide all tab content
            tabContents.forEach(content => content.classList.remove('active'));
            // 4. Show the target tab content
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });


    // =============================================
    // --- 3. NEW: FEEDBACK FORM SIMULATION LOGIC ---
    // =============================================
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');
    const feedbackText = document.getElementById('feedback-text');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            // Stop the form from submitting to the server (for this simulation)
            e.preventDefault(); 
            
            const feedbackValue = feedbackText.value.trim();
            
            if (feedbackValue) {
                // Create a new feedback item
                const newItem = document.createElement('div');
                newItem.classList.add('feedback-item');
                
                // Get current date for the item
                const date = new Date().toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                });

                // Create the HTML structure for the new item
                newItem.innerHTML = `
                    <p class="feedback-date">${date}</p>
                    <p class="feedback-content">${feedbackValue}</p>
                `;
                
                // Add the new item to the top of the list
                feedbackList.prepend(newItem);
                
                // Clear the textarea
                feedbackText.value = '';
            }
        });
    }

});