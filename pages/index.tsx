import About from "@/components/About";
import Archieve from "@/components/Archieve";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
      <title>Lavanya Jagannath</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Preview.svg" />
    </Head>
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <LeftSide />
      </div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Archieve />
        <Contact />
        <Footer />
      </div>
      <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
        <RightSide />
      </div>
      </div>
    </main>
    </>
  );
}