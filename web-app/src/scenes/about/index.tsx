import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import CerticateImage from "@/assets/AboutPageCertificate.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const company_des_1 = `TOMY HUI ELECTRICAL ENGINEERING embarked on its journey on 31st
            August, 1989, with a modest inception. With a workforce of just two individuals,
            our operations focused on the upkeep, expansion, and modification of various
            electrical systems. Our expertise encompasses a range of projects, including the
            maintenance, installation, and enhancement of electrical, fire alarm, telephone,
            computer, and switchboard systems.`

const company_des_2 = `In our inaugural year, our team expanded from 2 members to 8, a
            testament to our early growth. Over the following five years, we
            bolstered our staff to 33 dedicated professionals. By 1994, we took a
            decisive step and boldly entered new terrain, taking on innovative
            electrical construction projects. Marking the celebration of our fifth
            anniversary, TOMY HUI ELECTRICAL ENGINEERING achieved the
            status of a private limited entity. Furthermore, we formalized our
            commitment by registering as Goods & Services Tax (GST) traders with
            the Inland Revenue Authority of Singapore (IRAS).`


const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-full">
      <div className="relative bg-home-background bg-cover md:h-1/4"> {/* Background image container */}
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
                About
              </p>
              <p className="mt-5 w-1/2 text-xl text-white ">
                Over 25 years of industry expertise in delivering underground infrastructure solutions
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
            <p className="my-5">
              {company_des_2}
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