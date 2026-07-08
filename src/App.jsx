import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Woldstadfjoset from "./pages/Woldstadfjoset";
import Markamyra from "./pages/Markamyra";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
