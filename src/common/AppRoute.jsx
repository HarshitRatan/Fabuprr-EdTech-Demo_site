import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import DashBoard from "../page/DashBoard";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashBoard" element={<DashBoard />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoute;
