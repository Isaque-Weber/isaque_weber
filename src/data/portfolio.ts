import { PersonalInfo, FormationInfo, ContactInfo, Skill, Project } from '@/types';
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
    { name: 'Scikit-learn', level: 90, category: 'data' },
    { name: 'Pandas', level: 90, category: 'data' },
    { name: 'NumPy', level: 85, category: 'data' },
    { name: 'Machine Learning', level: 85, category: 'data' },
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
        id: "inboxai",
        title: "InboxAI",
        description: "Sistema inteligente para triagem automática de emails e geração de respostas com IA. Utiliza Machine Learning (NLP) para classificar mensagens e Google Gemini para sugerir respostas contextuais. Interface moderna e responsiva.",
        technologies: ["Python", "FastAPI", "Scikit-learn", "JavaScript", "HTML5", "CSS3", "Google Gemini", "Docker"],
        image: "/inboxai/cover.png",
        gallery: ["/inboxai/cover.png"],
        liveUrl: "https://desafio.isaqueweber.com.br",
        githubUrl: "https://github.com/Isaque-Weber/email-ai-triage",
        featured: true
    },
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
        technologies: ["SDKOpenai", "Vite.js", "TailwindCSS", "React", "TypeScript", "Fastify","TypeORM", "PostgreSQL", "IA" ],
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
    { name: 'Currículo Desenvolvedor Data Science', path: '/documents/Isaque_Weber_DataScience.pdf' },
    { name: 'Currículo Desenvolvedor Fullstack', path: '/documents/Isaque_Weber_Dev_Fullstack.pdf' },
    { name: 'Currículo Foco em Backend', path: '/documents/Isaque_Weber_Backend.pdf' },
    { name: 'Currículo Foco em Frontend', path: '/documents/Isaque_Weber_Frontend.pdf' },
];

export const formation: FormationInfo[] = [
    {
        id: "1",
        course: "Data Science",
        level: "Pós-graduação",
        institution: "UniAmérica",
        status: "Em andamento"
    },
    {
        id: "2",
        course: "Análise e Desenvolvimento de Sistemas",
        level: "Graduação",
        institution: "UniAmérica",
        status: "Concluído"
    },
    {
        id: "3",
        course: "Administração",
        level: "Ensino Médio Técnico",
        institution: "C.E. Erich Walter Heine",
        status: "Concluído"
    }
];

