import Logo from "@/assets/Logo.svg";
import EmailLink from "@/shared/EmailLink";
import PhoneNumber from "@/shared/PhoneNumber";
import { Link } from "react-router-dom";

const footer_des = `Got a project in mind? We’re here to help! With our experience in electrical installation and upgrades, 
                    we deliver tailored solutions for new developments or system enhancements. 
                    Call or email us to get started—we’re ready to assist!`

const company_number = "6261 1117"

const Footer = () => {
  return (
    <footer className="bg-neutral-300 md:py-16 py-8 text-black">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-24 w-full max-h-full max-w-full object-contain" />
          <p className="my-5 md:text-xl text-sm">
              {footer_des}
          </p>
        </div>
        <div className="basis-1/4 md:mt-0 ">
          <div>
            <h4 className="font-bold md:text-2xl text-lg">Contact</h4>
            <div className="my-5">
              <span className="my-5 md:text-lg text-sm">
                Tel:  
                <PhoneNumber color="" phoneNumber={company_number}> {company_number}</PhoneNumber>
              </span>
            </div>
            <div className="my-5">
              <span className="my-5 md:text-lg text-sm">Project Inquiries </span>
              <EmailLink className="md:text-lg text-sm"> tomyhui_elect@yahoo.com.sg </EmailLink>
            </div>
          </div>
        </div>
        <div className="basis-1/4 md:mt-0 ">
          <div>
            <h4 className="font-bold md:text-2xl text-lg">Company</h4>
            <Link to="/about" className="my-5 block md:text-lg text-sm">About</Link>
            <Link to="/contact" className="my-5 block md:text-lg text-sm">Contact</Link>
            <Link to="/privacy" className="my-5 block md:text-lg text-sm">Privacy</Link>
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
