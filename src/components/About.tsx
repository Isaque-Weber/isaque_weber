'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  const highlights = [
    {
      icon: Code,
      title: 'Desenvolvimento Full-Stack',
      description: 'Experiência sólida em tecnologias frontend e backend, criando soluções completas e escaláveis.'
    },
    {
      icon: Lightbulb,
      title: 'Soluções em IA',
      description: 'Especializado em implementar inteligência artificial para democratizar o acesso à tecnologia.'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva em projetos multidisciplinares com foco em resultados de qualidade.'
    },
    {
      icon: Award,
      title: 'Qualidade de Código',
      description: 'Comprometimento com boas práticas, código limpo e arquiteturas bem estruturadas.'
    }
  ];

  return (
    <section id="about" className={`section-padding bg-white dark:bg-gray-800 ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Sobre <span className="gradient-text">Mim</span>
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                Sou um <strong className="text-gray-900 dark:text-white">Desenvolvedor de Sistemas</strong> apaixonado 
                por criar soluções inovadoras que tornam a tecnologia mais acessível e útil para todos. 
                Meu foco principal está no desenvolvimento de aplicações que integram 
                <strong className="gradient-text"> Inteligência Artificial</strong> de forma prática e eficiente.
              </p>
              
              <p>
                Com experiência em tecnologias modernas como <strong>React, NextJS, NestJS, Python e FastAPI</strong>, 
                busco sempre entregar soluções robustas que não apenas atendem aos requisitos técnicos, 
                mas também proporcionam uma excelente experiência do usuário.
              </p>
              
              <p>
                Acredito que a tecnologia deve ser uma ferramenta de democratização do conhecimento, 
                e é com essa visão que trabalho em cada projeto, sempre buscando a excelência 
                e a inovação em cada linha de código.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold gradient-text"
                >
                  50+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projetos Concluídos</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold gradient-text"
                >
                  3+
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold gradient-text"
                >
                  100%
                </motion.div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfação do Cliente</p>
              </div>
            </motion.div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card p-6 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Minha <span className="gradient-text">Jornada</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Uma visão geral da minha trajetória profissional e principais conquistas
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-600 to-primary-400"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: 'Desenvolvedor Full-Stack Sênior',
                  description: 'Liderança em projetos de IA e desenvolvimento de soluções complexas com React, Python e FastAPI.',
                  side: 'left'
                },
                {
                  year: '2023',
                  title: 'Especialização em IA',
                  description: 'Foco no desenvolvimento de aplicações com inteligência artificial para democratização de tecnologia.',
                  side: 'right'
                },
                {
                  year: '2022',
                  title: 'Desenvolvedor Full-Stack',
                  description: 'Desenvolvimento de aplicações web modernas com TypeScript, React, NestJS e bancos de dados relacionais.',
                  side: 'left'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${item.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card p-6">
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                    ></motion.div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;