import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos",
    category: "Electrónica",
    price: 89.10,
    oldPrice: 99.00,
    image: "/imagenes/auriculares.jpg",
    badge: "-10%",
    badgeColor: "bg-red-500"
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB",
    category: "Electrónica",
    price: 129.00,
    image: "/imagenes/teclado.jpg",
  },
  {
    id: 3,
    name: "Camiseta Básica Negra",
    category: "Ropa",
    price: 24.00,
    image: "/imagenes/camisa.jpg",
  },
  {
    id: 4,
    name: "Taza de Cerámica Artesanal",
    category: "Hogar",
    price: 15.00,
    image: "/imagenes/taza.jpg",
  },
  {
    id: 5,
    name: "Reloj Inteligente Fit Pro",
    category: "Electrónica",
    price: 199.00,
    image: "/imagenes/reloj.jpg",
    badge: "Nuevo",
    badgeColor: "bg-yellow-500"
  },
  {
    id: 6,
    name: "Zapatillas Deportivas Urban",
    category: "Calzado",
    price: 75.00,
    image: "/imagenes/zapatillas.jpg",
  },
  {
    id: 7,
    name: "Mochila de Viaje Impermeable",
    category: "Accesorios",
    price: 45.00,
    image: "/imagenes/mochila.jpg",
  },
  {
    id: 8,
    name: "Gafas de Sol Polarizadas",
    category: "Accesorios",
    price: 35.00,
    image: "/imagenes/gafas.jpg",
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f3f4f6]">
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 rounded-full px-2 py-1 text-[10px] font-bold text-white ${product.badgeColor || 'bg-yellow-400'}`}>
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Información del Producto */}
      <div className="mt-4 flex flex-col gap-1 text-left">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-900 md:text-base">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Botón Añadir al Carrito */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 active:bg-gray-100">
        <ShoppingCartIcon className='w-4 h-4' />
        Añadir al carrito
      </button>
    </div>
  );
};

export default function ProductSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header de la sección */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Nuevos Productos</h2>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
          Ver todos 
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}