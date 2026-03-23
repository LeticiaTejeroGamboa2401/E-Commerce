import React from 'react';
import { PRODUCTS_DATA } from '../../../constants/data'; // Importamos datos
import ProductCard from './ProductCard';

export default function ProductSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12" aria-labelledby="new-products-title">
      {/* Header de la sección */}
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 id="new-products-title" className="text-2xl font-bold text-gray-900 md:text-3xl">Nuevos Productos</h2>
        <a href="/catalog" className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors shrink-0">
          Ver todos 
          <span className="text-lg transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </a>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}