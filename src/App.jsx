import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useScrollToTop from "./hooks/useScrollToTop";
import Home from "./pages/Home";
import Woldstadfjoset from "./pages/Woldstadfjoset";
import Markamyra from "./pages/Markamyra";

// Selve sideinnholdet - må ligge inni BrowserRouter for at
// useScrollToTop (som bruker useLocation) skal fungere.
const AppLayout = () => {
  useScrollToTop();

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/woldstadfjoset" element={<Woldstadfjoset />} />
          <Route path="/markamyra" element={<Markamyra />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
