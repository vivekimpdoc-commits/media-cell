import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app.title": "UP Police",
      "app.subtitle": "Cyber Intel",
      "menu.commandCenter": "Command Center",
      "menu.mediaIntel": "Media & Intel",
      "menu.geoLocation": "Geo-Location",
      "menu.grievances": "Grievances",
      "menu.prPress": "PR & Press",
      "menu.crisisEvents": "Crisis & Events",
      "menu.internalOps": "Internal Ops",
      "header.systemActive": "SYSTEM ACTIVE",
      "header.commandingOfficer": "Commanding Officer",
      "header.hqAccess": "HQ Access",
      "header.lang": "EN",
      "title.dashboard": "Command Center Overview",
      "title.intel": "Media Monitoring & Fake News Tracker",
      "title.geo": "Geo-Location & Predictive Intelligence",
      "title.grievances": "Public Grievance Resolution",
      "title.pr": "Press Release Manager & Digital PR",
      "title.crisis": "Crisis Response & Event Coverage",
      "title.internal": "Internal Operations (Directory & Achievements)",
      "dash.activeThreats": "Active Threats Detected",
      "dash.postsAnalyzed": "Posts Analyzed (24h)",
      "dash.fakeNews": "Fake News Alerts",
      "dash.openGrievances": "Open Grievances",
      "dash.liveSentiment": "Live Sentiment Trend",
      "dash.emotionDist": "Current Emotion Distribution"
    }
  },
  hi: {
    translation: {
      "app.title": "यूपी पुलिस",
      "app.subtitle": "साइबर इंटेलिजेंस",
      "menu.commandCenter": "कमांड सेंटर",
      "menu.mediaIntel": "मीडिया व इंटेल",
      "menu.geoLocation": "जियो-लोकेशन",
      "menu.grievances": "जन शिकायतें",
      "menu.prPress": "पीआर और प्रेस",
      "menu.crisisEvents": "क्राइसिस व इवेंट",
      "menu.internalOps": "आंतरिक कार्य",
      "header.systemActive": "सिस्टम सक्रिय है",
      "header.commandingOfficer": "कमांडिंग ऑफिसर",
      "header.hqAccess": "मुख्यालय पहुँच",
      "header.lang": "HI",
      "title.dashboard": "कमांड सेंटर सिंहावलोकन",
      "title.intel": "मीडिया मॉनिटरिंग और फेक न्यूज ट्रैकर",
      "title.geo": "जियो-लोकेशन और प्रेडिक्टिव इंटेलिजेंस",
      "title.grievances": "जन शिकायत निवारण",
      "title.pr": "प्रेस रिलीज मैनेजर और डिजिटल पीआर",
      "title.crisis": "क्राइसिस रिस्पॉन्स और इवेंट कवरेज",
      "title.internal": "आंतरिक संचालन (निर्देशिका और उपलब्धियां)",
      "dash.activeThreats": "सक्रिय खतरे पहचाने गए",
      "dash.postsAnalyzed": "पोस्ट विश्लेषित (24 घंटे)",
      "dash.fakeNews": "फेक न्यूज अलर्ट",
      "dash.openGrievances": "लंबित शिकायतें",
      "dash.liveSentiment": "लाइव सेंटीमेंट ट्रेंड",
      "dash.emotionDist": "वर्तमान भावना वितरण"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
