import 'dotenv/config';
import app from './src/app.js';
import db from './src/config/db.js';
import Product from './src/models/Product.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await db.authenticate();
    console.log('✅ Conexión exitosa a MySQL.');
    await db.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
}

startServer();
