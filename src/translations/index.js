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
        skills: 'Habilidades',
        proyects: {
            title: 'Proyectos',
            list: [
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack:'bg-blue-300/10', colorBorder :'border-blue-300'},
                        { name: 'TS', icon: TsIcon, colorBack:'bg-blue-400/10', colorBorder :'border-blue-400'},
                        { name: 'Tailwind', icon: TailwindIcon, colorBack:'bg-blue-300/10', colorBorder :'border-blue-300'},
                        { name: 'Next.js', icon: NextIcon, colorBack:'bg-gray-300/10', colorBorder :'border-gray-300'},
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack:'bg-white/10', colorBorder :'border-blue-300'},
                    ],
                    title: 'Cveria',
                    image: 'proyects/cveria.webp',
                    description: 'Generador de curriculums con inteligencia artificial.',
                    codeLink: 'https://github.com/Eduard0PC/Cveria',
                    previewLink: 'https://cveria.vercel.app/'
                },
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack:'bg-orange-400/10', colorBorder :'border-orange-400'},
                        { name: 'CSS', icon: CssIcon, colorBack:'bg-blue-500/10', colorBorder :'border-blue-500'},
                        { name: 'JS', icon: JsIcon, colorBack:'bg-yellow-300/10', colorBorder :'border-yellow-300'},
                        { name: 'Node.js', icon: NodeIcon, colorBack:'bg-green-300/10', colorBorder :'border-green-300'},
                        { name: 'MySQL', icon: MySQLIcon, colorBack:'bg-blue-200/10', colorBorder :'border-blue-200'},
                    ],
                    title: 'Punto de venta',
                    image: 'proyects/hanburguesa.webp',
                    description: 'Plataforma web para la gestión de ventas y productos de un restaurante.',
                    codeLink: 'https://github.com/Eduard0PC/HanburguesaPlatform',
                },
            ]
        }
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
        skills: 'Skills',
        proyects: {
            title: 'Projects',
            list: [
                {
                    technologies: [
                        { name: 'React', icon: ReactIcon, colorBack:'bg-blue-300/10', colorBorder :'border-blue-300'},
                        { name: 'TS', icon: TsIcon, colorBack:'bg-blue-400/10', colorBorder :'border-blue-400'},
                        { name: 'Tailwind', icon: TailwindIcon, colorBack:'bg-blue-300/10', colorBorder :'border-blue-300'},
                        { name: 'Next.js', icon: NextIcon, colorBack:'bg-gray-300/10', colorBorder :'border-gray-300'},
                        { name: 'PostgreSQL', icon: PostgreIcon, colorBack:'bg-white/10', colorBorder :'border-blue-300'},
                    ],
                    title: 'Cveria',
                    image: 'proyects/cveria.webp',
                    description: 'AI-powered resume generator.',
                    codeLink: 'https://github.com/Eduard0PC/Cveria',
                    previewLink: 'https://cveria.vercel.app/'
                },
                {
                    technologies: [
                        { name: 'HTML', icon: HtmlIcon, colorBack:'bg-orange-400/10', colorBorder :'border-orange-400'},
                        { name: 'CSS', icon: CssIcon, colorBack:'bg-blue-500/10', colorBorder :'border-blue-500'},
                        { name: 'JS', icon: JsIcon, colorBack:'bg-yellow-300/10', colorBorder :'border-yellow-300'},
                        { name: 'Node.js', icon: NodeIcon, colorBack:'bg-green-300/10', colorBorder :'border-green-300'},
                        { name: 'MySQL', icon: MySQLIcon, colorBack:'bg-blue-500/10', colorBorder :'border-blue-500'},
                    ],
                    title: 'Punto de venta',
                    image: 'proyects/hanburguesa.webp',
                    description: "Web platform for managing a restaurant's sales and products.",
                    codeLink: 'https://github.com/Eduard0PC/HanburguesaPlatform',
                },
            ]
        }
    }
}
