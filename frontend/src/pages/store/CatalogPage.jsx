import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import { PRODUCTS_DATA } from "../../constants/data";

export default function CatalogPage() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen flex flex-col bg-white'>
            <Header/>
            <main className="pt-28 flex-1 max-w-7xl mx-auto w-full px-4 py-8">
                {/* Breadcrumbs */}
                <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
                    <a href="/" className="hover:text-blue-600">Inicio</a>
                    <span>/</span>
                    <a href="/catalogo" className="hover:text-blue-600">Catálogo</a>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Todos los Productos</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12">
                
                    {/* Sidebar de Filtros */}
                    <FilterSidebar />

                    {/* Contenido Principal */}
                    <div className="flex-1">
                        
                        {/* Header del Listado */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Todos los Productos</h1>
                            </div>
                        
                            <div className="flex items-center gap-6">
                                <p className="text-sm text-gray-500">
                                Mostrando <span className="font-semibold text-gray-900">1-12</span> de 48 resultados
                                </p>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-gray-600 whitespace-nowrap">Ordenar por:</label>
                                    <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-2 font-medium focus:ring-0 cursor-pointer">
                                        <option>Más relevantes</option>
                                        <option>Precio: Bajo a Alto</option>
                                        <option>Precio: Alto a Bajo</option>
                                        <option>Más nuevos</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Grid de Productos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                            {PRODUCTS_DATA.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Paginación (Opcional pero recomendado para el futuro) */}
                        <div className="mt-16 flex justify-center">
                            <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition">
                                Cargar más productos
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
