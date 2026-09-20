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
import AngularIcon from "@/components/icons/tech/AngularIcon.astro";
import BootstrapIcon from "@/components/icons/tech/BootstrapIcon.astro";
import FlutterIcon from "@/components/icons/tech/FlutterIcon.astro";
import CSharpIcon from "@/components/icons/tech/CSharpIcon.astro";
import JavaIcon from "@/components/icons/tech/JavaIcon.astro";

export const projectsTranslations = {
    es: {
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
            {
                technologies: [
                    { name: 'Flutter', icon: FlutterIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                    { name: 'C#', icon: CSharpIcon, colorBack: 'bg-purple-500/10', colorBorder: 'border-purple-500' },
                ],
                title: 'MediApp',
                image: 'proyects/mediapp.webp',
                description: 'Aplicación móvil para la gestión de citas médicas del paciente y la administración de citas médicas del doctor.',
                codeLink: 'https://github.com/Eduard0PC/App-PortalMedico',

            },
            {
                technologies: [
                    { name: 'Java', icon: JavaIcon, colorBack: 'bg-red-500/10', colorBorder: 'border-red-500' },
                ],
                title: 'SPACLES',
                image: 'proyects/spacles.webp',
                description: 'Videojuego de naves espaciales desarrollado en Java, donde el jugador deberá esquivar ataques y disparar a Cthulhu para derrotarlo.',
                codeLink: 'https://github.com/Eduard0PC/SPACLES',
            },
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
                    { name: 'Angular', icon: AngularIcon, colorBack: 'bg-red-300/10', colorBorder: 'border-red-300' },
                    { name: 'TS', icon: TsIcon, colorBack: 'bg-blue-400/10', colorBorder: 'border-blue-400' },
                    { name: 'Bootstrap', icon: BootstrapIcon, colorBack: 'bg-purple-300/10', colorBorder: 'border-purple-300' },
                ],
                title: 'MusicSearch',
                image: 'proyects/musicsearch.webp',
                description: 'Aplicación web para buscar canciones y artistas usando la API de Deezer.',
                codeLink: 'https://github.com/Eduard0PC/MusicSearch',
                previewLink: 'https://music-search-lab.vercel.app/'
            },
            {
                technologies: [
                    { name: 'Flutter', icon: FlutterIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                ],
                title: 'Music Test App',
                image: 'proyects/musictestapp.webp',
                description: 'Aplicación móvil para busqueda de canciones y realizar pruebas unitarias en Flutter.',
                codeLink: 'https://github.com/Eduard0PC/Music-TestApp',
            }
            /*
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
            },*/
        ]
    },
    en: {
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
            {
                technologies: [
                    { name: 'Flutter', icon: FlutterIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' },
                    { name: 'C#', icon: CSharpIcon, colorBack: 'bg-purple-500/10', colorBorder: 'border-purple-500' },
                ],
                title: 'MediApp',
                image: 'proyects/mediapp.webp',
                description: "Mobile application for managing patient's medical appointments and doctor's medical appointments.",
                codeLink: 'https://github.com/Eduard0PC/MediApp',
            },
            {
                technologies: [
                    { name: 'Java', icon: JavaIcon, colorBack: 'bg-red-500/10', colorBorder: 'border-red-500' }
                ],
                title: 'SPACLES',
                image: 'proyects/spacles.webp',
                description: 'Java-developed spaceship game where the player must dodge attacks and shoot Cthulhu to defeat him.',
                codeLink: 'https://github.com/Eduard0PC/SPACLES',
            },
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
                    { name: 'Angular', icon: AngularIcon, colorBack: 'bg-red-300/10', colorBorder: 'border-red-300' },
                    { name: 'TS', icon: TsIcon, colorBack: 'bg-blue-400/10', colorBorder: 'border-blue-400' },
                    { name: 'Bootstrap', icon: BootstrapIcon, colorBack: 'bg-purple-300/10', colorBorder: 'border-purple-300' },
                ],
                title: 'MusicSearch',
                image: 'proyects/musicsearch.webp',
                description: 'Web application to search for songs and artists using the Deezer API.',
                codeLink: 'https://github.com/Eduard0PC/MusicSearch',
                previewLink: 'https://musicsearch.vercel.app/'  
            },
            {
                technologies: [
                    { name: 'Flutter', icon: FlutterIcon, colorBack: 'bg-blue-300/10', colorBorder: 'border-blue-300' }
                ],
                title: 'Music Test App',
                image: 'proyects/musictestapp.webp',
                description: 'Mobile application for searching songs and performing unit tests in Flutter.',
                codeLink: 'https://github.com/Eduard0PC/Music-TestApp',

            }
            /*
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
            },*/
            
        ]
    }
};
