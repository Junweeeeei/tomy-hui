// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Stats from "@/scenes/stats";
import Footer from "@/scenes/footer"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:700px)");

  return (
    <section id="home" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-800px min-h-[800px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className="mx-auto w-1/2 md:w-1/2 lg:w-1/2 md:h-full items-center justify-center md:flex relative z-10 overflow-hidden"
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
              <p className="w-full md:w-3/4 lg:w-2/3 text-5xl font-extrabold text-white">
                Disciplined and Trustworthy Electrical Engineering Service
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
              <AnchorLink
                className="rounded-r-xl font-bold bg-blue-600 text-red-700 px-10 py-2 hover:bg-red-700 hover:text-white"
                onClick={() => setSelectedPage(SelectedPage.About)}
                href={`#${SelectedPage.About}`}
              >
                Learn More
              </AnchorLink>
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
