import { useState } from "react";
import Logo from "@/assets/Logo.svg";
import NavbarLink from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import EmailLink from "@/shared/EmailLink";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1400px)");
  const navbarBackground = isTopOfPage ? "h-16" : "h-20";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} bg-primary-100 drop-shadow transition-all duration-300 fixed z-30 w-full`}
      >
        <div className={` ${flexBetween} mx-auto w-1/2 h-full`}>
          <div className={`${flexBetween} w-full h-full`}>
            {/* LEFT SIDE */}
            <div className="transition-transform duration-300 h-full object-contain p-2">
              <Link to="/">
                <img alt="logo" src={Logo} className="transition-transform duration-300 h-full object-contain" />
              </Link>
            </div>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className="ml-auto">
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-2xl`}>
                    <NavbarLink
                      page="HOME"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavbarLink
                      page="SERVICES"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavbarLink
                      page="ABOUT"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavbarLink
                      page="CONTACT"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    {/* Interactive Button For Email */}
                    <EmailLink className="group relative h-12 overflow-hidden rounded-md bg-blue-800 px-8 py-2 text-white font-semibold">
                      <span className="relative z-10 block truncate whitespace-nowrap">
                        Enquire Now
                      </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-700 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                        </span>
                      </span>
                    </EmailLink>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                className="relative group rounded-full bg-secondary-500 p-3"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuToggled ? 'translate-x-10' : ''}`}></div>
                  <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuToggled ? 'translate-x-10' : ''} delay-75`}></div>
                  <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuToggled ? 'translate-x-10' : ''} delay-150`}></div>
                  <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${isMenuToggled ? 'translate-x-0 w-12' : 'w-0'}`}>
                    <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isMenuToggled ? 'rotate-45' : 'rotate-0'} delay-300`}></div>
                    <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isMenuToggled ? '-rotate-45' : '-rotate-0'} delay-300`}></div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>  
      </div>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            className="flex flex-col items-center fixed right-0 z-40 md:w-1/3 w-1/2 bg-secondary-500 drop-shadow-xl"
            initial="hidden"
            whileInView="visible"
            exit={"hidden"}
            style=  {{
              top:`80px`,
              overflowY: "auto", // Enable vertical scrolling if content overflows
              borderTopLeftRadius: "24px", 
              borderBottomLeftRadius: "24px", 
              maxHeight: "calc(100vh - 128px)",
            }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: "40%", y: 0 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
          >
            {/* MENU ITEMS */}
            <ul className="flex flex-col gap-10 md:text-2xl text-lg h-[calc(100%-80px)] w-[60%] text-center my-10 items-center">
              {/* Adjust height to account for the close button's height */}
              <NavbarLink page="HOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
              <NavbarLink page="SERVICES" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
              <NavbarLink page="ABOUT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
              <NavbarLink page="CONTACT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
              <EmailLink className="group relative md:h-10 md:w-36 h-10 w-32 overflow-hidden rounded-md bg-blue-800 px-4 py-2 text-white font-semibold text-sm text-center items-center">
                <span className="relative z-10 block truncate whitespace-nowrap">
                  Enquire Now
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-700 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                  </span>
                </span>
              </EmailLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
