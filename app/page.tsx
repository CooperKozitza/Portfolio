import Hero from "@/components/hero/hero";

import styles from "./page.module.css"
import Card from "@/components/card/card";
import Stack from "@/components/stack/stack";
import Tools from "@/components/tools/tools";


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
        <div className="max-w-4xl mx-auto p-6">
          <Stack />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-6">
          <div className="grid grid-rows-2 gap-4">
            <Card className="hover:border hover:border-[#ff663b]">
              <div>
                <h3 className="text-2xl font-display">Desktop Applicaions</h3>
                <p>
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
              </div>
            </Card>
            <Card className="hover:border hover:border-[#ff663b]">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </Card>
          </div>
          <Card className="hover:border hover:border-[#ff663b]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </Card>
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
