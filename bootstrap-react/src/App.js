import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <Footer /> */}


      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>


    </div>
  );
}

export default App;
