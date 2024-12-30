import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { isEven, items } from '@monorepo/shared';

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? '3000';

// Get the current directory in an ES module environment
const __filename = fileURLToPath(import.meta.url); // Current file path
const __dirname = path.dirname(__filename); // Current directory path

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/api/items', (req, res) => {
  console.log('api/items isEven(2)', isEven(2));
  res.send(items);
});

// Fallback route to serve the React app's index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
