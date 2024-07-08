import { useState } from "react";
import "./header.css";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("val") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <div id="home"></div>


        <button style={{ display: "flex ",flexDirection:'row-reverse' }}
          onClick={() => {
            setshowModal(true);
          }}
          className="men icon-chevron-down flex"
        > Menu</button>


      {/* <div /> */}

      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Portfolio</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        className="mode flex"
        onClick={() => {
          // send value
          localStorage.setItem("val", theme === "dark" ? "light" : "dark");
          // get value
          setTheme(localStorage.getItem("val"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-stars" style={{ fontSize: "1.5rem" }}>
            {" "}
          </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-x"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Portfolio</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
