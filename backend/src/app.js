import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('API del E-commerce funcionando con ESM 🚀');
});

export default app;
