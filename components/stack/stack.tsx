"use client";

import { useState } from "react";

import styles from "./stack.module.css"
import { FaDatabase, FaExchangeAlt,  FaProjectDiagram, FaReact, FaServer } from "react-icons/fa";

const LAYER_COUNT = 3;
enum StackLayer {
  DataBase = 0,
  Backend = 1,
  Frontend = 2,
};

const DataBase = () => (
  <div>
    <h3 className="text-2xl font-display">Database</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold"><FaDatabase /> SQL Relational Databases</h4>
      <p className="p-4 pb-2">
        Managing and querying relational databases like MSSQL, MySQL, and SQLite.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold"><FaProjectDiagram /> Object Relational Mapping</h4>
      <p className="p-4 pb-2">
        Bridging the gap between relational databases and object-oriented programming languages with Prisma for JS/TS, Deisel for Rust, and Entity Framework for .NET, streamlining database interactions and data representation.
      </p>
    </div>
  </div>
)

const Backend = () => (
  <div>
    <h3 className="text-2xl font-display">Backend</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold"><FaExchangeAlt /> API</h4>
      <p className="p-4 pb-2">
        Fast backend APIs built with Node.js and Express, Rust and Rocket, or C# and ASP.NET.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold"><FaServer />Server Side Rendering</h4>
      <p className="p-4 pb-2">
        Merging frontend and backend with full-stack frameworks like Next.js and ASP.NET. 
      </p>
    </div>
  </div>
)

const Frontend = () => (
  <div>
    <h3 className="text-2xl font-display">Frontend</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold"><FaReact /> Component Based Frontend Frameworks</h4>
      <p className="p-4 pb-2">
        Interactive user interfaces built with React using TailwindCSS/Bootstrap for styling, and Redux for state management.
      </p>
    </div>
  </div>
)

const Stack = () => {
  const [activeLayer, setActiveLayer] = useState(StackLayer.Frontend);

  const handleHover = (index: StackLayer) => {
    setActiveLayer(index);
  }

  return (
    <div className="md:flex">
      <div className="md:mr-10">
        <div className="text-center text-sm text-neutral-500">
          Hover over a layer to learn more.
        </div>
        <div className="group p-4 h-80 flex flex-col-reverse justify-center">
        {[...Array(LAYER_COUNT)].map((_, index: StackLayer) => (
            <div 
              className={`
                ${index == StackLayer.DataBase ? "group-hover:translate-y-10" 
                : index == StackLayer.Frontend ? "group-hover:-translate-y-10" : ""}
                ${styles.layerWrapper}
                transition duration-700 flex items-center justify-center
              `}
              key={index}>
              <div 
                className={`${styles.layer} shadow-xl`}
                style={{ 
                  background: "linear-gradient(80deg, rgba(256, 128, 0, 1) 0%, rgba(255, 72, 127, 1) 100%)",
                  scale: activeLayer == index ? "1.2" : "1",
                }}
                onMouseEnter={() => handleHover(index)}>
              </div>
            </div>
        ))}
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        {activeLayer == StackLayer.DataBase ? <DataBase /> : null} 
        {activeLayer == StackLayer.Backend ? <Backend /> : null} 
        {activeLayer == StackLayer.Frontend ? <Frontend /> : null} 
      </div>
    </div>
  )
}

export default Stack;
