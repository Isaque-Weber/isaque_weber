'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: `https://${contactInfo.github}`,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: `https://${contactInfo.linkedin}`,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      href: `tel:+55${contactInfo.phone}`,
      icon: Phone,
      color: 'hover:text-green-500'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold gradient-text"
            >
              Isaque Weber
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 max-w-sm"
            >
              Desenvolvedor especializado em soluções aplicadas à IA para democratização de tecnologia.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Links Rápidos
            </motion.h4>
            <nav className="space-y-2">
              {['Início', 'Sobre', 'Habilidades', 'Projetos', 'Contato'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase().replace('í', 'i')}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Contato
            </motion.h4>
            <div className="space-y-3">
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 5 }}
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
                href={`tel:+55${contactInfo.phone}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Phone size={16} />
                <span>+55 {contactInfo.phone}</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-6"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 dark:text-gray-400 ${link.color} transition-colors duration-200`}
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
            >
              <span>&copy; {currentYear} Isaque Weber. Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </motion.div>
              <span>e React</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;