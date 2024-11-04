import Logo from "@/assets/Logo_resized.png";
import EmailLink from "@/shared/EmailLink";
import PhoneNumber from "@/shared/PhoneNumber";
import { Link } from "react-router-dom";

const footer_des = `Got a project in mind? We’re excited to help! With our extensive experience in electrical installation and upgrades, 
            we’re equipped to tackle any challenge and deliver exceptional results. 
            Whether you're looking to plan a new development or enhance existing systems, 
            our team is here with tailored solutions just for you. Have questions, 
            need a consultation, or ready to kick off your next project? 
            Feel free to reach out to us through any of the following methods—we're here to assist!`

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-16 text-white">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
              {footer_des}
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
            <div className="my-5">
              <span className="my-5">Project Inquiries </span>
              <EmailLink className='text-white'> tomyhui_elect@yahoo.com.sg </EmailLink>
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
