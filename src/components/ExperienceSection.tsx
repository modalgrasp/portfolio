'use client';

import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Java Programming for Complete Beginners',
    issuer: 'Udemy',
    date: 'September 2022',
    description: [
      'Mastered fundamental Java programming concepts and syntax',
      'Learned object-oriented programming principles in Java',
      'Developed practical applications using Java core features',
      'Gained hands-on experience with Java development tools',
    ],
    link: 'https://ude.my/UC-cca63e33-13e4-4e54-801c-72f353086c49',
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    date: 'January - February 2023',
    description: [
      'Comprehensive training in Python programming for data analysis',
      'Learned data manipulation and visualization techniques',
      'Mastered statistical analysis and data processing',
      'Applied Python libraries for scientific computing',
    ],
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS21S4454024503089966',
  },
  {
    title: 'Understanding Incubation and Entrepreneurship',
    issuer: 'NPTEL',
    date: 'January - April 2025',
    description: [
      'Gained insights into startup incubation processes',
      'Learned about business model development and validation',
      'Understood the fundamentals of entrepreneurship',
      'Explored funding strategies and market analysis',
    ],
    link: 'https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/107/noc25-de07/Course/NPTEL25DE07S54540019904498059.pdf',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: 'February 2025',
    description: [
      'Mastered core cybersecurity concepts and principles',
      'Learned about network security and threat detection',
      'Understood security protocols and encryption methods',
      'Gained knowledge of security best practices and compliance',
    ],
    link: 'https://www.credly.com/badges/bca180f3-5307-456e-9b89-25ea93db9b90',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses I&#39;ve completed to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-400">{certificate.title}</h3>
                  <p className="text-gray-300">{certificate.issuer}</p>
                </div>
                <p className="text-gray-400 mt-2 sm:mt-0">{certificate.date}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {certificate.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm sm:text-base">{item}</li>
                ))}
              </ul>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >
                View Certificate
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
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 