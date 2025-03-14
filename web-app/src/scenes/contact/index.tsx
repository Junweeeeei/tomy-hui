import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { SelectedPage }  from "@/shared/types";
import GoogleMapComponent from '@/shared/GoogleMapComponent';
import EmailLink from '@/shared/EmailLink';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const contact_des = `Got a project in mind? We’re excited to help! With our extensive experience in electrical installation and upgrades, 
            we’re equipped to tackle any challenge and deliver exceptional results. 
            Whether you're looking to plan a new development or enhance existing systems, 
            our team is here with tailored solutions just for you. Have questions, 
            need a consultation, or ready to kick off your next project? 
            Feel free to reach out to us through any of the following methods—we're here to assist!`


const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="md:h-full">
      <div className="relative bg-home-background bg-cover md:min-h-400px min-h-[400px] md:min flex items-center justify-center"> {/* Background image container */}
        {/* Gradient Overlay (applies only to this container) */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="mx-auto w-1/2 md:h-full items-center justify-center md:flex"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
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
              <p className="w-1/2 md:mt-40 mt-10 md:text-5xl text-2xl font-extrabold text-white">
                Contact
              </p>
              <p className="mt-5 w-full md:text-xl text-lg text-white ">
                Contact Our Team Of Experts For Engineering Solutions
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
            <p className='font-bold md:text-5xl text-3xl'>Contact Details</p>
            <p className="my-5 md:text-lg text-sm">
              {contact_des}
            </p>
            <div className='my-5 flex md:flex-row md:gap-20 flex-col gap-10'>
              <div>
                <p className='text-xl font-bold'>
                Office Address:
                </p>
                <div className='md:text-xl text-sm'>
                  <p className='mt-5 md:text-xl text-sm font-bold font-sahitya'>
                    Tomy Hui Electrical Engineering Pte. Ltd.
                  </p>
                  <p>7 Toh Guan Road East #03-03</p>
                  <p>Alpha Industrial Building</p>
                  <p>Singapore 608599</p>
                </div>
                <div className='mt-5 flex'>
                  <span className="md:text-lg text-sm font-bold">Telephone:</span>
                  <a href="tel:+62611117" className="md:text-lg text-sm text-blue-500 hover:underline ml-1">
                    6261 1117
                  </a>
                </div>
                <div>
                  <span className="md:text-lg text-sm font-bold">Project Enquiries: </span>
                  <EmailLink className='md:text-lg text-sm text-blue-500'> tomyhui_elect@yahoo.com.sg </EmailLink>
                </div>
              </div>
              <div className='md:text-xl text-sm'>
                <p className='md:text-xl text-lg font-bold'>
                  Office Operating Hours:
                </p>
                <p className='mt-5'>
                  Monday – Friday: 8:30 AM – 5:30 PM
                </p>
                <p>
                  Saturday, Sunday & Public Holiday: Closed
                </p>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
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
            <p className='font-bold md:text-5xl text-3xl'> Our Location</p>
            <div className='my-5 md:h-96 md:pr-40'>
              <GoogleMapComponent />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact