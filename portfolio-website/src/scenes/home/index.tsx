import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HomePageBackground from "@/assets/HomePageBackground.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:700px)");

  return (
    <section id="home" className="gap-16 py-28 md:h-3/7 items-center justify-center bg-home-background bg-cover">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-2/3 md:h-full items-center justify-center md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:basis-full">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-48 w-2/3 text-5xl font-extrabold text-white ">
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
              className="rounded-r-xl text-bold bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.About)}
              href={`#${SelectedPage.About}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
