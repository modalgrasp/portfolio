'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 sm:h-56 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2 text-sm sm:text-base">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs sm:text-sm bg-purple-900/50 text-purple-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-purple-400 text-sm sm:text-base">Click to learn more</span>
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
            >
              View Project
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-48 sm:h-64 w-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <Link
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm sm:text-base"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 