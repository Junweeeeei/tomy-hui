import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Services from "@/scenes/services"
import About from "@/scenes/about"
import Contact from "@/scenes/contact"
import Privacy from "@/scenes/privacy"
import ServiceLPS from '@/scenes/services/ServiceLPS'; 
import ServiceELSU from '@/scenes/services/ServiceELSU'; 
import ServiceUCRI from '@/scenes/services/ServiceUCRI'; 
import ServiceEI from '@/scenes/services/ServiceEI'; 
import { SelectedPage } from "@/shared/types";
import { Route, Routes, Navigate  } from 'react-router-dom';
import ScrollToTop from '@/shared/ScrollToTop';

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
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/about" element={<About setSelectedPage={setSelectedPage}  />} />
        <Route path="/services" element={<Services setSelectedPage={setSelectedPage}/>} />
        <Route path="/contact" element={<Contact setSelectedPage={setSelectedPage}/>} />
        <Route path="/privacy" element={<Privacy setSelectedPage={setSelectedPage}/>} />
        <Route path="/services/ServiceLPS" element={<ServiceLPS setSelectedPage={setSelectedPage}/>} />
        <Route path="/services/ServiceELSU" element={<ServiceELSU setSelectedPage={setSelectedPage}/>} />
        <Route path="/services/ServiceUCRI" element={<ServiceUCRI setSelectedPage={setSelectedPage}/>} />
        <Route path="/services/ServiceEI" element={<ServiceEI setSelectedPage={setSelectedPage}/>} />
      </Routes>
      </div> 
    </>
  );
}

export default App;
