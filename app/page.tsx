import Hero from "@/components/hero/hero";
import Stack from "@/components/stack/stack";
import Tools from "@/components/tools/tools";

import styles from "./page.module.css"

const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="p-10">
          <h2 className="text-center text-4xl tracking-tight font-display">
            Full Stack Development <br />
            And <span className={styles.gradientTextOrange}>More</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <Stack />
        </div>
      </div>
      <div>
        <div className="p-10">
          <h2 className="text-center text-4xl tracking-tight font-display">
            About Me
          </h2>
        </div>
        <div className="w-screen pt-6 pb-6">
        </div>
      </div>
      <div>
        <div className="p-10">
          <h2 className="text-center text-4xl tracking-tight font-display">
            The Right <span className={styles.gradientTextPink}>Tools</span> For The Job
          </h2>
        </div>
        <div className="max-w-4xl mx-auto p-6">
          <Tools />
        </div>
      </div>
    </> 
  )
}

export default Home;
