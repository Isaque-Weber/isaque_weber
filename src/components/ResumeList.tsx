"use client";

import { useState } from 'react';
import { resumes } from '@/data/portfolio';
import { FiChevronDown, FiChevronUp, FiDownload } from 'react-icons/fi';
import {Download} from "lucide-react";

const ResumeList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center justify-center w-full space-x-2"
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
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {resumes.map((resume) => (
              <li key={resume.name}>
                <a
                  href={resume.path}
                  download
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span>{resume.name}</span>
                  <FiDownload className="h-5 w-5 text-gray-400" />
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
