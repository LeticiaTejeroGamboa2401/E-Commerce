import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">Tiendita</h1>
          </div>
          
          {/* Navegación */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Inicio</a>
            <a href="/catalog" className="text-gray-700 hover:text-blue-600">Catálogo</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Novedades</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Ofertas</a>
          </nav>

          {/* Acciones: búsqueda, carrito, perfil */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <ShoppingCartIcon className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </button>
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg" 
              alt="Perfil"
              className="h-8 w-8 rounded-full"
            />
          </div>

        </div>
      </div>
    </header>
  );
}