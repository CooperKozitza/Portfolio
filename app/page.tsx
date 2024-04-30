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
    <div style={{scrollSnapType: 'y mandatory'}}>
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
          Hello! I&apos;m Cooper, a student at the intersection of computational math and software engineering. From algorithms to applications, my academic and professional experiences have shaped my approach to technology, driving me to innovate and improve wherever I can.
        </p>
        <section className={styles.teaserGrid}>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <header className={styles.subsectionHeader}>Education</header>
              <p className="pb-8">
                Exploring the depths of mathematics and its applications in modern computing.
              </p>
            </div>
            <a className={styles.teaserLink} onClick={() => scrollToSection('education')}>
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
              <header className={styles.subsectionHeader}>Experience</header>
              <p className="pb-8">
                Three years of engineering software and effective algorithms in a professional setting.
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
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <header className={styles.subsectionHeader}>Examples</header>
              <p className="pb-8">
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
    </div>
  )
}

export default Home;
