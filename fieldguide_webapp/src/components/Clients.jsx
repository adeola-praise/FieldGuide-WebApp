import demo from "../assets/demo.svg";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} flex-col gap-10 mt-4`}>
    <img src={demo} alt="demo visual" />

    <p className={`${styles.paragraph} text-center`}>
      Top 500 firms trust Fieldguide to improve efficiency, revenue, and client
      experiences.
    </p>

    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mt-4`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[94px] w-[70px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
