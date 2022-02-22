// Init
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BlogBody from "../components/blog/BlogBody";

export default function Blog() {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(0);
  const [statetextforscroll, setStatetextforscroll] = useState("");
  return (
    <div style={{}}>
      <Header
        step={step}
        setStep={setStep}
        setActiveStep={setActiveStep}
        setStatetextforscroll={setStatetextforscroll}
      />

      <BlogBody />
      <Footer />
    </div>
  );
}
