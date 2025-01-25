import Counter from "@/shared/Counter"

const HEADER_SIZE="md:text-xl lg:text-2xl"
const TEXT_SIZE="md:text-l lg:text-xl"

const stats_des = `With over 25 years of expertise, Tomy Hui Electrical Engineering Pte Ltd has established a 
                  strong reputation in Singapore’s electrical engineering industry through dedication, quality, and continuous growth. 
                  Our services span the maintenance, installation, and enhancement of electrical systems across diverse sectors, 
                  including fire alarms and communication networks. Committed to exceeding client expectations, we bring reliable 
                  service, high standards, and a client-first approach to every project.`

const Stats = () => {
  return (
    <section className="bg-gray-20 md:py-16 py-4">
      <div className="justify-content mx-auto w-1/2 gap-16 md:flex">
        <div className="md:mt-0 mt-8 basis-1/2 ">
          <p className={`${TEXT_SIZE} font-extrabold text-red-900 text-sm`}>
            About us
          </p>
          <p className={`${HEADER_SIZE} my-5 font-bold text-blue-900 text-sm`}>
            Meet Tomy Hui Engineering
          </p>
          <p className={`${TEXT_SIZE} text-black text-xs`}>
            {stats_des}
          </p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <div className={`${HEADER_SIZE} basis-1/8 md:mt-0 font-bold text-blue-900 text-sm`}>
            Years Of Experience
          </div>
          {/* Countup timer */}
          <div className="md:mt-20 mt-4 w-full mx-auto text-red-900">
            <Counter targetValue={40} targetDuration={3000} />
          </div>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <div className={`${HEADER_SIZE} basis-1/8 md:mt-0 font-bold text-blue-900 text-sm`}>
            Projects Completed
          </div>
          {/* Countup timer */}
          <div className="md:mt-20 mt-4 md:mb-0 mb-8 w-full mx-auto text-red-900 ">
            <Counter targetValue={90} targetDuration={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
