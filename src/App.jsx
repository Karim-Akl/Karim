import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setState(true);
      } else {
        setState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // تنظيف المستمع عند فك التثبيت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up" style={{ opacity: state ? 1 : 0, transition: "opacity 0.3s" }}>
        <button className="icon-angle-double-up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
