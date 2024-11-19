import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import CerticateImage from "@/assets/Certificate.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const company_des_1 = `Founded on August 31, 1989, Tomy Hui Electrical Engineering Pte Ltd has established a strong reputation in Singapore’s electrical engineering industry through dedication, quality, and steady growth. Initially focused on the upkeep, installation, and enhancement of various electrical systems, we have expanded our expertise across diverse sectors, including fire alarms, communication networks, and switchboards.   
Our commitment to delivering reliable service and maintaining high standards has earned us the trust and loyalty of the majority of our earliest clients. In 2009, we achieved Level 2 of the ME05 workhead for electrical engineering under the Building and Construction Authority (BCA), further advancing to Level 5 in 2018. Additionally, we earned the bizSAFE Star certification in 2012, demonstrating our dedication to workplace safety and health.   
As part of our commitment to quality and safety, we adhere to internationally recognized standards, including ISO 9001:2015 for quality management systems and OHSAS 45001:2018 for occupational health and safety. Guided by a client-first mindset, we strive to exceed expectations in every project, delivering tailored solutions with unwavering quality and reliability.`

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-400px min-h-[400px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="mx-auto w-1/2 md:h-full items-center justify-center md:flex"
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
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
                About Us
              </p>
              <p className="mt-5 w-full text-xl text-white ">
                Over 25 Years of Expertise in Electrical Engineering
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center bg-gray-20">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
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
            <p className='font-bold text-5xl'>Company Profile</p>
            <p className="my-5">
              {company_des_1}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        >
          {/* HEADER */}
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
            <p className='font-bold text-5xl text-center'> Our Certifications</p>
            <div className="flex items-center justify-center">
              <img src={CerticateImage} className='my-5'/>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </section>
  )
}

export default About