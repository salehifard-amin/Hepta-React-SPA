import WelcomeSection from "../../Components/welcomeSection";
import PageHero from "../../Components/pageHero";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";

export default function AboutUs() {
  return (
    <Layout>
      <PageHero
        title="About Us"
        link={
          <Link to="/gallery" className="trans-250ms">
            Colorlib
          </Link>
        }
        image={"url(/images/hero_2.jpg.webp)"}
      />
      <WelcomeSection
        image={"images/hero_1.jpg"}
        title={"Welcome Travel & Tours"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
      />
    </Layout>
  );
}
