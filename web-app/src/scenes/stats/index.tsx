import Counter from "@/shared/Counter"

const stats_des = `With over 25 years of expertise, Tomy Hui Electrical Engineering Pte Ltd has established a 
                  strong reputation in Singapore’s electrical engineering industry through dedication, quality, and continuous growth. 
                  Our services span the maintenance, installation, and enhancement of electrical systems across diverse sectors, 
                  including fire alarms and communication networks. Committed to exceeding client expectations, we bring reliable 
                  service, high standards, and a client-first approach to every project.`

const Stats = () => {
  return (
    <section className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="text-xl font-extrabold text-red-900 ">
            About us
          </p>
          <p className="my-5 text-2xl font-bold text-blue-900">
            Meet Tomy Hui Engineering
          </p>
          <p className="text-xl text-black">
            {stats_des}
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
            <Counter targetValue={90} targetDuration={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
