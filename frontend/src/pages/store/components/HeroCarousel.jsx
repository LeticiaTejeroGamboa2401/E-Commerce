import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Estilo y tecnología para tu día a día",
    subtitle: "Nueva temporada",
    description: "Explora nuestra nueva colección de productos seleccionados cuidadosamente para brindarte la mejor calidad y diseño al mejor precio.",
    image: "/imagenes/tecnologias.jpg",
    buttonText: "Ver Colección",
    buttonLink: "#"
  },
  {
    title: "Ofertas exclusivas de primavera",
    subtitle: "Temporada especial",
    description: "Aprovecha descuentos especiales en productos seleccionados solo por tiempo limitado.",
    image: "/imagenes/primavera.jpg",
    buttonText: "Ver Ofertas",
    buttonLink: "#"
  },
  {
    title: "Novedades en tecnología",
    subtitle: "Últimas tendencias",
    description: "Descubre los gadgets más innovadores que harán tu día a día más fácil y divertido.",
    image: "/imagenes/tecno.jpg",
    buttonText: "Ver Novedades",
    buttonLink: "#"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Cambia slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex justify-center pt-16">
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`absolute top-0 left-0 w-full flex justify-center transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            >
                {/* Contenedor exacto: texto + imagen */}
                <div className="flex h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    
                    <div className="max-w-xl bg-[#f2f4f6] h-full p-6 flex flex-col justify-center items-start">
                        <p className="text-sm text-gray-500 uppercase">{slide.subtitle}</p>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">{slide.title}</h2>
                        <p className="mt-4 text-gray-700">{slide.description}</p>
                        <a
                            href={slide.buttonLink}
                            className="mt-6 inline-block bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
                        >
                            {slide.buttonText}
                        </a>
                    </div>

                    {/* Imagen */}
                    <div className="hidden md:block h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-[500px] object-cover"
                        />
                    </div>

                </div>
            </div>
        ))}
    </section>
  );
}