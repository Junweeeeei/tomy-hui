
import Footer from '@/scenes/footer'
import { motion } from "framer-motion";
import { SelectedPage }  from "@/shared/types";
// import { ProjectType, SelectedPage }  from "@/shared/types";
import EmailLink from "@/shared/EmailLink";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const privacy_header = `This Privacy Policy (the “Policy”) governs the collection, 
                        use, and disclosure of personal data from individual 
                        customers resulting from the goods and/or services 
                        provided by Tomy Hui Pte Ltd.`

const q1 = `Information We Collect`
const a1_1 = `We may collect the following types of information:`
const a1_2 = `Personal Data: Information that identifies you personally, such as your name, email address, phone number, and mailing address.`
const a1_3 = `Usage Data: Information about how you use our website and services, including your IP address, browser type, pages visited, and the time and date of your visit.`

const q2 = `How We Use Your Information`
const a2_1 = `We use the information we collect for various purposes, including:`
const a2_2 = `To provide, maintain, and improve our services`
const a2_3 = `To process transactions and manage your account`
const a2_4 = `To communicate with you, including sending updates and promotional materials`
const a2_5 = `To analyze usage patterns and improve our website and services`
const a2_6 = `To comply with legal obligations and protect our rights`

const q3 = `Security of Your Information`
const a3_1 = `We take reasonable measures to protect your personal data from loss, theft, and unauthorized access, use, or modification. However, no method of transmission over the internet or method of electronic storage is completely secure.`

const q4 = `Your Rights`
const a4_1 = `Depending on your jurisdiction, you may have the following rights regarding your personal data:`
const a4_2 = `The right to access the personal data we hold about you`
const a4_3 = `The right to request corrections to your personal data`
const a4_4 = `The right to request the deletion of your personal data`

const q5 = `Contact Us`
const a5_1 = `If you have any questions or concerns about this Privacy Policy, please contact us at:`
const a5_2 = `Tomy Hui Pte Ltd`

 


const Privacy = ({ setSelectedPage }: Props) => {
  return (
    <section id="privacy" className="mx-auto min-h-full w-full">
      <div className="relative bg-white bg-cover mt-32"> {/* Background image container */}
      </div>
      <div className="py-10 md:h-5/7 items-center justify-center mb-32">
        <motion.div className="mx-auto w-1/2"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
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
            <p className='font-bold text-5xl text-left'> Privacy Notice</p>
            <p className='my-5'>{privacy_header}</p>
            <p className='my-5 font-bold text-2xl'>1. {q1}</p>
            <ul className='mb-5 text-xl font-semibold'>{a1_1}</ul>
            <li>{a1_2}</li>
            <li>{a1_3}</li>
            <p className='my-5 font-bold text-2xl'>2. {q2}</p>
            <ul className='mb-5 text-xl font-semibold'>{a2_1}</ul>
            <li>{a2_2}</li>
            <li>{a2_3}</li>
            <li>{a2_4}</li>
            <li>{a2_5}</li>
            <li>{a2_6}</li>
            <p className='my-5 font-bold text-2xl'>3. {q3}</p>
            <li>{a3_1}</li>
            <p className='my-5 font-bold text-2xl'>4. {q4}</p>
            <ul className='mb-5 text-xl font-semibold'>{a4_1}</ul>
            <li>{a4_2}</li>
            <li>{a4_3}</li>
            <li>{a4_4}</li>
            <p className='my-5 font-bold text-2xl'>5. {q5}</p>
            <ul className='mb-5 text-xl font-semibold'>{a5_1}</ul>
            <li>{a5_2}</li>
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
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </section>
  )
}

export default Privacy