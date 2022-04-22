// components
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// css
import "./App.css";
import "./styles/font.css";
import React from "react";

function App() {
  const [inAuth, setInAuth] = useState(false);
  const [inShop, setInShop] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.includes("auth")) {
      setInAuth(true);
    } else {
      setInAuth(false);
    }

    if (pathname.includes("verify-shop")) {
      setInShop(true);
    } else {
      setInShop(false);
    }
  }, []);

  const paddingWidth = (window.innerWidth / 100) * 5;
  return (
    <div
      className="App"
      style={{ width: "100%", minHeight: "100vh", flexDirection: "column" }}
    >
      <BrowserRouter>
        {!inAuth && <Navbar isInShop={inShop} />}
        <div
          style={{
            maxWidth: "100vw",
            padding: !inAuth && `20px ${paddingWidth}px`,
            backgroundColor: "#E6EBE6",
          }}
        >
          <Router />
        </div>
        {!inAuth && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
