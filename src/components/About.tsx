'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

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
                  1+
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


      </div>
    </section>
  );
};

export default About;