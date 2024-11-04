import { SelectedPage } from "@/shared/types";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  className?: string;
};

const NavbarLink = ({ page, selectedPage, setSelectedPage, className=`text-blue-700` }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handlePageClick = (page: SelectedPage) => {
    window.scrollTo(0, 0); // Scroll to the top
    setSelectedPage(page); // Call your existing function to set the selected page
  };

  return (
    <RouterLink
      className={`${selectedPage === lowerCasePage ? `text-red-600` : `${className}`}
        transition duration-500 hover:text-gray-100 font-semibold text-lg 
      `}
      to={`/${lowerCasePage}`} // Navigates to a new page based on the page name
      onClick={() => handlePageClick(lowerCasePage)}
    >
      {page}
    </RouterLink>
  );
};

export default NavbarLink;
