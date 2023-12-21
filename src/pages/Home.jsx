import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Widget from "../Components/Widget";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Home() {
  const { authenticated } = useSelector((s) => s.auth);
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_body container">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Home;
