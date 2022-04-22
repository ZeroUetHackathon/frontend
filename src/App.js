// components
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
// css
import "./App.css";
import "./styles/font.css";
import { padding } from "@mui/system";
import Footer from "./components/Footer/Footer";

function App() {
  const paddingWidth = (window.innerWidth / 100) * 5;
  return (
    <div
      className="App"
      style={{ width: "100%", minHeight: "100vh", flexDirection: "column" }}
    >
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            maxWidth: "100vw",
            padding: `0px ${paddingWidth}px`,
            backgroundColor: "#E6EBE6",
          }}
        >
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
