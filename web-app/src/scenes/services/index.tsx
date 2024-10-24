import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { ServiceType, SelectedPage } from "@/shared/types";
import ServicesPageGraphics from "@/assets/HomePageBackground.png";
import Footer from "@/scenes/footer"
import { motion } from "framer-motion";
import Service from "./Services";

const services: Array<ServiceType> = [
  {
    title: "Piping",
    description:
      "Piping",
    img: ServicesPageGraphics,
  },
  {
    title: "Electrical Cabling",
    description:
      "Electrical Cabling",
    img: ServicesPageGraphics,
  },
  {
    title: "Roofing",
    description:
      "Roofing",
    img: ServicesPageGraphics,
  },
  {
    title: "No Roofing",
    description:
      "No Roofing",
    img: ServicesPageGraphics,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-full">
      <div className="relative bg-home-background bg-cover md:h-1/4"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <motion.div
          className="mx-auto w-2/3 md:h-full items-center justify-center md:flex"
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
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
              <p className="mt-40 w-2/3 text-5xl font-extrabold text-white ">
                Services
              </p>
              <p className="mt-5 w-2/3 text-xl text-white ">
                Over 25 years of industry expertise in delivering underground infrastructure solutions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center">
        <motion.div className="mx-auto w-2/3"
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>Our Core Services.</p>
            <p className="my-5 text-3xl">
              Specialised Engineering solution from planning , 
              designing to building your infrastructure
            </p>
          </motion.div>
          {/* SERVICES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 pt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {services.map((service: ServiceType) => (
              <Service
                key={service.title}
                title={service.title}
                description={service.description}
                img={service.img}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center gap-20 md:flex">
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      HUNDRED OF SATISFIED{" "}
                      <span className="text-primary-300">CLIENTS</span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Tomy Hui Electrical Engineering is proud to annouce that we hold certificates of ....
                </p>
                <p className="mb-5">
                  We wil do our best to serve!
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Send Us Enquiry
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </section>
  );
};

export default Services;
