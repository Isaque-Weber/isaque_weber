'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Skill } from '@/types';

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Todas' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Ferramentas' },
    { key: 'data', label: 'Data Science' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card p-6 group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {skill.name}
        </h3>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
            className={`h-full rounded-full relative bg-gradient-to-r ${
              skill.category === 'frontend' ? 'from-blue-600 to-blue-400' :
              skill.category === 'backend' ? 'from-green-600 to-green-400' :
              skill.category === 'database' ? 'from-purple-600 to-purple-400' :
              skill.category === 'data' ? 'from-indigo-600 to-indigo-400' :
              'from-orange-600 to-orange-400'
            }`}
          >
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-6 h-full bg-white/30 rounded-full blur-sm"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="mt-3">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
          skill.category === 'frontend' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
          skill.category === 'backend' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
          skill.category === 'database' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
          skill.category === 'data' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300' :
          'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
        }`}>
          {categories.find(cat => cat.key === skill.category)?.label}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className={`section-padding bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Tecnologias e ferramentas que utilizo para criar soluções inovadoras e eficientes
          </p>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {[
            { label: 'Frontend', count: skills.filter(s => s.category === 'frontend').length, color: 'blue' },
            { label: 'Backend', count: skills.filter(s => s.category === 'backend').length, color: 'green' },
            { label: 'Database', count: skills.filter(s => s.category === 'database').length, color: 'purple' },
            { label: 'Ferramentas', count: skills.filter(s => s.category === 'tools').length, color: 'orange' },
            { label: 'Data Science', count: skills.filter(s => s.category === 'data').length, color: 'indigo' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`text-3xl font-bold mb-2 ${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'purple' ? 'text-purple-600' :
                  item.color === 'indigo' ? 'text-indigo-700' :
                  'text-orange-600'
                }`}
              >
                {item.count}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Estou sempre em busca de novos desafios e oportunidades para aplicar 
              minhas habilidades em projetos inovadores.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Entre em Contato
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;