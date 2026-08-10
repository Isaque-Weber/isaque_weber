"use client";

import { useState, useRef, useEffect } from 'react';
import { resumes } from '@/data/portfolio';
import { FiChevronDown, FiChevronUp, FiDownload } from 'react-icons/fi';
import { Download } from "lucide-react";

const ResumeList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center justify-center w-full space-x-2"
        aria-expanded={isOpen}
      >
        <Download size={20} />
        <span>Download CV</span>
        {isOpen ? (
          <FiChevronUp className="h-5 w-5" />
        ) : (
          <FiChevronDown className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <ul className="divide-y divide-gray-100 dark:divide-gray-700/70">
            {resumes.map((resume) => (
              <li key={resume.name}>
                <a
                  href={resume.path}
                  download
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="font-medium">{resume.name}</span>
                  <FiDownload className="h-4 w-4 text-primary-500 flex-shrink-0 ml-2" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeList;
