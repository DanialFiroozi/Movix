import ScrollTop from "../components/ScrollTop";
import JumbotronSection from "../components/Sections/JumbotronSection";
import GallerySection from "../components/Sections/LiveSection";
import PricingSection from "../components/Sections/PricingSection";
import TvSeriesSection from "../components/Sections/TvSeriesSection";
import UpComingMoviesSection from "../components/Sections/UpComingMoviesSection";

function Home() {
  return (
    <>
      <ScrollTop />
      <JumbotronSection />
      <UpComingMoviesSection />
      <GallerySection />
      <TvSeriesSection />
      <PricingSection />
    </>
  );
}

export default Home;
