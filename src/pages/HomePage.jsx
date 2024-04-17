import ScrollTop from "../components/ScrollTop";
import JumbotronSection from "../components/Sections/HomeSections/JumbotronSection";
import GallerySection from "../components/Sections/HomeSections/LiveSection";
import PricingSection from "../components/Sections/HomeSections/PricingSection";
import TvSeriesSection from "../components/Sections/HomeSections/TvSeriesSection";
import UpComingMoviesSection from "../components/Sections/HomeSections/UpComingMoviesSection";

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
