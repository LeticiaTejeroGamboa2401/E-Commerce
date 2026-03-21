// backend/src/app.js
const express = require("express");
const cors = require("cors");
// Aquí importarás tus rutas más adelante
// const productRoutes = require('./routes/products');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando desde app.js 🚀");
});

// Vincular rutas (cuando las tengas)
// app.use('/api/products', productRoutes);

module.exports = app; // <--- Importante exportar la app
