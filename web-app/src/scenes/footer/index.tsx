import Logo from "@/assets/Logo_resized.png";
import EmailLink from "@/shared/EmailLink";
import PhoneNumber from "@/shared/PhoneNumber";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-16 text-white">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Got Any Project in Mind?
          We can deliver.
          With our extensive experience and expertise in underground infrastructure solution, 
          we can tackle any challenge and deliver exceptional results. 
          Whether you’re planning a new development or upgrading existing systems, 
          our team is equipped to provide solutions which tailored to your needs.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
          <div>
            <h4 className="font-bold text-2xl">Contact</h4>
            <div className="my-5">
              <span className="my-5">
                Tel:  
                <PhoneNumber color="text-white" phoneNumber="6268 9727"> 6268 9727</PhoneNumber>
              </span>
            </div>
            <p className="my-5 text-white">Fax: 6268 9727</p>
            <div className="my-5">
              <span className="my-5">Administrative Matters: </span>
              <EmailLink className='text-white'> tomyhui_finance@yahoo.com.sg </EmailLink>
            </div>
            <div className="my-5">
              <span className="my-5">Project Inquiries </span>
              <EmailLink className='text-white'> tomyhui_finance@yahoo.com.sg </EmailLink>
            </div>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
          <div>
            <h4 className="font-bold text-2xl">Company</h4>
            <Link to="/about" className="my-5 block">About</Link>
            <Link to="/contact" className="my-5 block">Contact</Link>
            <Link to="/privacy" className="my-5 block">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="mt-16 mx-auto w-full md:flex justify-center">
        <p className="text-center">© Tomy Hui Electrical Engineering Pte. Ltd All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
