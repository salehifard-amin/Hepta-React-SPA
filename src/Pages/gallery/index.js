import PageHero from "../../Components/pageHero";
import { Link } from "react-router-dom";
import "./style.css";
import Layout from "../layout/layout";

export default function Gallery() {
  return (
   <Layout>
        <PageHero
        title={"Gallery"}
        link={
          <Link to="/about-us" className="trans-250ms">
            Colorlib
          </Link>
        }
        image={"url(/images/hero_2.jpg.webp)"}
      />
      <div className="padding-section">
        <div className="image-container row-1">
          <img src="/images/img_1.jpg.webp" />
          <img src="images/img_1.jpg.webp" />
          <img src="/images/img_2.jpg.webp" />
          <img src="/images/img_3.jpg.webp" />
        </div>
        <div className="image-container row-2">
          <img src="/images/imgDestination_1.jpg (1).webp" />
          <img src="/images/imgDestination_2.jpg (1).webp" />
          <img src="/images/imgDestination_4.jpg.webp" />
          <img src="/images/imgDestination_5.jpg.webp" />
        </div>
        <div className="image-container row-3">
          <img src="/images/person_3.jpg.webp" />
          <img src="/images/slider-4.jpg.webp" />
        </div>
        <div className="image-container row-4">
          <img src="/images/person_1.jpg.webp" />
          <img src="/images/person_2.jpg.webp" />
          <img src="/images/person_3.jpg.webp" />
          <img src="/images/slider-5.jpg.webp" />
        </div>
      </div>
   </Layout>
  );
}
