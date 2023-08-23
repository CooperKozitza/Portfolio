"use client";

import { useState } from "react";

import styles from "./stack.module.css"
import { FaDatabase, FaDesktop, FaExchangeAlt,  FaProjectDiagram, FaReact, FaServer } from "react-icons/fa";
import { IconType } from "react-icons";

enum StackLayer {
  DataBase = 0,
  Backend = 1,
  Frontend = 2,
};

const layerIcons: IconType[] = [
  FaDatabase,
  FaServer,
  FaDesktop,
];

const DataBase = () => (
  <div>
    <h3 className="text-2xl font-display">Database</h3>
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
    <h3 className="text-2xl font-display">Backend</h3>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaExchangeAlt /> APIs</h4>
      <p className="p-4 pb-2">
        Fast backend APIs built with Node.js and Express, Rust and Rocket, or C# and ASP.NET.
      </p>
    </div>
    <div className={`${styles.textFade} py-4`}>
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaServer />Server Side Rendering</h4>
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
      <h4 className="flex items-center gap-2 font-bold font-mono"><FaReact /> Component Based Frontend Frameworks</h4>
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
          <span className="hidden md:inline">Hover over</span><span className="inline md:hidden">Tap</span> a layer to learn more.
        </div>
        <div className="group p-4 h-80 flex flex-col-reverse justify-center items-center">
        {layerIcons.map((Icons, index: StackLayer) => (
            <div 
              className={`
                ${index == StackLayer.DataBase ? "group-hover:translate-y-10" 
                : index == StackLayer.Frontend ? "group-hover:-translate-y-10" : ""}
                ${styles.layerWrapper}
                transition duration-700 flex items-center justify-center
              `}
              key={index}>
              <div 
                className={`${styles.layer} ${activeLayer == index ? styles.layerHighlight : ""} flex items-center justify-center text-white shadow-xl`}
                onMouseEnter={() => handleHover(index)}>
                  <Icons size={100} /> 
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
