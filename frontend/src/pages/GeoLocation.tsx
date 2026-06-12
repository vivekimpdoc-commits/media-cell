import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Radar, Crosshair, MapPin } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom radar animation component for the map
const RadarAnimation = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    // This is a placeholder for a more complex D3/Leaflet animation integration
    // For now, it just ensures the map is centered
    map.setView(center, 13);
  }, [center, map]);
  return null;
};

const GeoLocation = () => {
  const center: [number, number] = [26.8467, 80.9462]; // Lucknow coordinates

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      <div className="grid-3">
        <div className="glass-panel stat-card">
          <div className="stat-title">Active Geofences</div>
          <div className="stat-value" style={{color: 'var(--primary-accent)'}}>4 Zones</div>
          <div className="stat-trend">Monitoring 15k+ devices</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Predictive Crisis Alerts</div>
          <div className="stat-value" style={{color: 'var(--alert-red)'}}>2 High Risk</div>
          <div className="stat-trend trend-up">Within 24-48 hours</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Metadata Traces</div>
          <div className="stat-value">124 Scans</div>
          <div className="stat-trend trend-down">Last 1 hour</div>
        </div>
      </div>

      <div className="glass-panel" style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', minHeight: '500px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 className="section-title" style={{margin: 0}}>Live Crisis Heat-Map & Geofencing</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Crosshair size={16} /> Create Geofence
            </button>
          </div>
        </div>
        
        <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative' }}>
          {/* Map Overlay UI */}
          <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '10px' }}>
             <div style={{ background: 'rgba(10,15,24,0.8)', backdropFilter: 'blur(4px)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.5)' }}>
               <div style={{ fontSize: '0.8rem', color: 'var(--alert-red)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                 <div className="live-dot"></div> HOTSPOT DETECTED
               </div>
               <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>Sector 18 Market (Activity +400%)</div>
             </div>
          </div>

          <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map-tiles"
            />
            
            {/* Geofence Zone 1 (Red Hotspot) */}
            <Circle center={[26.85, 80.95]} pathOptions={{ fillColor: 'red', fillOpacity: 0.2, color: 'red' }} radius={1500}>
              <Popup>High tension reported. Analyzing past 48h data.</Popup>
            </Circle>
            
            {/* Geofence Zone 2 (Warning) */}
            <Circle center={[26.83, 80.92]} pathOptions={{ fillColor: 'orange', fillOpacity: 0.2, color: 'orange' }} radius={1000}>
               <Popup>VIP Rally Zone. Active Monitoring.</Popup>
            </Circle>

            <Marker position={[26.85, 80.95]}>
              <Popup>Crisis Epicenter</Popup>
            </Marker>

            <RadarAnimation center={center} />
          </MapContainer>
        </div>

        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
             <h4 style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>Predictive Model Output</h4>
             <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
               Based on historical data (2022 elections) and current social media velocity, there is an <strong>82% probability</strong> of localized unrest near Sector 18 within the next 24 hours. Recommended action: Increase patrol density.
             </p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
             <h4 style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>Metadata Extraction Log</h4>
             <div style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--primary-accent)' }}>
                {">"} Analyzing image_4029.jpg...<br/>
                {">"} Exif Data Found.<br/>
                {">"} Original Date: 2021-04-12 14:30:00 (Mismatched with claim)<br/>
                {">"} Camera: iPhone 12 Pro (GPS: 28.6139, 77.2090 - Delhi)<br/>
                <span style={{color: 'var(--alert-red)'}}>{">"} STATUS: MEDIA IS OLD AND RECIRCULATED.</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoLocation;
