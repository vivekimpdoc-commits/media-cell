import express from 'express';
import multer from 'multer';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Mock Data
const generateMockSentiment = () => ({
  positive: Math.floor(Math.random() * 40) + 20,
  negative: Math.floor(Math.random() * 30) + 10,
  neutral: Math.floor(Math.random() * 50) + 20,
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Send mock sentiment data every 5 seconds
  const interval = setInterval(() => {
    socket.emit('sentimentUpdate', generateMockSentiment());
  }, 5000);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    clearInterval(interval);
  });
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Mock API for Grievances
app.get('/api/grievances', (req, res) => {
  res.json([
    { id: 1, platform: 'Twitter', user: '@citizen_01', issue: 'Traffic jam at Main St.', status: 'Open', sla: '15m' },
    { id: 2, platform: 'Facebook', user: 'Local News', issue: 'Accident reported near bypass', status: 'In Progress', sla: '5m' },
  ]);
});

// Mock API for Gen-AI PR
app.post('/api/pr/draft', (req, res) => {
  const { topic } = req.body;
  const draft = `PRESS RELEASE: In response to recent reports regarding ${topic || 'the incident'}, the UP Police ensures public safety... [AI Generated Draft]`;
  res.json({ draft });
});

// Ensure uploads directory exists
import fs from 'fs';
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
  }
});
const upload = multer({ storage });

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

// New SocialIntel APIs
app.get('/api/social-intel/live-feed', (req, res) => {
  // Mock live feed data; can be extended later
  res.json([
    { text: 'Protest planned near the main highway tomorrow.', platform: 'X', sentiment: 'Negative', risk: 'High' },
    { text: 'Great job by the local police returning my lost wallet.', platform: 'Facebook', sentiment: 'Positive', risk: 'Low' },
    { text: 'Video showing communal tension in sector 4. Looks morphed.', platform: 'WhatsApp', sentiment: 'Negative', risk: 'Critical' },
  ]);
});

app.get('/api/social-intel/sentiment-history', (req, res) => {
  // Mock sentiment data (same as previously hard‑coded)
  res.json([
    { day: 'Mon', positive: 4000, negative: 2400, neutral: 2400 },
    { day: 'Tue', positive: 3000, negative: 1398, neutral: 2210 },
    { day: 'Wed', positive: 2000, negative: 9800, neutral: 2290 },
    { day: 'Thu', positive: 2780, negative: 3908, neutral: 2000 },
    { day: 'Fri', positive: 1890, negative: 4800, neutral: 2181 },
    { day: 'Sat', positive: 2390, negative: 3800, neutral: 2500 },
    { day: 'Sun', positive: 3490, negative: 4300, neutral: 2100 },
  ]);
});

app.get('/api/social-intel/fake-news', (req, res) => {
  // Mock fake news/rumor data
  res.json([
    { content: 'Massive gathering planned at Central Park violating section 144.', platform: 'WhatsApp Groups', spread: 'High (200+ shares/hr)', status: 'Debunked', aiConf: '99%' },
    { content: 'Police using excessive force during peaceful march in south zone.', platform: 'X (Twitter)', spread: 'Critical (Viral)', status: 'Investigating', aiConf: '54%' },
    { content: 'Fake circular regarding new traffic fines.', platform: 'Facebook', spread: 'Medium', status: 'Debunked', aiConf: '95%' },
  ]);
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
