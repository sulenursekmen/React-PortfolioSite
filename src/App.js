import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilen bir asenkron işlem (örneğin, sayfa yüklenmesi gibi)
    const fakeAsyncProcess = () => {
      setTimeout(() => {
        setLoading(false); // Bekleme süresi bittiğinde loading state'ini false yap
      }, 2000); // 2 saniye bekleyelim (istediğiniz süreyi ayarlayabilirsiniz)
    };

    fakeAsyncProcess(); // Asenkron işlemi başlat
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
