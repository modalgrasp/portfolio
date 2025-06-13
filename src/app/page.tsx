'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';

const projects = [
  {
    title: "NASA Turbojet Engine Prediction",
    description: "AI/ML project for predicting turbojet engine performance using advanced machine learning algorithms.",
    imageUrl: "/projects/nasa.png",
    technologies: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    projectUrl: "https://github.com/modalgrasp/NASA-TURBOFAN-ENGINE.git"
  },
  {
    title: "OS Project Website",
    description: "Interactive website showcasing various Operating System algorithms including CLOOK, FIFO, DP, and SJF with visualizations.",
    imageUrl: "/projects/os.png",
    technologies: ["Web Development", "Algorithms", "Visualization", "JavaScript"],
    projectUrl: "https://github.com/modalgrasp/OS-Stimulator"
  },
  {
    title: "Birthday Website Template",
    description: "A personalized website template created for a special birthday celebration with interactive elements.",
    imageUrl: "/projects/birthday.png",
    technologies: ["HTML/CSS", "JavaScript", "UI/UX", "Responsive Design"],
    projectUrl: "https://github.com/modalgrasp/Gf-birthday"
  }
];

export default function Home() {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/xnnvdyap', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ loading: false, success: true, error: false });
      form.reset();
    } catch {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&#39;m <span className="name-text text-white">Pratham Patel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | Data Analytics | AI/ML | Cyber Security | UI/UX Enthusiast
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-3 rounded-full border border-purple-600 hover:bg-purple-600/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xnnvdyap"
              method="POST"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-purple-600 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full px-8 py-3 rounded-lg transition-colors ${
                  status.loading
                    ? 'bg-purple-800 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {status.success && (
                <p className="text-green-500 text-center">
                  Message sent successfully! I&#39;ll get back to you soon.
                </p>
              )}
              {status.error && (
                <p className="text-red-500 text-center">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
