import { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../../../constants/data';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Definimos la función de cambio de slide
    const playNext = () => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    };

    // Cada slide dura 5 segundos
    let intervalId = setInterval(playNext, 5000);

    // Pausa del carrusel
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalId); // Pausa
      } else {
        // Reinicia el intervalo al volver a la pestaña, 
        // evitando saltos bruscos inmediatamente.
        clearInterval(intervalId); 
        intervalId = setInterval(playNext, 5000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpieza al desmontar el componente
    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Solo se ejecuta una vez al montar

  return (
    // Optimizamos CLS: Definimos una altura mínima para el contenedor padre 
    // que coincida con la altura de los slides absolutos.
    <section 
      className="relative w-full flex justify-center h-[416px] pb-16" 
      aria-roledescription="carousel" 
      aria-label="Productos destacados"
    >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute top-0 flex justify-center transition-opacity duration-1000 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
            >
                {/* Contenedor exacto: texto + imagen */}
                <div className="flex h-[400px] overflow-hidden rounded-2xl shadow-lg bg-[#f2f4f6]">
                    
                    {/* Sección de Texto */}
                    <div className="max-w-xl h-full p-6 flex flex-col justify-center items-start">
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{slide.subtitle}</p>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">{slide.title}</h2>
                        <p className="mt-4 text-gray-700 text-base md:text-lg">{slide.description}</p>
                        <a
                            href={slide.buttonLink}
                            className="mt-6 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-150 shadow-sm"
                            aria-label={`${slide.buttonText} sobre ${slide.title}`}
                        >
                            {slide.buttonText}
                        </a>
                    </div>

                    {/* Sección de Imagen - Optimizada */}
                    <div className="hidden md:block h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            // IMPORTANTE PARA RENDIMIENTO:
                            // fetchPriority="high" y loading="eager" solo para el primer slide visible (LCP).
                            // loading="lazy" para el resto.
                            fetchPriority={index === 0 ? "high" : "low"}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="h-full w-[500px] object-cover"
                        />
                    </div>

                </div>
            </div>
          );
        })}
    </section>
  );
}