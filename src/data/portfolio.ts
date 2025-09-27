import { PersonalInfo, ContactInfo, Skill, Project } from '@/types';
import profileImage from '../../public/images/Perfil2.jpg';

export const personalInfo: PersonalInfo = {
    name: 'Isaque Weber',
    title: 'Desenvolvedor de Sistemas',
    description: 'Desenvolvo soluções aplicadas à IA, para a democratização do uso de IA',
    avatar: profileImage.src,
    resumeUrl: '/documents/Currículo_Isaque_Weber.pdf'
};

export const contactInfo: ContactInfo = {
    email: 'isaque.weber5@gmail.com',
    phone: '21967398707',
    linkedin: 'linkedin.com/in/isaque-weber',
    github: 'github.com/isaque-weber',
    facebook: 'facebook.com/isaque.weber.9',
};

export const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'NextJS', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 88, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 90, category: 'frontend' },
    { name: 'NestJS', level: 85, category: 'backend' },
    { name: 'FastAPI', level: 80, category: 'backend' },
    { name: 'Fastify', level: 75, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'TypeORM', level: 80, category: 'database' },
    { name: 'BD Relacional', level: 85, category: 'database' },
    { name: 'Docker', level: 75, category: 'tools' }
];

export const projects: Project[] = [
    {
        id: "cadpog",
        title: "Site CADPOG",
        description: "Plataforma web institucional para a Catedral das Assembleias de Deus, Deus de Poder e Glória. Inclui páginas de congregações, pedidos de oração, informações sobre a igreja, ministérios e área de doações.",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js"],
        image: "/cadpog/cover.png",
        gallery: [
            "/cadpog/congregacoes.png",
            "/cadpog/pedido.png",
            "/cadpog/sobre.png",
            "/cadpog/pilares.png",
            "/cadpog/ministerios.png",
            "/cadpog/faleconosco.png",
            "/cadpog/ofertar.png",
            "/cadpog/footer.png"
        ],
        liveUrl: "https://cadpog.vercel.app",
        githubUrl: "https://github.com/Isaque-Weber/cadpog_v2",
        featured: true
    },
    {
        id: "itaagroia",
        title: "ItaAgroIA",
        description: "Plataforma de Inteligência Artificial aplicada ao agronegócio, oferecendo análise de solo, consulta de bulas e suporte a decisões agrícolas por meio de chat interativo com IA.",
        technologies: ["Vite.js", "TailwindCSS", "React", "TypeScript", "Fastify","TypeORM", "PostgreSQL", "IA", "SDKOpenai"],
        image: "/itaagroia/loginescuro.png",
        gallery: [
            "/itaagroia/loginclaro.png",
            "/itaagroia/loginescuro.png",
            "/itaagroia/homeclaro.png",
            "/itaagroia/homeescuro.png",
            "/itaagroia/threadclaro.png",
            "/itaagroia/threadescuro.png"
        ],
        liveUrl: "https://itaagroia.com.br",
        githubUrl: "https://github.com/Isaque-Weber/itaagro",
        featured: true
    },
    {
        id: "loquebrinque",
        title: "Site Loque Brinque",
        description: "Plataforma web para aluguel de brinquedos para festas infantis, com catálogo de produtos, sistema de reservas, depoimentos de clientes e informações sobre a empresa.",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js"],
        image: "/loquebrinque/hero.png",
        gallery: [
            "/loquebrinque/about.png",
            "/loquebrinque/brinquedos.png",
            "/loquebrinque/como-funciona.png",
            "/loquebrinque/contato.png",
            "/loquebrinque/depoimentos.png",
            "/loquebrinque/hero.png"
        ],
        liveUrl: "https://loquebrinque.vercel.app",
        githubUrl: "https://github.com/Isaque-Weber/loque-brinque",
        featured: false
    },
];

export const resumes = [
    { name: 'Currículo Desenvolvedor Fullstack', path: '/documents/Isaque_Weber_Dev_Fullstack.pdf' },
    { name: 'Currículo Foco em Backend', path: '/documents/Isaque_Weber_Backend.pdf' },
    { name: 'Currículo Foco em Frontend', path: '/documents/Isaque_Weber_Frontend.pdf' },
];

