export default function Contact() {
    return (
        <section className="min-h-screen px-8 py-12 text-white">
            {/* Encabezado */}
            <h2 className="text-4xl font-bold text-center mb-8">¡Trabajemos juntos!</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente o simplemente quieres saludar? Llena el formulario o contáctame a través de mis redes sociales.
            </p>

            {/* Contenedor principal */}
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Formulario */}
                <form
                    action="https://formsubmit.co/mraibel12@gmail.com"
                    method="POST"
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Tu nombre"
                            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Tu correo electrónico"
                            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            placeholder="Tu mensaje..."
                            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 rounded-lg transition duration-300"
                    >
                        Enviar mensaje
                    </button>
                </form>

                {/* Redes sociales */}
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Sígueme en mis redes sociales</h3>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://linkedin.com/in/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 text-xl transition duration-300"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 text-xl transition duration-300"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 text-xl transition duration-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
