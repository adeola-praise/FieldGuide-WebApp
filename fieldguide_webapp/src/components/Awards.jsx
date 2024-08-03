import styles from "../style";
import { awards } from "../constants";
import awardImg from "../assets/award.svg";

const Awards = () => (
  <section className={`${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexCenter} flex-row`}>
      {awards.map((award) => (
        <div
          key={award.id}
          className={`flex-1 flex justify-start items-center flex-row m-4 relative text-center`}
        >
          <img src={awardImg} alt="award" className="w-[60px] h-[50px]" />
          <img
            src={award.year}
            alt={award.id}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ))}
    </div>
    <h3 className="text-white font-poppins text-[24px] font-semibold">
      Technology Innovation Award
    </h3>
    <p className={`${styles.paragraph} text-center`}>
      3x Winner — CPA Practice Advisor
    </p>
  </section>
);

export default Awards;
