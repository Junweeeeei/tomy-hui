
import HText from "@/shared/HText";
import { ServiceType, SelectedPage } from "@/shared/types";
import ServicesPageGraphics from "@/assets/HomePageBackground.png";
import Footer from "@/scenes/footer"
import { motion } from "framer-motion";
import Service from "./Services";
import EmailLink from "@/shared/EmailLink";

const services: Array<ServiceType> = [
  {
    title: "Lightning Protection System",
    description:
      "Our Lightning Protection Systems are designed with the highest safety standards to safeguard your structures and assets. With years of expertise, we implement effective, reliable solutions that minimize risks from lightning strikes, ensuring protection and peace of mind for every client.",
    img: ServicesPageGraphics,
    route: "/services/service_lps"
  },
  {
    title: "Electrical Load Supply Upgrading",
    description:
      "As your business grows, so do your electrical needs. Our Electrical Load Supply Upgrading service is designed to support expansion by providing reliable upgrades to handle increased power demands. With a focus on safety, efficiency, and minimal disruption, we help you scale seamlessly while safeguarding system stability.",
    img: ServicesPageGraphics,
    route: "/services/service_elsu"
  },
  {
    title: "Underground Cabling & Routing Installation",
    description:
      "Our team provides comprehensive underground cabling and routing installation services, ensuring seamless and efficient routing of electrical systems. With a meticulous approach to planning and installation, we meet the demands of each project with a focus on durability and safety, keeping your operations running smoothly.",
    img: ServicesPageGraphics,
    route: "/services/service_ucri"
  },
  {
    title: "Electrical Installation",
    description:
      "Specializing in electrical installation since our founding, we deliver end-to-end solutions across various industries. Our services cover the installation of essential systems such as electrical wiring, switchboards, and communication lines, ensuring compliance with regulatory standards and a commitment to exceptional quality.",
    img: ServicesPageGraphics,
    route: "/services/service_ei"
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
    <section id="services" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-300px min-h-[400px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="mx-auto w-1/2 md:w-1/2 lg:w-2/3 md:h-full items-center justify-center md:flex relative z-10 overflow-hidden"
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
              <p className="mt-40 w-1/2 text-5xl font-extrabold text-white ">
                Services
              </p>
              <p className="mt-5 w-1/2 text-xl text-white ">
                Over 25 years of industry expertise in delivering underground infrastructure solutions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center">
        <motion.div className="mx-auto w-1/2"
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
                route={service.route}
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
              <div className="relative mt-8">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <EmailLink className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-blue-800 px-8 py-2 text-neutral-50">
                    <span className="relative z-10">
                      Enquire Now
                    </span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-700 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                      </span>
                    </span>
                  </EmailLink>
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
