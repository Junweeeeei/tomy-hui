import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo_resized.png";
import NavbarLink from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import EmailLink from "@/shared/EmailLink";
import { Link } from 'react-router-dom';

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
          <div className={`${flexBetween} w-full gap-16 h-full`}>
            {/* LEFT SIDE */}
            <Link to="/" className="transition-transform duration-300 h-full">
              <img alt="logo" src={Logo} className="transition-transform duration-300 h-full" />
            </Link>
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
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>  
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className="fixed right-0 bottom-0 z-40 h-full w-[40%] bg-secondary-400 drop-shadow-xl transition-transform duration-500 ease-in-out transform translate-x-full"
          style={{ transform: isMenuToggled ? 'translateX(0)' : 'translateX(100%)' }}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12 transition-opacity duration-300 ease-in-out">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] mr-[33%] flex flex-col gap-10 text-2xl overflow-y-auto h-[calc(100%-48px)] w-[50%]">
            {/* Adjust height to account for the close button's height */}
            <NavbarLink page="HOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
            <NavbarLink page="SERVICES" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
            <NavbarLink page="ABOUT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
            <NavbarLink page="CONTACT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="text-white" />
            <EmailLink className="group relative h-10 w-36 overflow-hidden rounded-md bg-blue-800 px-4 py-2 text-white font-semibold text-sm text-center items-center">
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
      )}
    </nav>
  );
};

export default Navbar;
