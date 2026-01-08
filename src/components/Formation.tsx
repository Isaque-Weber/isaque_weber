'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { formation } from '@/data/portfolio';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';

interface FormationProps {
  className?: string;
}

const Formation: React.FC<FormationProps> = ({ className = '' }) => {
  return (
    <section id="formation" className={`section-padding bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Minha <span className="gradient-text">Formação</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Minha trajetória acadêmica e qualificações
          </p>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {formation.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start group relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary-500/10"></div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300 shadow-inner">
                  <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.course}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium md:ml-4 mt-2 md:mt-0 w-fit mx-auto md:mx-0 ${
                    item.status === 'Concluído' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : item.status === 'Em andamento'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {item.status}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 text-gray-600 dark:text-gray-300 mb-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Award className="w-4 h-4 text-primary-500" />
                    <span className="font-medium">{item.level}</span>
                  </div>
                  {item.institution && (
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <School className="w-4 h-4 text-primary-500" />
                      <span>{item.institution}</span>
                    </div>
                  )}
                  {item.year && (
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      <span>{item.year}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;
