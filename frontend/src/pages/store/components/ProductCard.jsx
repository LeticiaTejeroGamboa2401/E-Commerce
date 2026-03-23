import React, { memo } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


const ProductCard = memo(({ product }) => {
  return (
    <div className="group cursor-pointer">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f3f4f6]">
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold text-white shadow ${product.badgeColor || 'bg-yellow-400'}`}>
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          // Optimización: Carga en diferido, ya que probablemente no esté en el primer scroll view.
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Información del Producto */}
      <div className="mt-4 flex flex-col gap-1 text-left">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-900 md:text-base group-hover:text-blue-600 transition">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Botón Añadir al Carrito */}
      <button 
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:bg-gray-100 hover:border-gray-300 shadow-sm"
        aria-label={`Añadir ${product.name} al carrito`}
      >
        <ShoppingCartIcon className='w-4 h-4' aria-hidden="true" />
        Añadir al carrito
      </button>
    </div>
  );
});

export default ProductCard;