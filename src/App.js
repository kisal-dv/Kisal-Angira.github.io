import React, { useState, useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import Preloader from "./components/Preloader/Preloader.js";

const Services = lazy(() => import("./components/Services/Services.js"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 25, 203, 0) 50%, rgba(0, 25, 203, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (<Preloader />) : (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Suspense fallback={<div /> }>
                <Services />
                <Skills />
                <Experience />
              </Suspense>
            </Wrapper>
            <Suspense fallback={<div />}>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </Suspense>
            <Wrapper>
              <Suspense fallback={<div />}>
                <Education />
                <Contact />
              </Suspense>
            </Wrapper>
            <Footer />
            {openModal.state && (
              <Suspense fallback={<div />}>
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              </Suspense>
            )}
          </Body>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
