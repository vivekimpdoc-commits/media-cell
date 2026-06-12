import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const [sentimentData, setSentimentData] = useState<any[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5000');
    
    socket.on('sentimentUpdate', (data) => {
      setSentimentData(prev => {
        const newData = [...prev, { time: new Date().toLocaleTimeString(), ...data }];
        if (newData.length > 10) newData.shift();
        return newData;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const pieData = sentimentData.length > 0 ? [
    { name: 'Positive', value: sentimentData[sentimentData.length - 1].positive },
    { name: 'Negative', value: sentimentData[sentimentData.length - 1].negative },
    { name: 'Neutral', value: sentimentData[sentimentData.length - 1].neutral },
  ] : [];

  const COLORS = ['#10b981', '#ef4444', '#f59e0b'];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="grid-4">
        <div className="glass-panel stat-card">
          <div className="stat-title">{t('dash.activeThreats')}</div>
          <div className="stat-value" style={{color: 'var(--alert-red)'}}>12</div>
          <div className="stat-trend trend-up">↑ 3 from yesterday</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">{t('dash.postsAnalyzed')}</div>
          <div className="stat-value">2.4M</div>
          <div className="stat-trend trend-up">↑ 15% volume spike</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">{t('dash.fakeNews')}</div>
          <div className="stat-value" style={{color: 'var(--warning-yellow)'}}>45</div>
          <div className="stat-trend trend-down">↓ 5 from yesterday</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">{t('dash.openGrievances')}</div>
          <div className="stat-value">128</div>
          <div className="stat-trend trend-down">SLA 98% Met</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
          <h3 className="section-title">{t('dash.liveSentiment')}</h3>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={sentimentData}>
              <defs>
                <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorNeg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(10,15,24,0.9)', border: '1px solid rgba(255,255,255,0.2)' }} />
              <Area type="monotone" dataKey="positive" stroke="#10b981" fillOpacity={1} fill="url(#colorPos)" />
              <Area type="monotone" dataKey="negative" stroke="#ef4444" fillOpacity={1} fill="url(#colorNeg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
          <h3 className="section-title">{t('dash.emotionDist')}</h3>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'rgba(10,15,24,0.9)', border: '1px solid rgba(255,255,255,0.2)' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
