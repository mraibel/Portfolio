import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const logos = [
    "angular.png",
    "expo.png",
    "express.png",
    "java.png",
    "javascript.png",
    "mysql.png",
    "nextjs.webp",
    "react.png",
    "springboot.webp"
]

export default function Profile() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-black px-8">
            {/* Encabezado */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                ¡Hola! Soy <span className="text-teal-400">Miguel Raibel</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-2xl max-w-3xl text-center leading-relaxed mb-8">
                Desarrollador apasionado por crear soluciones digitales
                innovadoras. Mi objetivo es posicionarme dentro del mundo TI.
            </p>

            {/* Imagen de perfil */}
            <div className="rounded-full overflow-hidden mb-8 shadow-lg">
                <img
                    src="/profile.jpeg"
                    alt="Imagen de perfil"
                    className="w-40 h-40 md:w-64 md:h-64 object-cover"
                />
            </div>

            {/* Carrusel tecnologías */}
            <div className="w-full max-w-[700px] max-h-[200px] overflow-hidden rounded-full shadow-lg bg-slate-200">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        logos.map((e, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={e}
                                    alt="React"
                                    className="w-28 h-28 object-contain mx-auto"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}
