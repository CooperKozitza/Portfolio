"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import SphereBackground from "@/components/sphere/background";
import Card from "@/components/card/card";
import Section from "@/components/section";
import Hero from "@/components/hero/hero";

import styles from "./page.module.css"

import uw from "@/public/static/images/uw.png"
import psu from "@/public/static/images/psu.png"
import useSectionObserver from "@/utils/sectionObserver";


const Home = () => {
  const { activeSection, createSectionRef } = useSectionObserver();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <div style={{ scrollSnapType: 'y mandatory' }}>
      <figure className="fixed top-0 left-0 w-full h-dvh" style={{ zIndex: -1 }}>
        <SphereBackground viewName={activeSection} />
      </figure>
      <section
        className={`w-full h-dvh ${styles.scrollSnapTarget}`}
        ref={createSectionRef('hero')}
        id="hero"
      >
        <Hero />
      </section>
      <Section className={styles.scrollSnapTarget} ref={createSectionRef('about')} id="about">
        <header className={styles.sectionHeader}>
          About Me
        </header>
        <p className="pb-10 text-center">
          Hello! I&apos;m Cooper, a computational math student and software engineer who thrives on solving complex problems and applying mathematical principles to develop innovative software solutions.
        </p>
        <section className={styles.teaserGrid}>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <header className={styles.subsectionHeader}>Education</header>
              <p>
                Exploring the depths of mathematics and its applications in modern computing.
              </p>
            </div>
            <a className={styles.teaserLink} onClick={() => scrollToSection('education')}>
              <span className="hidden md:block">
                Learn More
              </span>
              <figure className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </figure>
            </a>
          </Card>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <header className={styles.subsectionHeader}>Experience</header>
              <p>
                Three years of engineering software and effective algorithms in a professional setting.
              </p>
            </div>
            <a className={styles.teaserLink} onClick={() => scrollToSection('experience')}>
              <span>
                Learn More
              </span>
              <figure className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </figure>
            </a>
          </Card>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <header className={styles.subsectionHeader}>Examples</header>
              <p>
                Projects where I apply complex concepts to create practical solutions.
              </p>
            </div>
            {/*
            <a className={styles.teaserLink} href="">
              <span>
                Learn More
              </span>
              <figure className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </figure>
            </a>
            */}
          </Card>
        </section>
      </Section>
      <Section
        className={styles.scrollSnapTarget}
        ref={createSectionRef('education')}
        id="education"
        right
      >
        <header className={styles.sectionHeader}>
          Education
        </header>
        <Card className="max-w-2xl">
          <section className="pb-8" id="uw">
            <time className={styles.monoText}>Starting Fall 2024</time>
            <header className={styles.subsectionHeader + ' flex items-center}'}>
              <figure className={styles.icon}>
                <Image src={uw} alt="University of Washington logo" width={35} className="pr-2" />
              </figure>
              <span>University of Washington</span>
            </header>
            <p>
              Committed to studying&nbsp;
              <a
                className="underline underline-offset-2"
                href="https://www.washington.edu/students/gencat/program/S/AppliedandComputationalMathSciences-994.html#undergradPrograms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Applied and Computational Mathematical Sciences
              </a>
              &nbsp;with a minor in Physics.
            </p>
          </section>
          <section className="pb-8" id="psu">
            <time className={styles.monoText}>Summer 2023-Fall 2024</time>
            <header className={styles.subsectionHeader + ' flex items-center}'}>
              <figure className={styles.icon}>
                <Image src={psu} alt="Portland State University logo" width={35} className="pr-2" />
              </figure>
              <span>Portland State University</span>
            </header>
            <p>
              Courses CS161: Introduction to Programming and CS162: Introduction to Computer Science.
              Achieved a 4.0 GPA, excelling in foundational computer science concepts.
            </p>
          </section>
          <section id="ibw">
            <time className={styles.monoText}>Fall 2020-Spring 2024</time>
            <header className={styles.subsectionHeader + ' flex items-center}'}>
              Ida B. Wells-Barnett Highschool
            </header>
            <p>
              Achieved a 3.98 unweighted GPA and a 4.2 weighted GPA,
              honored with Career Technical Education (CTE) honors,
              and completed 9 AP courses, demonstrating strong academic rigor.
            </p>
          </section>
        </Card>
      </Section>
      <Section
        className={styles.scrollSnapTarget}
        ref={createSectionRef('experience')}
        id="experience"
        left
      >
        <header className={styles.sectionHeader}>
          Experience
        </header>
        <Card className="max-w-2xl">
          <section className="pb-8">
            <time className={styles.monoText}>November 2021 - Present</time>
            <header className={styles.subsectionHeader + ' flex items-center}'}>
              Intern, Cascade Custom Software LLC, Portland
            </header>
            <div className="space-y-4">
              <p>
                Individually spearheaded the development of comprehensive inventory and company management software tools, deployed across desktop, web, and mobile platforms, for major companies like Tidewater Barge Lines, Tidewater Enviromental Services, Daimler Truck North America, and Domtar.
              </p>
              <p>
                In this role, I maintained and enhanced existing codebases, implementing new features and resolving bugs for software relied upon by more than 3,000 users.
                Additionally, I contributed to the modernization of a massive codebase consisting of millions of lines of code, ensuring the software remained robust and scalable.
              </p>
            </div>
          </section>
          <section className="pb-8">
            <time className={styles.monoText}>February 2024</time>
            <header className={styles.subsectionHeader + ' flex items-center}'}>
              Research Assistant, Casey Eye Institute at OHSU
            </header>
            <p>
              Collaborated closely with Dr. Alireza Karimi on pioneering research that developed an AI-driven classification model designed to assist in the early diagnosis of glaucoma based on demographic data.
              My contributions to this project culminated in a co-authorship as the 3rd author on a published paper.
            </p>
          </section>
        </Card>
      </Section >
      <Section
        className={styles.scrollSnapTarget}
        ref={createSectionRef('skills')}
        id="skills"
      >
        <header className={styles.sectionHeader}>
          Skills
        </header>
        <Card className="max-w-2xl">
          <section className="pb-8">
            <header className={styles.subsectionHeader}>
              Programming Languages
            </header>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>C/C++ (6 Years)</strong>: Expertise in optimizing graphics rendering using OpenGL and Vulkan. Strong understanding of the standard library and advanced language features.</li>
              <li><strong>C# (3 Years)</strong>: Experienced in developing server-side web applications and APIs using the .NET framework. Proficient in game development with Unity.</li>
              <li><strong>JavaScript/TypeScript (3 Years)</strong>: Skilled in building interactive applications using React. Experienced in creating web servers and APIs with Node.js.</li>
            </ul>
          </section>
          <section className="pb-8">
            <header className={styles.subsectionHeader}>
              Tools & Technologies
            </header>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Development Tools</strong>: Proficient in Vi, VS Code, Visual Studio, and Git for version control. Experienced in project management using GitHub and Azure DevOps.</li>
              <li><strong>Databases</strong>: Capable of creating, editing, and managing SQL-based databases using object-relational mapping (ORM) or raw SQL queries.</li>
              <li><strong>Cloud Platforms</strong>: Experience in building and deploying applications hosted on cloud platforms like Google Cloud Platform (GCP) and Microsoft Azure.</li>
            </ul>
          </section>
        </Card>
      </Section>
    </div >
  )
}

export default Home;
