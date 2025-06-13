'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'REST APIs', 'GraphQL'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 