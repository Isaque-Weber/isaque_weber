import { PersonalInfo, ContactInfo, Skill, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Isaque Weber',
  title: 'Desenvolvedor de Sistemas',
  description: 'Desenvolvo soluções aplicadas à IA, para a democratização do uso de IA',
  avatar: 'https://via.placeholder.com/400x400/0ea5e9/ffffff?text=IW',
  resumeUrl: '#'
};

export const contactInfo: ContactInfo = {
  email: 'isaque.weber5@gmail.com',
  phone: '21967398707',
  linkedin: 'linkedin.com/in/isaque-weber',
  github: 'github.com/isaque-weber'
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
    id: '1',
    title: 'Sistema de IA para Análise de Dados',
    description: 'Plataforma web desenvolvida com React e FastAPI para análise automatizada de grandes volumes de dados usando algoritmos de machine learning.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Docker'],
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=AI+Analytics',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Dashboard de Monitoramento',
    description: 'Interface administrativa desenvolvida com NextJS e NestJS para monitoramento em tempo real de sistemas e métricas de performance.',
    technologies: ['NextJS', 'NestJS', 'TypeORM', 'PostgreSQL'],
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Dashboard',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'API de Processamento de Linguagem Natural',
    description: 'API REST desenvolvida com Fastify e Python para processamento e análise de texto usando técnicas de NLP e IA.',
    technologies: ['Fastify', 'Python', 'NLP', 'Docker'],
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=NLP+API',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '4',
    title: 'Plataforma de E-learning',
    description: 'Sistema completo de ensino online com React, TypeScript e banco de dados relacional para gestão de cursos e estudantes.',
    technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'TypeORM'],
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=E-Learning',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];