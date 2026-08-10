'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2, Monitor } from 'lucide-react';

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className = '' }) => {
  return (
    <section id="experience" className={`section-padding bg-white dark:bg-gray-800 ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Minha atuação no mercado, treinamentos corporativos e liderança técnica
          </p>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="card p-6 md:p-8 relative overflow-hidden group border border-gray-100 dark:border-gray-700/60"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary-500/20 transition-all duration-500" />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/80 rounded-2xl flex items-center justify-center p-2 group-hover:border-primary-500/40 transition-all duration-300 shadow-sm overflow-hidden">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                </div>

                <div className="flex-grow space-y-4 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700/60 px-3 py-1 rounded-full font-medium text-gray-700 dark:text-gray-300">
                        <Calendar size={14} className="text-primary-500" />
                        {item.period}
                      </span>
                      {item.type && (
                        <span className="inline-flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950/40 px-3 py-1 rounded-full font-medium text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50">
                          <Monitor size={14} className="text-primary-500" />
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={16} className="text-primary-500" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        Principais Atividades & Impacto
                      </h4>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills tags */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Experience;
