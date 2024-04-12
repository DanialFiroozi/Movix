import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

import "/src/assets/css/bootstrap.min.css";
import "/src/assets/css/fontawesome-all.min.css";
import "/src/assets/css/flaticon.css";
import "/src/assets/css/default.css";
import "/src/assets/css/style.css";
import "/src/assets/css/responsive.css";

function Movix() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default Movix;
