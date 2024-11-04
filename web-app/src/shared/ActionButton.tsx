import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-r-xl font-bold bg-blue-600 text-white px-10 py-2 hover:bg-red-700 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.About)}
      href={`#${SelectedPage.About}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
