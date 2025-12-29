import ReactIcon from "@/components/icons/tech/ReactIcon.astro";
import TsIcon from "@/components/icons/tech/TsIcon.astro";
import TailwindIcon from "@/components/icons/tech/TailwindIcon.astro";
import NextIcon from "@/components/icons/tech/NextIcon.astro";
import JsIcon from "@/components/icons/tech/JsIcon.astro";
import NodeIcon from "@/components/icons/tech/NodeIcon.astro";
import HtmlIcon from "@/components/icons/tech/HtmlIcon.astro";
import CssIcon from "@/components/icons/tech/CssIcon.astro";
import MySQLIcon from "@/components/icons/tech/MySQLIcon.astro";
import PostgreIcon from "@/components/icons/tech/PostgreIcon.astro";
import AstroIcon from "@/components/icons/tech/AstroIcon.astro";
import PhpIcon from "@/components/icons/tech/PhpIcon.astro";

export const indexTranslations = {
    es: {
        description: 'Desarrollador Web',
        cvButton: 'Descargar CV',
        about: {
            title: 'Sobre mí',
            intro: 'Hola soy',
            description: ', desarrollador web enfocado en construir experiencias digitales modernas, rápidas y accesibles. Tengo experiencia con tecnologías',
            closing: ', por lo que siempre estoy en constante aprendizaje.'
        },
        exp: {
            title: 'Experiencia',
            list: [
                {
                    title: 'Hackathon 2024',
                    institution: 'EJAD / Instituto Tecnológico de Mérida',
                    date: 'Marzo 2024',
                    description: 'Participación en un hackathon de 36 horas, donde mi equipo y yo desarrollamos una aplicación web para tomar fotografías mediante comandos de voz.'
                },
                {
                    title: 'Hackathon 2025',
                    institution: 'RODAI / Instituto Tecnológico de Mérida',
                    date: 'Abril 2025',
                    description: 'Participación en un hackathon de 36 horas, donde mi equipo y yo desarrollamos una aplicación web para generar CV con inteligencia artificial.'
                }
            ]
        },
        skills: 'Habilidades',
        certifications: {
            title: 'Certificaciones',
            list: [
                {
                    title: 'Python Essentials 1',
                    image: 'certifications/Python_Cisco.webp',
                    description: 'Certificación de Python Essentials 1 de Cisco Networking Academy.',
                },
            ]
        },
        proyects: {
            title: 'Proyectos',
            list: [
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'TS', icon: TsIcon, colorBack: 'bg-blue-400/10', colorBorder: 'border-blue-400' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'Next.js', icon: NextIcon, colorBack: 'bg-gray-300/10', colorBorder: 'border-gray-300' },
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack: 'bg-white/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Cveria',
                    image: 'proyects/cveria.webp',
                    description: 'Generador de curriculums con inteligencia artificial.',
                    codeLink: 'https://github.com/Eduard0PC/Cveria',
                    previewLink: 'https://cveria.vercel.app/'
                },
                /*
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-400' },
                        { name: 'CSS', icon: CssIcon, colorBack: 'bg-blue-500/10', colorBorder: 'border-blue-500' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Node.js', icon: NodeIcon, colorBack: 'bg-green-300/10', colorBorder: 'border-green-300' },
                        { name: 'MySQL', icon: MySQLIcon, colorBack: 'bg-blue-200/10', colorBorder: 'border-blue-200' },
                    ],
                    title: 'Punto de venta',
                    image: 'proyects/hanburguesa.webp',
                    description: 'Plataforma web para la gestión de ventas y productos de un restaurante.',
                    codeLink: 'https://github.com/Eduard0PC/HanburguesaPlatform',
                },
                */
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-400' },
                        { name: 'CSS', icon: CssIcon, colorBack: 'bg-blue-500/10', colorBorder: 'border-blue-500' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'PHP', icon: PhpIcon, colorBack: 'bg-purple-300/10', colorBorder: 'border-purple-300' },
                        { name: 'MySQL', icon: MySQLIcon, colorBack: 'bg-blue-200/10', colorBorder: 'border-blue-200' },
                    ],
                    title: 'Enloyados',
                    image: 'proyects/enloyados.webp',
                    description: 'Página web diseñada para un restaurante de sushi, donde se presentan sus platillos, información del negocio y opciones de contacto para los clientes.',
                    codeLink: 'https://github.com/Eduard0PC/Enloyados-Sushi',
                    previewLink: 'https://enloyados.wuaze.com/'
                },
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'Next.js', icon: NextIcon, colorBack: 'bg-gray-300/10', colorBorder: 'border-gray-300' },
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack: 'bg-white/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Aiplify',
                    image: 'proyects/aiplify.webp',
                    description: 'Plataforma web para revisar estadisticas de Spotify y obtener recomendaciones de canciones usando inteligencia artificial.',
                    codeLink: 'https://github.com/Eduard0PC/Aiplify/',
                    previewLink: 'https://aiplify.vercel.app/'
                },
                {
                    technologies: [
                        { name: 'Astro', icon: AstroIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-300' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Portafolio',
                    image: 'proyects/portafolio.webp',
                    description: 'Portafolio personal en donde muestro mis proyectos y habilidades.',
                    codeLink: 'https://github.com/Eduard0PC/Portafolio',
                    previewLink: 'https://eduardopoot.vercel.app/'
                },
            ]
        },
        more: 'Ver más en mi GitHub',
    },
    en: {
        description: 'Web Developer',
        cvButton: 'Download CV',
        about: {
            title: 'About Me',
            intro: "Hi i'm",
            description: ', a web developer focused on building modern, fast, and accessible digital experiences. I have experience with',
            closing: ", so i'm always learning and improving."
        },
        exp: {
            title: 'Experience',
            list: [
                {
                    title: 'Hackathon 2024',
                    institution: 'EJAD / Instituto Tecnológico de Mérida',
                    date: 'March 2024',
                    description: 'Participated in a 36-hour hackathon, where my team and I developed a web application that takes photos using voice commands.'
                },
                {
                    title: 'Hackathon 2025',
                    institution: 'RODAI / Instituto Tecnológico de Mérida',
                    date: 'April 2025',
                    description: 'Participated in a 36-hour hackathon, where my team and I developed a web application for generating resumes using artificial intelligence.'
                }
            ]
        },
        skills: 'Skills',
        certifications: {
            title: 'Certifications',
            list: [
                {
                    title: 'Python Essentials 1',
                    image: 'certifications/Python_Cisco.webp',
                    description: 'Python Essentials 1 certification from Cisco Networking Academy.',
                },
            ]
        },
        proyects: {
            title: 'Projects',
            list: [
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'TS', icon: TsIcon, colorBack: 'bg-blue-400/10', colorBorder: 'border-blue-400' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'Next.js', icon: NextIcon, colorBack: 'bg-gray-300/10', colorBorder: 'border-gray-300' },
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack: 'bg-white/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Cveria',
                    image: 'proyects/cveria.webp',
                    description: 'AI-powered resume generator.',
                    codeLink: 'https://github.com/Eduard0PC/Cveria',
                    previewLink: 'https://cveria.vercel.app/'
                },
                /*
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-400' },
                        { name: 'CSS', icon: CssIcon, colorBack: 'bg-blue-500/10', colorBorder: 'border-blue-500' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Node.js', icon: NodeIcon, colorBack: 'bg-green-300/10', colorBorder: 'border-green-300' },
                        { name: 'MySQL', icon: MySQLIcon, colorBack: 'bg-blue-500/10', colorBorder: 'border-blue-500' },
                    ],
                    title: 'Punto de venta',
                    image: 'proyects/hanburguesa.webp',
                    description: "Web platform for managing a restaurant's sales and products.",
                    codeLink: 'https://github.com/Eduard0PC/HanburguesaPlatform',
                },
                */
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-400' },
                        { name: 'CSS', icon: CssIcon, colorBack: 'bg-blue-500/10', colorBorder: 'border-blue-500' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'PHP', icon: PhpIcon, colorBack: 'bg-purple-300/10', colorBorder: 'border-purple-300' },
                        { name: 'MySQL', icon: MySQLIcon, colorBack: 'bg-blue-200/10', colorBorder: 'border-blue-200' },
                    ],
                    title: 'Enloyados',
                    image: 'proyects/enloyados.webp',
                    description: 'Website designed for a sushi restaurant, showcasing their dishes, business information, and contact options for customers.',
                    codeLink: 'https://github.com/Eduard0PC/Enloyados-Sushi',
                    previewLink: 'https://enloyados.wuaze.com/'
                },
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                        { name: 'Next.js', icon: NextIcon, colorBack: 'bg-gray-300/10', colorBorder: 'border-gray-300' },
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack: 'bg-white/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Aiplify',
                    image: 'proyects/aiplify.webp',
                    description: 'Web platform to review Spotify statistics and get song recommendations using artificial intelligence.',
                    codeLink: 'https://github.com/Eduard0PC/Aiplify/',
                    previewLink: 'https://aiplify.vercel.app/'
                },
                {
                    technologies: [
                        { name: 'Astro', icon: AstroIcon, colorBack: 'bg-orange-400/10', colorBorder: 'border-orange-300' },
                        { name: 'JS', icon: JsIcon, colorBack: 'bg-yellow-300/10', colorBorder: 'border-yellow-300' },
                        { name: 'Tailwind', icon: TailwindIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                    ],
                    title: 'Portfolio',
                    image: 'proyects/portafolio.webp',
                    description: 'Personal portfolio showcasing my projects and skills.',
                    codeLink: 'https://github.com/Eduard0PC/Portafolio',
                    previewLink: 'https://eduardopoot.vercel.app/'
                },
            ]
        },
        more: 'See more on my GitHub',
    }
}
