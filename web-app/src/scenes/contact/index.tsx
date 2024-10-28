import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { SelectedPage }  from "@/shared/types";
import GoogleMapComponent from '@/shared/GoogleMapComponent';
import EmailLink from '@/shared/EmailLink';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const contact_des = `Thank you for your interest in our engineering services. 
                    Whether you have a question, seek a consultation, 
                    or are ready to begin your next project, 
                    our team of experts is ready to help. 
                    Feel free to contact us through any of the following methods:`


const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-full">
      <div className="relative bg-home-background bg-cover md:h-1/4"> {/* Background image container */}
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
              <p className="mt-40 w-1/2 text-5xl font-extrabold text-white ">
                Contact
              </p>
              <p className="mt-5 w-1/2 text-xl text-white ">
                Contact Our Team of Experts for Engineering Solutions.
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
            <p className='font-bold text-5xl'>Contact Details</p>
            <p className="my-5">
              {contact_des}
            </p>
            <div className='my-5 flex gap-20'>
              <div>
                <p className='text-xl font-bold'>
                Office Address:
                </p>
                <div>
                  <p className='mt-5 text-xl font-bold'>
                    Tomy Hui Electrical Engineering Pte. Ltd.
                  </p>
                  <p>7 Toh Guan Road East #03-03</p>
                  <p>Alpha Industrial Building</p>
                  <p>Singapore 608599</p>
                </div>
                <p className='mt-5'>If you wish to contact us for more information, please write to us or call us.</p>
                <div className='mt-5 flex'>
                  <span className="text-lg font-bold">Telephone:</span>
                  <a href="tel:+62663369" className="text-lg text-blue-500 hover:underline ml-1">
                    6261 1117
                  </a>
                </div>
                <div>
                  <span className="text-lg font-bold">Fax:</span>
                  <a href="tel:+62663369" className="text-lg text-blue-500 hover:underline ml-1">
                    6268 9727
                  </a>
                </div>
                <div>
                  <span className="text-lg font-bold">Administrative Matters: </span>
                  <EmailLink className='text-blue-500 text-lg'> tomyhui_finance@yahoo.com.sg </EmailLink>
                </div>
                <div>
                  <span className="text-lg font-bold">Project Inquiries: </span>
                  <EmailLink className='text-blue-500 text-lg'> tomyhui_finance@yahoo.com.sg </EmailLink>
                </div>
              </div>
              <div>
                <p className='text-xl font-bold'>
                  Business Hours:
                </p>
                <p className='mt-5'>
                  Monday – Friday: 9:00 AM – 6:00 PM
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
            <p className='font-bold text-5xl'> Our Location</p>
            <div className='my-5'>
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