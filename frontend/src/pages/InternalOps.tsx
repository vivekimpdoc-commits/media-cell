import React, { useState } from 'react';
import { Contact, Search, Phone, Mail, Image as ImageIcon, Star, PlusCircle } from 'lucide-react';

const InternalOps = () => {
  const [activeTab, setActiveTab] = useState<'directory' | 'gallery'>('directory');

  const journalists = [
    { name: "Rahul Sharma", outlet: "Dainik Jagran", type: "Local", phone: "+91 98765 43210", email: "rahul.s@jagran.com" },
    { name: "Anita Desai", outlet: "NDTV", type: "National", phone: "+91 98765 43211", email: "anita.d@ndtv.com" },
    { name: "Vikram Singh", outlet: "Amar Ujala", type: "Local", phone: "+91 98765 43212", email: "vikram.s@amarujala.com" },
    { name: "Priya Patel", outlet: "Times of India", type: "National", phone: "+91 98765 43213", email: "priya.p@toi.com" }
  ];

  const galleryItems = [
    { title: "Rescue Operation - Sector 12", date: "June 05, 2026", img: "https://via.placeholder.com/300x200/101827/3b82f6?text=Rescue+Op" },
    { title: "CM Excellence Award Ceremony", date: "May 20, 2026", img: "https://via.placeholder.com/300x200/101827/10b981?text=Award" },
    { title: "New Cyber Cell Inauguration", date: "April 15, 2026", img: "https://via.placeholder.com/300x200/101827/8b5cf6?text=Cyber+Cell" },
    { title: "Traffic Awareness Rally", date: "March 10, 2026", img: "https://via.placeholder.com/300x200/101827/f59e0b?text=Rally" }
  ];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('directory')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'directory' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'directory' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Contact size={20} /> Media Directory
        </button>
        <button 
          onClick={() => setActiveTab('gallery')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'gallery' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'gallery' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <ImageIcon size={20} /> Achievement Gallery
        </button>
      </div>

      {activeTab === 'directory' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '20px', alignItems: 'center', width: '300px' }}>
              <Search size={18} color="var(--text-secondary)" />
              <input type="text" placeholder="Search journalists..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '100%' }} />
            </div>
            <button style={{ background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <PlusCircle size={16} /> Add Contact
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '12px', borderTopLeftRadius: '8px' }}>Name</th>
                <th style={{ padding: '12px' }}>Media Outlet</th>
                <th style={{ padding: '12px' }}>Type</th>
                <th style={{ padding: '12px' }}>Phone</th>
                <th style={{ padding: '12px', borderTopRightRadius: '8px' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {journalists.map((j, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{j.name}</td>
                  <td style={{ padding: '12px' }}>{j.outlet}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: j.type === 'National' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)', color: j.type === 'National' ? 'var(--primary-accent)' : 'var(--success-green)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>
                      {j.type}
                    </span>
                  </td>
                  <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="var(--text-secondary)"/> {j.phone}</td>
                  <td style={{ padding: '12px' }}><Mail size={14} color="var(--text-secondary)" style={{marginRight: '8px', verticalAlign: 'middle'}}/>{j.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="fade-in" style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star color="var(--warning-yellow)" /> Official Department Achievements
            </h3>
            <button style={{ background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <PlusCircle size={16} /> Upload Media
            </button>
          </div>

          <div className="grid-4">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } } as any}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '0.95rem' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default InternalOps;
