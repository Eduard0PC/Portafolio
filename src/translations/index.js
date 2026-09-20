import { aboutTranslations } from "./about.js";
import { experienceTranslations } from "./experience.js";
import { certificationsTranslations } from "./certifications.js";
import { projectsTranslations } from "./projects.js";

export const indexTranslations = {
    es: {
        description: 'Desarrollador Fullstack',
        cvButton: 'Descargar CV',
        about: aboutTranslations.es,
        exp: experienceTranslations.es,
        skills: 'Habilidades',
        certifications: certificationsTranslations.es,
        proyects: projectsTranslations.es,
        more: 'Ver más en mi GitHub',
    },
    en: {
        description: 'Fullstack Developer',
        cvButton: 'Download CV',
        about: aboutTranslations.en,
        exp: experienceTranslations.en,
        skills: 'Skills',
        certifications: certificationsTranslations.en,
        proyects: projectsTranslations.en,
        more: 'See more on my GitHub',
    }
};
