import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Creamos la instancia de Sequelize
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    define: {
      timestamps: true,
    },
    logging: false,
  }
);

export default db;
