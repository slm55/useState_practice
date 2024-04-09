import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Accordion from "./components/state_examples/Accordion";
import RegistrationForm from "./components/state_examples/RegistrationForm";
import Slider from "./components/state_examples/Slider";
import StudentsList from "./components/state_examples/StudentsList";
import Shopify from "./components/shopify/Shopify";
import ToDoList from "./components/state_examples/ToDoList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// "localhost:3000/"
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shopify />} />
        <Route path="/sign-up" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}
