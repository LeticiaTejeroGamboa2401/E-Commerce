import React from 'react';
import { CATEGORIES, AVAILABILITY } from '../../../constants/filters';

export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      {/* Categorías */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Categorías</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((cat) => (
            <li key={cat.id} className="flex items-center justify-between group cursor-pointer">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{cat.name}</span>
              </label>
              <span className="text-xs text-gray-400">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Precio */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Precio</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">$</span>
            <input type="number" placeholder="0" className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">$</span>
            <input type="number" placeholder="500" className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
        {/* Slider de rango (Simulado con Tailwind) */}
        <div className="relative h-1.5 bg-gray-200 rounded-full">
            <div className="absolute h-full bg-blue-500 rounded-full left-[10%] right-[30%]"></div>
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full cursor-pointer shadow-sm"></div>
            <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full cursor-pointer shadow-sm"></div>
        </div>
      </div>

      {/* Disponibilidad */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Disponibilidad</h3>
        <ul className="space-y-3">
          {AVAILABILITY.map((item) => (
            <li key={item.id} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}