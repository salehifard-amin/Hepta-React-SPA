import Banner from "../../Components/banner";
import WelcomeSection from "../../Components/welcomeSection";
import Layout from "../layout/layout";

export default function HomePage(props) {
  return (
    <Layout>
      <Banner />
      <WelcomeSection
        image={"images/img_1_long-introduction.jpg.webp"}
        title={"Welcome To Our Website"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
      />
    </Layout>
  );
}
