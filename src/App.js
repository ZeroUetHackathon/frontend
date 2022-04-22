// components
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
// css
import "./App.css";
import "./styles/font.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100%", minHeight: "100vh", flexDirection: "column" }}
    >
      
       {/* <BrowserRouter>  */}
        {/* <Navbar /> */}
         {/* <Router /> */}
        {/* <Footer/> */}
        <Login/>
        {/* <Signup/>  */}
      {/* </BrowserRouter>  */}
      
    </div>
  );
}

export default App;
