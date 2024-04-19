import Hero from "@/components/hero/hero";
import Stack from "@/components/stack/stack";
import Tools from "@/components/tools/tools";

import styles from "./page.module.css"

import React from "react";
import SphereBackground from "@/components/sphere/background";
import Card from "@/components/card/card";

const Section = ({ children, id }: { children: React.ReactNode | React.ReactNode[], id?: string }) => (
  <div className="relative py-40 w-full h-dvh min-h-fit flex justify-center items-center" id={id ? id : undefined}>
    {children}
  </div>
)

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-dvh">
        <SphereBackground />
      </div>
      <Hero />
      <Section id="web-development">
        <div className="max-w-6xl p-6">
          <h2 className={styles.sectionHeader}>
            Full Stack Development <br />
            And <span className="bg-highlight px-1">More</span>
          </h2>
          <Stack />
        </div>
      </Section>
      <Section id="about-me">
        <div className="max-w-6xl p-6">
          <h2 className="">
              About Me
          </h2>
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
    </> 
  )
}

export default Home;
