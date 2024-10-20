import Logo from "@/assets/Logo_resized.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
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
          <p>© Tomy Hui Electrical Engineering Pte. Ltd All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tel: 9XXX XXXX.</p>
          <p className="my-5">Fax: 9XXX XXXX.</p>
          <p className="my-5">Adminstrative Matters: thelectrical@gmail.com</p>
          <p className="my-5">Project Enquiries: thelectrical@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
