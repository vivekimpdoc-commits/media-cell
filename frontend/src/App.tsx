import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Shield, Activity, Map, MessageSquareWarning, Megaphone, LayoutDashboard, Video, Users, Globe, AlertCircle, Smartphone, Scan, Target, CalendarClock, Star, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './index.css';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const WarRoom = React.lazy(() => import('./pages/WarRoom'));
const DailyWorkflow = React.lazy(() => import('./pages/DailyWorkflow'));
const SocialIntel = React.lazy(() => import('./pages/SocialIntel'));
const MediaCredibility = React.lazy(() => import('./pages/MediaCredibility'));
const DeepfakeLab = React.lazy(() => import('./pages/DeepfakeLab'));
const SOSEmergency = React.lazy(() => import('./pages/SOSEmergency'));
const GeoLocation = React.lazy(() => import('./pages/GeoLocation'));
const Grievances = React.lazy(() => import('./pages/Grievances'));
const DigitalPR = React.lazy(() => import('./pages/DigitalPR'));
const CrisisManagement = React.lazy(() => import('./pages/CrisisManagement'));
const DigitalWarriors = React.lazy(() => import('./pages/DigitalWarriors'));
const InternalOps = React.lazy(() => import('./pages/InternalOps'));
const AITools = React.lazy(() => import('./pages/AITools'));

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="sidebar" style={{ overflowY: 'auto' }}>
      <div className="logo-container">
        <Shield size={32} className="logo-icon" />
        <div className="logo-text">{t('app.title')}<br/><span style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>{t('app.subtitle')}</span></div>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} end>
          <LayoutDashboard size={20} />
          <span>{t('menu.commandCenter')}</span>
        </NavLink>
        <NavLink to="/warroom" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} style={{ borderLeft: '2px solid var(--alert-red)', background: 'rgba(239, 68, 68, 0.05)' }}>
          <Target size={20} color="var(--alert-red)" />
          <span style={{ color: 'var(--alert-red)', fontWeight: 'bold' }}>{t('menu.warRoom')}</span>
        </NavLink>
        <NavLink to="/daily" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <CalendarClock size={20} />
          <span>{t('menu.dailyWorkflow')}</span>
        </NavLink>
        <NavLink to="/intel" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Activity size={20} />
          <span>{t('menu.mediaIntel')}</span>
        </NavLink>
        <NavLink to="/credibility" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Star size={20} color="var(--warning-yellow)" />
          <span>{t('menu.mediaCred')}</span>
        </NavLink>
        <NavLink to="/deepfake" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Scan size={20} color="#8b5cf6" />
          <span style={{ color: '#8b5cf6' }}>{t('menu.deepfake')}</span>
        </NavLink>
        <NavLink to="/sos" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <AlertCircle size={20} color="var(--alert-red)" />
          <span style={{ color: 'var(--alert-red)' }}>{t('menu.sosEmergency')}</span>
        </NavLink>
        <NavLink to="/geo" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Map size={20} />
          <span>{t('menu.geoLocation')}</span>
        </NavLink>
        <NavLink to="/grievances" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquareWarning size={20} />
          <span>{t('menu.grievances')}</span>
        </NavLink>
        <NavLink to="/warriors" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Smartphone size={20} color="var(--primary-accent)" />
          <span>{t('menu.digitalWarriors')}</span>
        </NavLink>
        <NavLink to="/pr" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Megaphone size={20} />
          <span>{t('menu.prPress')}</span>
        </NavLink>
        <NavLink to="/crisis" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Video size={20} />
          <span>{t('menu.crisisEvents')}</span>
        </NavLink>
        <NavLink to="/internal" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>{t('menu.internalOps')}</span>
        </NavLink>
        <NavLink to="/ai-tools" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Zap size={20} color="#8b5cf6" />
          <span style={{ color: '#8b5cf6' }}>{t('menu.aiTools')}</span>
        </NavLink>
      </nav>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const getTitle = () => {
    switch(location.pathname) {
      case '/': return t('title.dashboard');
      case '/warroom': return t('title.warRoom');
      case '/daily': return t('title.daily');
      case '/intel': return t('title.intel');
      case '/credibility': return t('title.credibility');
      case '/deepfake': return t('title.deepfake');
      case '/sos': return t('title.sos');
      case '/geo': return t('title.geo');
      case '/grievances': return t('title.grievances');
      case '/warriors': return t('title.warriors');
      case '/pr': return t('title.pr');
      case '/crisis': return t('title.crisis');
      case '/internal': return t('title.internal');
      default: return 'Dashboard';
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="top-header">
      <div className="header-title">{getTitle()}</div>
      <div className="header-actions">
        
        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '4px 10px',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontWeight: 'bold',
            fontSize: '0.85rem'
          }}
        >
          <Globe size={16} /> {i18n.language === 'en' ? 'हिंदी' : 'English'}
        </button>

        <div className="live-badge">
          <div className="live-dot"></div>
          {t('header.systemActive')}
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
            SP
          </div>
          <div>
            <div style={{fontSize: '0.9rem', fontWeight: 'bold'}}>{t('header.commandingOfficer')}</div>
            <div style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>{t('header.hqAccess')}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="layout-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <div className="page-container">
            <React.Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>Loading Subsystems...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/warroom" element={<WarRoom />} />
                <Route path="/daily" element={<DailyWorkflow />} />
                <Route path="/intel" element={<SocialIntel />} />
                <Route path="/credibility" element={<MediaCredibility />} />
                <Route path="/deepfake" element={<DeepfakeLab />} />
                <Route path="/sos" element={<SOSEmergency />} />
                <Route path="/geo" element={<GeoLocation />} />
                <Route path="/grievances" element={<Grievances />} />
                <Route path="/warriors" element={<DigitalWarriors />} />
                <Route path="/pr" element={<DigitalPR />} />
                <Route path="/crisis" element={<CrisisManagement />} />
                <Route path="/internal" element={<InternalOps />} />
                <Route path="/ai-tools" element={<AITools />} />
              </Routes>
            </React.Suspense>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
