// Init
import React, { useState, useEffect } from "react";
import ArticleBody from "../components/article/ArticleBody";
import { useParams } from "react-router-dom";
// import Blog1 from "../assets/img/1.jpeg";
import api from "../api";
import { Store, UpdateStore } from "../StoreContext";
import Header from "../components/Header";
import Contactus from "../utils/Contactus";

export default function Article() {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(0);
  const [statetextforscroll, setStatetextforscroll] = useState("");
  const [loading, setLoading] = useState(false);
  // init
  const updateStore = UpdateStore();
  const { singlBlog, blogs } = Store();
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    getSingleBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  let getSingleBlog = async () => {
    setLoading(true);
    let res = await api("get", `/blogs/${id}`);
    if (res) {
      updateStore({ singlBlog: res?.data });
    }
    setLoading(false);
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Header
        step={step}
        setStep={setStep}
        setActiveStep={setActiveStep}
        setStatetextforscroll={setStatetextforscroll}
      />

      <ArticleBody singlBlog={singlBlog} loading={loading} blogs={blogs} />
      <Contactus />

      {/* <Footer /> */}
    </div>
  );
}
