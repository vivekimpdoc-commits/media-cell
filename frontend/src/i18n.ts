import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app.title": "UP Police",
      "app.subtitle": "Cyber Intel",
      "menu.commandCenter": "Command Center",
      "menu.warRoom": "War Room (24/7)",
      "menu.dailyWorkflow": "Daily Workflow",
      "menu.mediaIntel": "Media Intel",
      "menu.mediaCred": "Media Credibility",
      "menu.deepfake": "Deepfake Lab",
      "menu.sosEmergency": "SOS & Emergency",
      "menu.geoLocation": "Geo-Location",
      "menu.grievances": "Grievances",
      "menu.prPress": "PR & Press",
      "menu.crisisEvents": "Crisis & Events",
      "menu.digitalWarriors": "Digital Warriors",
      "menu.internalOps": "Internal Ops",
      "header.systemActive": "SYSTEM ACTIVE",
      "header.commandingOfficer": "Commanding Officer",
      "header.hqAccess": "HQ Access",
      "header.lang": "EN",
      "title.dashboard": "Command Center Overview",
      "title.warRoom": "Central Command War Room",
      "title.daily": "Morning Scanning & Daily Workflow",
      "title.intel": "Media Monitoring & Fake News Tracker",
      "title.credibility": "Media Rating & Credibility Score",
      "title.deepfake": "Next-Gen Deepfake & AI Image Analyzer",
      "title.sos": "Live SOS & Emergency Monitoring",
      "title.geo": "Geo-Location & Predictive Intelligence",
      "title.grievances": "Public Grievance Resolution & Escalation",
      "title.pr": "AI Press Release Generator & Digital PR",
      "title.crisis": "Crisis Response & Event Coverage",
      "title.warriors": "Digital Volunteers Network",
      "title.internal": "Internal Operations & Influencer Database",
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
      "menu.warRoom": "वॉर रूम (24/7)",
      "menu.dailyWorkflow": "दैनिक कार्यप्रवाह",
      "menu.mediaIntel": "मीडिया इंटेल",
      "menu.mediaCred": "मीडिया विश्वसनीयता",
      "menu.deepfake": "डीपफेक लैब",
      "menu.sosEmergency": "आपातकालीन SOS",
      "menu.geoLocation": "जियो-लोकेशन",
      "menu.grievances": "जन शिकायतें",
      "menu.prPress": "पीआर और प्रेस",
      "menu.crisisEvents": "क्राइसिस व इवेंट",
      "menu.digitalWarriors": "डिजिटल वारियर्स",
      "menu.internalOps": "आंतरिक कार्य",
      "header.systemActive": "सिस्टम सक्रिय है",
      "header.commandingOfficer": "कमांडिंग ऑफिसर",
      "header.hqAccess": "मुख्यालय पहुँच",
      "header.lang": "HI",
      "title.dashboard": "कमांड सेंटर सिंहावलोकन",
      "title.warRoom": "केंद्रीय वॉर रूम",
      "title.daily": "मॉर्निंग स्कैनिंग व दैनिक कार्यप्रवाह",
      "title.intel": "मीडिया मॉनिटरिंग और फेक न्यूज ट्रैकर",
      "title.credibility": "मीडिया रेटिंग और विश्वसनीयता स्कोर",
      "title.deepfake": "नेक्स्ट-जेन डीपफेक और एआई इमेज एनालाइजर",
      "title.sos": "लाइव आपातकालीन मॉनिटरिंग (SOS)",
      "title.geo": "जियो-लोकेशन और प्रेडिक्टिव इंटेलिजेंस",
      "title.grievances": "जन शिकायत निवारण और एस्केलेशन",
      "title.pr": "एआई प्रेस रिलीज जनरेटर और डिजिटल पीआर",
      "title.crisis": "क्राइसिस रिस्पॉन्स और इवेंट कवरेज",
      "title.warriors": "डिजिटल वॉलंटियर्स नेटवर्क",
      "title.internal": "आंतरिक संचालन और इन्फ्लुएंसर डेटाबेस",
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
