import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Accordion from "./components/state_examples/Accordion";
import RegistrationForm from "./components/state_examples/RegistrationForm";
import Slider from "./components/state_examples/Slider";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      {/* <Accordion />
      <RegistrationForm /> */}
      <Slider />

    {step == 1 && <div></div>}

    </div>
  );
}
