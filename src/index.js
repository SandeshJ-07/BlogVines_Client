import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Stylesheets
import "../src/assets/stylesheet/index.css";
import "../src/assets/stylesheet/style.css";

// Pages
import Landing from "./Pages/Landing";
import AboutPage from "./Pages/About";
import Discover from "./Pages/Discover";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import ErrorPage from "./Pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={ <Discover/> }/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/terms" element ={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
