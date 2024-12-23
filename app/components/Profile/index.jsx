export default function Profile() {
    return (
        <section className="min-h-screen ml-[300px] flex flex-col justify-center items-center text-white px-8">
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
                    src="/perfil.jpg" 
                    alt="Imagen de perfil" 
                    className="w-40 h-40 md:w-64 md:h-64 object-cover"
                />
            </div>
            
            {/* Carrusel tecnologías */}
            <div className="flex gap-4">

            </div>
        </section>
    );
}
