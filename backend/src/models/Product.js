import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Product = db.define(
  'Product',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'productos',
    timestamps: true,
  }
);

export default Product;
