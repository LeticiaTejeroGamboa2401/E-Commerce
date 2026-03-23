import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-50 text-black pt-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Columna 1: Pet's Ride */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Tiendita</h3>
          <p className="text-gray-500">
            Tu destino favorito para encontrar los mejores productos con una calidad inigualable y un diseño espectacular.
          </p>
        </div>

        {/* Columna 2: Categorías */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Categorías</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-[#005c71]">Electrónica</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Ropa y Moda</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Hogar y Jardín</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Deportes</a></li>
          </ul>
        </div>

        {/* Columna 3: Ayuda */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Ayuda</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-[#005c71]">Centro de Soporte</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Envíos y Entregas</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Devoluciones</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 4: Legal */}
        <div className="space-y-2 left-10">
          <h4 className="text-xl font-semibold">Legal</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-[#005c71]">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-[#005c71]">Política de Cookies</a></li>
          </ul>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Pie de página inferior */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm gap-4">
        <p>&copy; 2026 Tiendita. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="X" className="hover:text-sky-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
          </div>
      </div>
    </footer>
  );
}
