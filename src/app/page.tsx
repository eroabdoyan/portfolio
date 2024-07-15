import About from "./components/About/About";
import ContactMe from "./components/Buttons/ContactMe";
import DownloadCv from "./components/Buttons/DownloadCv";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/MainInfo/Info";
import Logo from "./components/MainInfo/Logo";
import Projects from "./components/Projects/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Skills from "./components/Skills/Skills";


const Home = () => {
  return (
    <main className="">
      <div className="pt-5">
        <Header />
      </div>
      
      <div className="mt-20 mx-20 flex justify-center items-center flex-col">
        <div className="flex flex-col items-center pt-10 lg:p-0">
          <Logo />
          <Info />
          
        </div>
        <div className="my-6 flex">
            <DownloadCv />
            <ContactMe />
          </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default Home;

