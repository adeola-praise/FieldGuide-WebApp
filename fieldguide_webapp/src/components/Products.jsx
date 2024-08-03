import { homeProduct } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { products } from "../constants";

const Products = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph}`}>PRODUCTS</p>
      <h2 className={styles.heading2}>
        Grow your firm with Fieldguide's AI Advisory & Audit Cloud
      </h2>
      <p className={`${styles.paragraph2} max-w-[550px] mt-3`}>
        Fieldguide increases margins, revenue, and client satisfaction across
        all advisory and audit engagements.
      </p>

      <div className={`grid grid-cols-2 gap-6 mt-10 space-y-3`}>
        {products.map((product) => (
          <div key={product.id} className="space-y-[5px]">
            <h3 className="text-white font-poppins font-medium text-[18px]">
              {product.title}
            </h3>
            <p className={`${styles.paragraph2}`}>{product.content}</p>
          </div>
        ))}
      </div>

      <Button styles="mt-10" content="Explore Products" />
    </div>

    <div className={layout.sectionImg}>
      <img src={homeProduct} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Products;
