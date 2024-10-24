import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <RouterLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      // href={`#${lowerCasePage}`}
      to={`/${lowerCasePage}`} // Navigates to a new page based on the page name
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </RouterLink>
  );
};

export default Link;
