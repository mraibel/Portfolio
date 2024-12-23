'use client'

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {

  const [currentNav, setCurrentNav] = useState(0)
  const [section, setSection] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      if (position > 0 && position < 720) {
        setSection(1)
      } else if (position >= 720 && position < 1670) {
        setSection(2)
      } else if (position >= 1670) {
        setSection(3)
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: currentNav,
      behavior: "smooth"
    })
  }, [currentNav])

  return (
    <>
      <Navbar section={section} setSection={setSection} setCurrentNav={setCurrentNav} />
      <div className="ml-[200px]">
        <Profile />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
