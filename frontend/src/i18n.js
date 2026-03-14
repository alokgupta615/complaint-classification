import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        home: "Home",
        lodge: "Lodge Complaint",
        track: "Track Complaint",
        about: "About",
        contact: "Contact",

        // Hero
        heroTitle: "Smart Complaint Classification System",
        heroSubtitle:
          "A smarter way to resolve municipal issues — fast, transparent and efficient.",
        submit: "Submit Complaints",
        trackBtn: "Track Complaints",

        // Form
        lodgeTitle: "Lodge a Complaint",
        complaintTitle: "Complaint Title",
        complaintDescription: "Complaint Description",
        complaintType: "Complaint Type",
        location: "Location",
        selectLocation: "Select location",
        upload: "Upload Photo/Video",
        submitBtn: "Submit",

        gorakhpur: "Gorakhpur",
        lucknow: "Lucknow",
        delhi: "Delhi",
        mumbai: "Mumbai",
        hyderabad: "Hyderabad",

        // About
        // About Section
        aboutTitle: "About SmartSamadhan",
        aboutSubtitle:
          "Smart Municipal Complaint Classification & Management System",
        intro1:
          "SmartSamadhan is a modern digital platform designed to simplify municipal complaint management. It enables citizens to report civic issues quickly while ensuring transparency, accountability, and faster resolution by authorities.",
        intro2:
          "Our system bridges the communication gap between citizens and municipal departments by automating complaint classification and routing.",
        keyFeatures: "Key Features",
        feature1: "Simple and user-friendly complaint submission",
        feature2: "Smart complaint categorization",
        feature3: "Real-time complaint status tracking",
        feature4: "Automatic department routing",
        feature5: "Transparent resolution workflow",
        feature6: "Secure and responsive web interface",
        howItWorks: "How It Works",
        step1: "Citizens submit complaints through the portal.",
        step2: "The system classifies the complaint automatically.",
        step3: "The complaint is assigned to the appropriate department.",
        step4: "Authorities review and update complaint status.",
        step5: "Citizens track progress in real-time.",
        mission: "Our Mission",
        missionText:
          "To build a transparent and efficient digital grievance redressal system that strengthens trust between citizens and government bodies.",
        vision: "Our Vision",
        visionText:
          "To create smarter cities through technology-driven public service innovation and digital governance.",

        // Footer
        footerAbout: "About Us",
        footerAboutText:
          "Helping people resolve their municipal problems efficiently.",
        quickLinks: "Quick Links",
        services: "Services",
        followUs: "Follow Us",
        rights: "All rights reserved.",

        // Contact Page
        contactTitle: "Contact Us",
        contactSubtitle:
          "If you have any questions or need assistance regarding your complaint, feel free to contact our support team.",
        contactInfo: "Contact Information",
        email: "Email",
        phone: "Phone",
        address: "Address",
        sendMessage: "Send us a Message",
        name: "Your Name",
        message: "Your Message",
        sendBtn: "Send Message",
        officeAddress: "Municipal Services Office, Lucknow, Uttar Pradesh",
      },
    },

    hi: {
      translation: {
        // Navbar
        home: "होम",
        lodge: "शिकायत दर्ज करें",
        track: "शिकायत ट्रैक करें",
        about: "हमारे बारे में",
        contact: "संपर्क करें",

        // Hero
        heroTitle: "स्मार्ट शिकायत वर्गीकरण प्रणाली",
        heroSubtitle:
          "नगर निगम की समस्याओं को हल करने का स्मार्ट तरीका — तेज़, पारदर्शी और प्रभावी।",
        submit: "शिकायत दर्ज करें",
        trackBtn: "शिकायत ट्रैक करें",

        // Form
        lodgeTitle: "शिकायत दर्ज करें",
        name: "नाम",
        email: "ईमेल",
        complaintTitle: "शिकायत शीर्षक",
        complaintDescription: "शिकायत विवरण",
        complaintType: "शिकायत प्रकार",
        location: "स्थान",
        selectLocation: "स्थान चुनें",
        upload: "फोटो/वीडियो अपलोड करें",
        submitBtn: "जमा करें",

        gorakhpur: "गोरखपुर",
        lucknow: "लखनऊ",
        delhi: "दिल्ली",
        mumbai: "मुंबई",
        hyderabad: "हैदराबाद",

        // About
        // About Section
        aboutTitle: "स्मार्ट समाधान के बारे में",
        aboutSubtitle: "स्मार्ट नगर शिकायत वर्गीकरण और प्रबंधन प्रणाली",
        intro1:
          "स्मार्ट समाधान एक आधुनिक डिजिटल प्लेटफ़ॉर्म है जो नगर शिकायत प्रबंधन को सरल बनाता है। यह नागरिकों को त्वरित रूप से शिकायत दर्ज करने में सक्षम बनाता है और अधिकारियों द्वारा पारदर्शिता, जवाबदेही और तेज़ समाधान सुनिश्चित करता है।",
        intro2:
          "हमारी प्रणाली नागरिकों और नगर निगम विभागों के बीच संचार अंतर को कम करती है और शिकायतों को स्वचालित रूप से वर्गीकृत और रूट करती है।",
        keyFeatures: "मुख्य विशेषताएं",
        feature1: "सरल और उपयोगकर्ता-अनुकूल शिकायत सबमिशन",
        feature2: "स्मार्ट शिकायत वर्गीकरण",
        feature3: "रीयल-टाइम शिकायत स्थिति ट्रैकिंग",
        feature4: "स्वचालित विभाग रूटिंग",
        feature5: "पारदर्शी समाधान वर्कफ़्लो",
        feature6: "सुरक्षित और उत्तरदायी वेब इंटरफ़ेस",
        howItWorks: "यह कैसे काम करता है",
        step1: "नागरिक पोर्टल के माध्यम से शिकायत दर्ज करते हैं।",
        step2: "सिस्टम शिकायत को स्वचालित रूप से वर्गीकृत करता है।",
        step3: "शिकायत को उचित विभाग को सौंपा जाता है।",
        step4:
          "अधिकारियों द्वारा शिकायत की स्थिति की समीक्षा और अपडेट की जाती है।",
        step5: "नागरिक वास्तविक समय में प्रगति को ट्रैक करते हैं।",
        mission: "हमारा मिशन",
        missionText:
          "एक पारदर्शी और प्रभावी डिजिटल शिकायत निवारण प्रणाली बनाना जो नागरिकों और सरकारी निकायों के बीच विश्वास को मजबूत करे।",
        vision: "हमारा विज़न",
        visionText:
          "प्रौद्योगिकी-संचालित सार्वजनिक सेवा नवाचार और डिजिटल शासन के माध्यम से स्मार्ट शहर बनाना।",

        // Footer
        footerAbout: "हमारे बारे में",
        footerAboutText: "नगर समस्याओं के समाधान में लोगों की सहायता करना।",
        quickLinks: "त्वरित लिंक",
        services: "सेवाएं",
        followUs: "हमें फॉलो करें",
        rights: "सर्वाधिकार सुरक्षित।",

        // Contact Page
        contactTitle: "संपर्क करें",
        contactSubtitle:
          "यदि आपको शिकायत दर्ज करने या उसकी स्थिति जानने में कोई समस्या हो, तो आप हमारी सहायता टीम से संपर्क कर सकते हैं।",
        contactInfo: "संपर्क जानकारी",
        email: "ईमेल",
        phone: "फोन",
        address: "पता",
        sendMessage: "हमें संदेश भेजें",
        name: "आपका नाम",
        message: "आपका संदेश",
        sendBtn: "संदेश भेजें",
        officeAddress: "नगर सेवा कार्यालय, लखनऊ, उत्तर प्रदेश",
      },
    },
  },

  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
