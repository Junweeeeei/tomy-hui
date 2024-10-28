import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
  img: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ title, description, img, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="elative group overflow-hidden transition-shadow duration-300 hover:shadow-2xl rounded-md"
      onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
    >
      <a 
        href="#" 
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
            <div className="text-white text-2xl font-bold text-center flex items-center justify-center w-full h-full"> {/* Centering text */}
              {description}
            </div>
            {/* <p className="text-white text-sm">{description}</p> */}
        </div>
      </a>
    </motion.div>
  );
};

export default Services;
