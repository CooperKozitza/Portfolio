"use client";

import { useState } from "react";

import styles from "./stack.module.css"
import { FaDatabase, FaDesktop, FaExchangeAlt,  FaProjectDiagram, FaReact, FaServer, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

import Card from "../card/card";

enum StackLayer {
  Database = 0,
  Backend = 1,
  Frontend = 2,
};

const layerIcons: IconType[] = [
  FaDatabase,
  FaServer,
  FaDesktop,
];

const layerNames = [
  "Database layer",
  "Backend layer",
  "Frontend layer",
];

const Database = () => (
  <div>
    <h3 className="text-2xl font-display">Database Skills</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaDatabase /> SQL Relational Databases</h4>
      <p className="p-4 pb-2">
        Managing and querying relational databases like MSSQL, MySQL, and SQLite.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaProjectDiagram /> Object Relational Mapping</h4>
      <p className="p-4 pb-2">
        Bridging the gap between relational databases and object-oriented programming languages with Prisma for JS/TS, Diesel for Rust, and Entity Framework for .NET, streamlining database interactions and data representation.
      </p>
    </div>
  </div>
)

const Backend = () => (
  <div>
    <h3 className="text-2xl font-display">Backend Skills</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaExchangeAlt /> APIs</h4>
      <p className="p-4 pb-2">
        Fast backend APIs built with Node.js and Express, Rust and Rocket, or C# and ASP.NET.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaServer />Server Side Rendering</h4>
      <p className="p-4 pb-2">
        Merging frontend and backend with full-stack frameworks like Next.js and ASP.NET to create fast, optomized, and powerful interactive web apps. 
      </p>
    </div>
  </div>
)

const Frontend = () => (
  <div>
    <h3 className="text-2xl font-display">Frontend Skills</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaReact /> Component Based Frontend Frameworks</h4>
      <p className="p-4 pb-2">
        Interactive user interfaces built with React using TailwindCSS/Bootstrap for styling, and Redux for state management.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaCode /> HTML, CSS, and JavaScript</h4>
      <p className="p-3 pb-2">
        HTML, CSS, and JavaScript form the foundational trio of web development, enabling the creation of visually engaging websites with structured content, aesthetic styling, and dynamic functionality.
      </p>
    </div>

  </div>
)

const Stack = () => {
  const [activeLayer, setActiveLayer] = useState(StackLayer.Database);

  const handleHover = (index: StackLayer) => {
    setActiveLayer(index);
  }

  return (
    <div className="md:flex">
      <div className="md:mr-10">
        <div className="group p-4 h-full flex flex-col justify-between" style={{minHeight: '350px'}}>
          <div className="h-full flex flex-col-reverse pt-6 md:pt-0 justify-center items-center">
          {layerIcons.map((Icons, index: StackLayer) => (
              <div 
                className={`
                  ${index == StackLayer.Database ? "group-hover:translate-y-10" 
                  : index == StackLayer.Frontend ? "group-hover:-translate-y-10" : ""}
                  ${styles.layerWrapper}
                  transition duration-700 flex items-center justify-center
                `}
                key={index}
                aria-label={layerNames[index]}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();

                    handleHover(index);
                  }
                }}
              >
                <div 
                  className={`${styles.layer} ${activeLayer == index ? styles.layerHighlight : ""} flex items-center justify-center text-white shadow-xl`}
                  onMouseEnter={() => handleHover(index)}
                >
                    <Icons size={100} /> 
                </div>
              </div>
          ))}
          </div>
          <div className="transition justify-self-end pt-4 text-center text-sm text-neutral-500 group-hover:text-transparent">
            <span className="hidden md:inline">Hover over</span>
            <span className="inline md:hidden">Tap</span> a layer to learn more
            <span className="inline md:hidden"> below</span>.
          </div>
        </div>
      </div>
      <Card className="mt-6 md:mt-0 md:h-fit" style={{minHeight: '410px'}}>
        {activeLayer == StackLayer.Database ? <Database /> : null} 
        {activeLayer == StackLayer.Backend ? <Backend /> : null} 
        {activeLayer == StackLayer.Frontend ? <Frontend /> : null} 
      </Card>
    </div>
  )
}

export default Stack;
