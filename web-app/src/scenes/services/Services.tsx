import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
  img: string;
  setSelectedPage: (value: SelectedPage) => void;
  route: string;
};

const Services = ({ title, img, setSelectedPage, route }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="relative group overflow-hidden transition-shadow duration-300 hover:shadow-2xl rounded-md"
      onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
    >
      <Link 
        to={route} 
        key={title} 
        className="relative"
      >
        <div className="w-full h-full overflow-hidden relative" style={{ paddingBottom: '100%' }}> {/* Aspect ratio for square */}
          <img
              src={img}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
          />
        </div>
        {/* Solid Transparent Blue Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-600/40 h-1/3 flex items-end p-6">
            <div className="sm:text-xs md:text-xs lg:text-l xl:text-xl text-white font-bold text-center flex items-center justify-center w-full h-full"> {/* Centering text */}
              {title}
            </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Services;
