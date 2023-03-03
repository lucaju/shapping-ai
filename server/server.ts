import express from 'express';
import path from 'path';

const publicPath = path.join(__dirname, '..', 'dist');
const server = express();

server.use(express.json({ limit: '5mb' })); // support json encoded bodies

// dev server
const loadDevServer = async () => {
  const { devServer } = await import('./dev');
  devServer(server);
};

if (process.env.NODE_ENV === 'development') loadDevServer();

// static
server.use('/content', express.static('./content'));
server.use(express.static(publicPath));

// catch all
server.get('*', (req, res) => {
  res.status(200).sendFile(path.join(publicPath, 'index.html'));
});

export default server;
