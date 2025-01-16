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
    route: "/services/ServiceLPS"
  },
  {
    title: "Electrical Load Supply Upgrading",
    description:
      "As your business grows, so do your electrical needs. Our Electrical Load Supply Upgrading service is designed to support expansion by providing reliable upgrades to handle increased power demands. With a focus on safety, efficiency, and minimal disruption, we help you scale seamlessly while safeguarding system stability.",
    img: ServicesPageGraphics,
    route: "/services/ServiceELSU"
  },
  {
    title: "Underground Cabling & Routing Installation",
    description:
      "Our team provides comprehensive underground cabling and routing installation services, ensuring seamless and efficient routing of electrical systems. With a meticulous approach to planning and installation, we meet the demands of each project with a focus on durability and safety, keeping your operations running smoothly.",
    img: ServicesPageGraphics,
    route: "/services/ServiceUCRI"
  },
  {
    title: "Electrical Installation",
    description:
      "Specializing in electrical installation since our founding, we deliver end-to-end solutions across various industries. Our services cover the installation of essential systems such as electrical wiring, switchboards, and communication lines, ensuring compliance with regulatory standards and a commitment to exceptional quality.",
    img: ServicesPageGraphics,
    route: "/services/ServiceEI"
  },
];


const testimonials = [
  {
    id: 1,
    name: "George ( Assistant Manager, Google Products )",
    feedback: "This is the best service I've ever used!",
  },
  {
    id: 2,
    name: "Benjamin ( Head of Products, ST Engineering )",
    feedback: "Absolutely amazing experience. Highly recommend it!",
  },
  {
    id: 3,
    name: "Michael ( HR Manager, Temasek Group)",
    feedback: "Superb quality and great support team!",
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
      <div className="relative bg-home-background bg-cover md:min-h-400px min-h-[400px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="mx-auto w-1/2 md:w-1/2 lg:w-1/2 md:h-full items-center justify-center md:flex relative z-10 overflow-hidden"
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
              <p className="mt-5 w-full text-xl text-white ">
                Solutions for All Your Electrical Needs
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
            These are our core services, but our expertise extends beyond what's listed here. If you're unsure whether your needs fall within our scope, don't hesitate to reach out – we're here to assist!
            </p>
          </motion.div>
          {/* SERVICES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-8 pt-10"
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
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
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
                    <p className="font-semibold text-3xl">
                      YOUR TRUSTED CHOICE FOR{" "}
                      <span className="text-red-700">ELECTRICAL SERVICES</span>
                    </p>
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
                <p className="my-5 text-xl">
                  Join our community of satisfied clients who trust us for reliable, high-quality electrical services tailored to meet your needs!
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-8">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                  <EmailLink className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-blue-800 px-8 py-3 text-neutral-50">
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
              <div className="mt-16 flex">
                <div>
                  <motion.div
                      className="flex col text-5xl justify-center "
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={container}
                    >
                      Client Testimonials
                    </motion.div>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-8 py-10 px-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={container}
                    >
                      {testimonials.map((testimonials) => (
                        <div>
                          <p className="pb-10">
                            "{testimonials.feedback}"
                          </p>
                          <p>
                            - {testimonials.name}
                          </p>
                        </div>
                      ))}
                    </motion.div>
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
