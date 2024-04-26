"use client";

import React, { useCallback, useRef } from "react";

import useSectionScroll, { SectionRefs } from "@/utils/sectionObserver";

import SphereBackground from "@/components/sphere/background";
import Card from "@/components/card/card";
import Section from "@/components/section";
import Hero from "@/components/hero/hero";
import Stack from "@/components/stack/stack";
import Tools from "@/components/tools/tools";
import { FaChevronRight } from "react-icons/fa";

import styles from "./page.module.css"

const Home = () => {
  const createSectionRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[id] = el;
    }
  }, []);

  const sectionRefs = useRef<SectionRefs>({});
  const { activeSection, setActiveSection } = useSectionScroll(sectionRefs);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-dvh">
        <SphereBackground viewName={activeSection} />
      </div>
      <div className="w-full h-dvh" ref={createSectionRef('hero')} id="hero" data-scroll-align="start">
        <Hero />
      </div>
      <Section ref={createSectionRef('about')} id="about">
        <div className={styles.sectionHeader}>
          About Me
        </div>
        <div className="pb-6 text-center">
          Lorem ipsum dolor sit amet, qui minim adipisicing sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit, qui minim labore minim sint cillum sint consectetur cupidatat.
        </div>
        <div className={styles.teaserGrid}>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <p className={styles.subsectionHeader}>Education</p>
              <p className="pb-6">
                Exploring the depths of mathematics and its applications in modern computing.
              </p>
            </div>
            <a className={styles.teaserLink} href="">
              Learn More
              <span className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </span>
            </a>
          </Card>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <p className={styles.subsectionHeader}>Experience</p>
              <p className="pb-6">
                Three years of engineering software and effective algorithms in a professional setting.
              </p>
            </div>
            <a className={styles.teaserLink} href="">
              Learn More
              <span className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </span>
            </a>
          </Card>
          <Card className={styles.teaserCard + ' group'}>
            <div>
              <p className={styles.subsectionHeader}>Examples</p>
              <p className="pb-6">
                Projects where I apply complex concepts to create practical solutions.
              </p>
            </div>
            <a className={styles.teaserLink} href="">
              Learn More
              <span className="pl-1 transition-transform group-hover:translate-x-2">
                <FaChevronRight />
              </span>
            </a>
          </Card>
        </div>
      </Section>
      <div className="h-screen"></div>
    </> 
  )
}

export default Home;
