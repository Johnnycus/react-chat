import express from 'express';
import http from 'http';
import io from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const socketIo = io(server);

const port = 3001;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

socketIo.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Socket.io server started on port ${port}`);
});

export default app;
