import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import backgroundImage from "./assets/homepage.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simüle edilen bir asenkron işlem (örneğin, resim yüklenmesi gibi)
    const fakeAsyncImageLoad = () => {
      const image = new Image();
      image.src = backgroundImage;

      image.onload = () => {
        // Resim başarıyla yüklendiğinde loader'ı gizle
        setLoading(false);
        setImageLoaded(true);
      };

      image.onerror = () => {
        // Resim yüklenirken bir hata oluştuğunda loader'ı gizle
        setLoading(false);
        setImageLoaded(true);
      };
    };

    fakeAsyncImageLoad(); // Asenkron resim yükleme işlemi başlat
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          {imageLoaded && (

            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home backgroundImage={backgroundImage} />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
