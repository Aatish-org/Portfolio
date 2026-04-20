import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-[1000px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-center">

      {/* Left: Profile */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/profile.jpg"
          alt="Aatish P"
          width={50000}
          height={50000}
          className="rounded-full ring-4 ring-accent/80 shadow-[0_0_50px_rgba(255,220,120,0.5)]"
        />
      </div>

      {/* Right: Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">

      Hello, I'm
  {' '}<span className="bg-gradient-to-r from-yellow-300 to-white  bg-clip-text text-transparent">
      Aatish P
  </span>
</h1>

        <div className="text-2xl md:text-3xl font-medium mb-6">
          <Typed
            strings={[
              'Backend Developer',
              'System Architect',
              'Team Mentor',
              'AI Enthusiast',
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
            className="text-primary-text"
          />
        </div>

        <p className="text-base md:text-lg max-w-xl text-muted-text leading-relaxed mb-6">
          I build scalable backend systems and intelligent applications. Passionate about system architecture, performance optimization, and leveraging AI to create impactful solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
  <a
    href="mailto:aatishoffic@gmail.com"
    className="px-4 py-2 text-sm font-medium text-primary-text border border-primary-text/40 rounded-md
               hover:bg-accent/10 hover:border-accent
               active:scale-105 active:bg-accent active:text-background
               transition-all duration-200"
  >
    Contact Me
  </a>

  <a
    href="/resume.pdf"
    download
    className="px-4 py-2 text-sm font-medium text-primary-text border border-primary-text/40 rounded-md
               hover:bg-accent/10 hover:border-accent
               active:scale-105 active:bg-accent active:text-background
               transition-all duration-200"
  >
    Download CV
  </a>
</div>

        {/* Tech Stack */}
        <p className="text-sm text-primary-text/60 mt-4">
          Full‑Stack • System Design • AI • Databases
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4">
          <a href="https://github.com/Aatish-org" target="_blank" rel="noopener noreferrer" className="text-primary-text hover:text-accent transition-all text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aatishofficial/" target="_blank" rel="noopener noreferrer" className="text-primary-text hover:text-accent transition-all text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/aatish-org/" target="_blank" rel="noopener noreferrer" className="text-primary-text hover:text-accent transition-all text-2xl">
            <FaCode />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Hero;