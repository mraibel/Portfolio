export default function Projects() {
    const projects = [
        {
            title: "Del Carmen Odontología",
            description: "Sitio web para clínica dental",
            image: "DelCarmenOdontología.png",
            link: "https://del-carmen-web-site.vercel.app/",
            technologies: ["NextJS", "TailwindCSS"],
            private: true
        },
        {
            title: "Proyecto 2",
            description: "Descripción breve del Proyecto 2. Este proyecto se enfoca en...",
            image: "/project2.jpg",
            link: "https://enlace-a-proyecto2.com",
            repo: "https://github.com/tu-usuario/proyecto2",
            technologies: ["Next.js", "Tailwind CSS", "API REST"],
            private: false
        },
        {
            title: "Proyecto 3",
            description: "Descripción breve del Proyecto 3. Es una solución para...",
            image: "/project3.jpg",
            link: "https://enlace-a-proyecto3.com",
            repo: "https://github.com/tu-usuario/proyecto3",
            technologies: ["Angular", "TypeScript", "Bootstrap"],
            private: false
        },
    ];

    return (
        <section className="min-h-screen px-8 py-12 text-white">
            {/* Encabezado */}
            <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                Aquí están algunos de los proyectos en los que he trabajado. Cada uno refleja mi pasión por el desarrollo y mi dedicación a resolver problemas a través del código.
            </p>

            {/* Contenedor de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Imagen del proyecto */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-50 object-cover"
                        />

                        {/* Contenido del proyecto */}
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            {/* Tecnologías */}
                            <div className="mb-4">
                                <h4 className="text-teal-400 font-semibold mb-2">Tecnologías:</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <li
                                            key={i}
                                            className="bg-gray-700 px-3 py-1 text-sm rounded-md text-white"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Enlaces */}
                            <div className="flex justify-between items-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline"
                                >
                                    Ver Proyecto
                                </a>
                                {
                                    project.private ? '' : <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400"
                                >
                                    Código
                                </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
