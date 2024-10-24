import Counter from "@/shared/Counter"

const Stats = () => {
  return (
    <section className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-2/3 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="my-5">
            About us
          </p>
          <p className="my-5 font-sans font-bold text-blue-900">
            Meet Tomy Hui Engineering
          </p>
          <p>
            With over 25 years of industry expertise, 
            Tomy Hui is a leader in delivering cutting-edge underground infrastructure solutions. 
            Our extensive experience in the field underscores our commitment to excellence and innovation. 
            We specialize in a wide range of underground projects, applying our deep knowledge and 
            technical skills to address the complex challenges of infrastructure development.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div className="basis-1/8 md:mt-0 font-bold text-blue-900">
            Years Of Experience
          </div>
          {/* Countup timer */}
          <div className="mt-20 w-full text-left mx-auto">
            <Counter targetValue={40} targetDuration={3000} />
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div className="basis-1/8 md:mt-0 font-bold text-blue-900 ">
            Projects Completed
          </div>
          {/* Countup timer */}
          <div className="mt-20 w-full text-left mx-auto">
            <Counter targetValue={25} targetDuration={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
