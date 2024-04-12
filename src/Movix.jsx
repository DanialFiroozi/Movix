import { Routes, Route } from "react-router-dom";

import FetchMoviesContext from "./context/FetchMoviesContext";

import Layout from "./hoc/Layout";
import Home from "./pages/Home";

import "/src/assets/css/bootstrap.min.css";
import "/src/assets/css/fontawesome-all.min.css";
import "/src/assets/css/flaticon.css";
import "/src/assets/css/default.css";
import "/src/assets/css/style.css";
import "/src/assets/css/responsive.css";

function Movix() {
  return (
    <FetchMoviesContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </FetchMoviesContext>
  );
}

export default Movix;
