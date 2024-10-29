
import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { ProjectType, SelectedPage }  from "@/shared/types";
import EmailLink from '@/shared/EmailLink';
import Carousel from '@/shared/Carousell';
import Image1 from '@/assets/worksite_1.jpg'
import Image2 from '@/assets/worksite_header.jpg'
import Image3 from '@/assets/worksite_1.jpg'
import ProjectPageGraphics from "@/assets/HomePageBackground.png";
import Service from "./Services";


const slides = [ Image1, Image2, Image3 ];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const service_des = `Specializing in electrical installation since our founding, we deliver end-to-end 
                    solutions across various industries. Our services cover the installation of essential 
                    systems such as electrical wiring, switchboards, and communication lines, ensuring 
                    compliance with regulatory standards and a commitment to exceptional quality.`

const projects: Array<ProjectType> = [
  {
    title: "Project with SMRT",
    description:
      "Dated on 10th October our project with SMRT was successfully completed with no error.",
    img: ProjectPageGraphics,
    route: "/projects/project_smrt"
  },
];


const ServiceEI = ({ setSelectedPage }: Props) => {
  return (
    <section id="serviceEI" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-400px min-h-[400px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="mx-auto w-1/2 md:h-full items-center justify-center md:flex"
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
              <p className="mt-40 w-3/4 text-5xl font-extrabold text-white ">
                Electrical Installation
              </p>
              <p className="mt-5 w-3/4 text-xl text-white ">
                Professional setup of electrical systems and components to ensure safe and efficient power distribution.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center bg-gray-20">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='justify-content mx-auto w-full gap-16 md:flex'>
              <div className='mt-16 basis-1/2 md:mt-0'>
                <div className='my-5'>
                  <p className='font-bold text-5xl'>Electrical Installation</p>
                  <p className="my-5">
                    {service_des}
                  </p>
                  {/* Interactive Button For Email */}
                  <div className='my-5'>
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
              <div className='mt-16 basis-1/2 md:mt-0'>
                <div className='my-5 '>
                  <Carousel slides={slides}/>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='font-bold text-5xl text-center'> Project References</p>
          </motion.div>
          {/* PROJECTS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 pt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {projects.map((project: ProjectType) => (
              <Service
                key={project.title}
                title={project.title}
                description={project.description}
                img={project.img}
                setSelectedPage={setSelectedPage}
                route={project.route}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </section>
  )
}

export default ServiceEI