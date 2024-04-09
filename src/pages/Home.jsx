import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Link to="/about">About</Link>
      <Link to="/shop">Shopify</Link>
      <Link to="/sign-up">Register</Link>
      <p>Home</p>
      <Footer />
    </div>
  );
}

export default Home;
