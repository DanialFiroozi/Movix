import SectionTitle from "../../SectionTitle";
import NavTabs from "../../NavTabs";
import Pagination from "../../Pagination";

function MoviesArchive() {
  return (
    <section className="movie-area movie-bg">
      <div className="container">
        <div className="row align-items-center mb-60">
          <div className="col-lg-6">
            <SectionTitle
              subTitle="ONLINE STREAMING"
              title="New Release Movies"
              additionalClass="text-lg-left"
            />
          </div>
          <div className="col-lg-6">
            <NavTabs navTitle={["All", "TV Series", "Movies"]} />
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  );
}

export default MoviesArchive;
