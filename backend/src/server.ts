import express from 'express';
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
