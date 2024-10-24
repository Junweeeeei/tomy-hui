import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  img: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ icon, title, description, img, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-1 rounded-md border-2 border-gray-100 px-0 py-8 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="border-primary-100 bg-primary-100">
          <img
            className="mx-auto"
            alt="services-page-graphic"
            src={img}
          />
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Services;
