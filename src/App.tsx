import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import FAQ from "./pages/FAQ";

function App() {
  return (
    // <BrowserRouter>
    <>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/faq" element={<FAQ/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
