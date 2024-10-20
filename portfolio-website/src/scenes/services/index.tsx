import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { ServiceType, SelectedPage } from "@/shared/types";
import ServicesPageGraphics from "@/assets/HomePageBackground.png";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Service from "./Services";

const services: Array<ServiceType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Service 1",
    description:
      "Description 1",
    img: ServicesPageGraphics,
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Service 2",
    description:
      "Description 2",
    img: ServicesPageGraphics,
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Service 3",
    description:
      "Description 3",
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
    <section id="services" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
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
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {services.map((service: ServiceType) => (
            <Service
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              img={service.img}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
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
                    <span className="text-primary-300">CUSTOMERS</span>
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
    </section>
  );
};

export default Services;
