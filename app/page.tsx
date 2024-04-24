"use client";

import React from "react";

import useSectionScroll from "@/utils/sectionObserver";

import SphereBackground from "@/components/sphere/background";
import Card from "@/components/card/card";
import Section from "@/components/section";
import Hero from "@/components/hero/hero";
import Stack from "@/components/stack/stack";
import Tools from "@/components/tools/tools";

import styles from "./page.module.css"

const Home = () => {
  const { activeSection, createSectionRef } = useSectionScroll();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-dvh">
        <SphereBackground viewName={activeSection} />
      </div>
      <div className="w-full h-dvh" ref={createSectionRef('hero')} id="hero" data-scroll-align="start">
        <Hero />
      </div>
      <Section ref={createSectionRef('web-development')} id="web-development">
        <div className={styles.sectionHeader}>
          Full Stack Development <br />
          And <span className="bg-highlight px-1">More</span>
        </div>
        <Stack />
      </Section>
      {/*
      <Section ref={createSectionRef('about-me')} id="about-me">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 grid-rows-1 gap-2">
          <Card >
            <h2 className="font-display text-2xl pb-2">Education</h2>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </Card>
          <Card>
            <h2>Work History</h2>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </Card>
          <Card>
            <h2>Education</h2>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </Card>
        </div>
      </Section>
      <Section id="tools">
        <div className="max-w-6xl p-6">
          <h2 className={styles.sectionHeader}>
            The Right <span className="bg-highlight px-1">Tools</span> For The Job
          </h2>
          <Card>
            <Tools />
          </Card>
        </div>
      </Section>
      */}
    </> 
  )
}

export default Home;
