// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Stats from "@/scenes/stats";
import Footer from "@/scenes/footer"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  
  return (
    <section id="home" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-[800px] min-h-[400px] flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className="mx-auto w-1/2 md:w-1/2 lg:w-1/2 md:h-full md:flex items-center justify-center relative z-10 overflow-hidden"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* MAIN HEADER */}
          <div className="md:basis-full">
            {/* HEADINGS */}
            <motion.div
              className="md:mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="w-full mt-20 md:w-3/4 lg:w-3/4 md:text-5xl text-2xl font-extrabold text-white">
                Powering Excellence in Electrical Engineering Since 1989
              </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="rounded-r-xl font-bold bg-blue-600 text-white md:px-10 md:py-2 px-6 py-2 hover:bg-red-700 hover:text-white">
                <Link to="/about" className="block w-full text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Other Components */}
      <Stats />
      <Footer />
    </section>

  );
};

export default Home;
