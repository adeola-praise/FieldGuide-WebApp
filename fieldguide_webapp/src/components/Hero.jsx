import styles from "../style";
import arrow from "../assets/arrow.svg";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`${styles.flexCenter} flex-col sm:mb-20 mb-6 gap-10 mt-14`}
  >
    <div className="flex flex-row items-center py-[6px] px-3 bg-red-600 rounded-[20px] mb-2">
      <p className="text-white font-poppins text-[14px]">
        Learn How AI Can Help Alleviate the CPA Talent Crisis
      </p>
      <div
        className={`${styles.flexCenter} w-[33px] h-[24px] rounded-[20px] bg-blue-300 ml-2`}
      >
        <img src={arrow} alt="arrow" className="w-[15px] h-[15px]" />
      </div>
    </div>

    <div className={`${styles.flexCenter} flex-col gap-7`}>
      <h1 className="font-poppins font-bold ss:text-[72px] text-[52px] text-white text-center">
        The<span className="font-medium italic">future</span> of Trust.
        <br />
        Powered by Fieldguide.
      </h1>

      <p className={`${styles.paragraph} text-center`}>
        Fieldguide's AI Advisory & Audit Cloud saves time, increases margins,
        <br /> and improves client satisfaction.
      </p>

      <GetStarted />
    </div>
  </section>
);

export default Hero;
