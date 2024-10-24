import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Services from "@/scenes/services"
import About from "@/scenes/about"
import Contact from "@/scenes/contact"
import { SelectedPage } from "@/shared/types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-primary-100 min-h-screen flex flex-col">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Routes>
        <Route path="/home" element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/about" element={<About setSelectedPage={setSelectedPage}  />} />
        <Route path="/services" element={<Services setSelectedPage={setSelectedPage}/>} />
        <Route path="/contact" element={<Contact setSelectedPage={setSelectedPage}/>} />
      </Routes>
      </div> 
    </>
  );
}

export default App;
