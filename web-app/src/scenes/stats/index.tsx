import Counter from "@/shared/Counter"

const Stats = () => {
  return (
    <section className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="text-xl font-extrabold text-red-900 ">
            About us
          </p>
          <p className="my-5 text-2xl font-sans font-bold text-blue-900">
            Meet Tomy Hui Engineering
          </p>
          <p className="text-xl text-black">
            With over 25 years of industry expertise, 
            Tomy Hui is a leader in providing advanced electrical infrastructure solutions. 
            Our extensive expertise in the industry reflects our dedication to excellence and innovation. 
            We specialize in various underground projects, utilizing our in-depth knowledge and technical 
            skills to tackle the complex challenges of electrical infrastructure development.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div className="basis-1/8 md:mt-0 font-bold text-blue-900 text-2xl">
            Years Of Experience
          </div>
          {/* Countup timer */}
          <div className="mt-20 w-full mx-auto text-red-900">
            <Counter targetValue={40} targetDuration={3000} />
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div className="basis-1/8 md:mt-0 font-bold text-blue-900 text-2xl">
            Projects Completed
          </div>
          {/* Countup timer */}
          <div className="mt-20 w-full mx-auto text-red-900">
            <Counter targetValue={25} targetDuration={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
