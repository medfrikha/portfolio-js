import Hero from "@/components/HeroPage";
import Projects from "./projects/page";
import Experience from "./experience/page";


export default function Home() {
  return (
    <main className=" flex flex-col  justify-center">
    <Hero />
  <Experience />
  <Projects />
  </main>
  );
}
