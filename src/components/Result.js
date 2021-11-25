import React, { useState, useEffect } from "react";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
import Grid from "@material-ui/core/Grid";
import Dummy from "../assets/img/dummy.png";
import MainMobile from "../assets/img/mobileform.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import TypeOfCourse from "./TypeOfCourse";
import userimg from "../assets/icons/user.png";
import share from "../assets/icons/share.png";
import Dialog from "./Dialog";
import InvitePopup from "./InvitePopup";
import SharePopup from "./Sharepopup";
const Result = () => {
  let typeOfCourses = ["BTS", "BUT", "CPGE", "Ecole Post-Bac", "Licence"];

  // init
  const updateStore = UpdateStore();
  const { history, user, disc_ans_id, result } = Store();
  const [loading, setLoading] = useState(false);
  const [resultStep, setresultStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [flagforpopup, setFlagforpopup] = useState(false);
  const [openinvitepopup, setOpenInvitepopup] = useState(false);
  const [opensharepopup, setOpenSharepopup] = useState(false);
  useEffect(() => {
    if (resultStep == 1) {
      setFlagforpopup(true);
      setTimeout(() => {
        !flagforpopup && setOpen(true);
      }, 30000);
    }
    if (resultStep == 0) {
      getResult();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultStep]);
  // get Result from api
  let getResult = async () => {
    setLoading(true);
    // let lastAnswerId = history?.find((his) => his.next_question === null);
    let lastAnswerId = history?.find(
      (his) => his.next_question == "61111167760c9840b8d2c9d2"
    );
    const userData = {
      disc_answers: disc_ans_id,
      user_id: user?._id,
      last_answer: lastAnswerId?._id,
    };

    let res = await api("post", "/results", userData);
    if (res) {
      updateStore({ result: res?.data?.result });
    }
    setLoading(false);
  };
  // get courses arrays base on there types
  const getSingleTypeofCourse = (type) => {
    let b = result.courses.filter(
      (course) => type === course?.courseId?.type_of_course
    );
    return b;
  };
  const showResultDetail = () => {
    setresultStep(1);
  };

  return (
    <>
      {resultStep == 0 && (
        <Grid container spacing={2} className="mainresultscreen">
          <Grid item xs={12} sm={4} className="">
            <img src={Dummy} className="dummyimgResult forweb" />
            <img src={MainMobile} className="dummyimgforResult formobile" />
          </Grid>
          <Grid item xs={12} sm={8} className="">
            <div className="resultBox">
              <div className="resultBoxText">
                <h1 className="resultHeading" style={{ textAlign: "center" }}>
                  Bravo ! Tu as répondu à toutes les questions !
                </h1>
                {loading ? (
                  <p className="resultText">
                    <CircularProgress color="inherit" />
                  </p>
                ) : (
                  <p className="resultText">
                    <span style={{ color: "#9198A5" }}>
                      {" "}
                      D'après tes réponses, je pense que ton profil est tourné
                      vers
                    </span>
                    <br />
                    <b>
                      {" "}
                      <span
                        style={{
                          color: "white",
                          fontWeight: "900",
                          wordBreak: "break-word",
                        }}
                      >
                        {loading ? (
                          <div>
                            <CircularProgress color="inherit" />
                          </div>
                        ) : result?.type_of_job ? (
                          result.type_of_job
                        ) : (
                          "Il n’y a actuellement pas de job disponible."
                        )}{" "}
                      </span>
                    </b>{" "}
                    <span style={{ color: "#9198A5" }}>comme par exemple</span>{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "900",
                        wordBreak: "break-word",
                      }}
                    >
                      {" "}
                      {loading
                        ? "loading"
                        : result?.example_of_job
                        ? result.example_of_job
                        : "Currently no example available"}
                    </span>
                  </p>
                )}
                {!loading && (
                  <p className="resultText">
                    <span style={{ color: "#9198A5" }}>
                      Je te propose une liste de voeux Parcoursup qui
                      correspondrait à ton profil.
                    </span>
                  </p>
                )}
              </div>
              <div className="resultButtondiv">
                <button
                  className="resultButton"
                  onClick={() => showResultDetail()}
                  style={{ opacity: loading ? 0.4 : 1 }}
                  disabled={loading}
                >
                  <b> Ma liste Parcoursup</b>
                </button>
              </div>
            </div>
            <div></div>
          </Grid>
        </Grid>
      )}
      {resultStep == 1 && (
        <>
          <Dialog open={open} setOpen={setOpen} />
          <InvitePopup open={openinvitepopup} setOpen={setOpenInvitepopup} />
          <SharePopup open={opensharepopup} setOpen={setOpenSharepopup} />
          <Grid container spacing={1} className="mainresultscreen">
            <Grid item xs={12} sm={12} className="">
              <div>
                {!loading ? (
                  <div>
                    {result.data ? (
                      <div>
                        {result?.data?.map((item) => (
                          <>
                            {item.courses ? (
                              <TypeOfCourse
                                type={item?.type}
                                percentage={item?.percentage}
                                courses={item?.courses}
                              />
                            ) : (
                              <div
                                className=""
                                style={{ margin: "10px", textAlign: "center" }}
                              >
                                <h1> Désolé pas de cours disponible</h1>
                              </div>
                            )}
                          </>
                        ))}
                        <div
                          style={{
                            width: "70%",
                            textAlign: "center",
                            margin: "auto",
                            color: "grey",
                          }}
                        >
                          <p>
                            Tu ne trouves pas ce que tu t’attendais à voir dans
                            cette liste? Pas de panique! C’est sûrement que la
                            formation à laquelle tu penses n’est pas sur
                            Parcousup. Tu seras contacté par la suite pour
                            compléter cette liste avec d’autres fomations
                            “hors-parcoursup” qui pourraient te correspondre!
                          </p>
                        </div>

                        <div className="buttonDiv">
                          <button
                            className="sharebutton"
                            onClick={() => setOpenInvitepopup(true)}
                          >
                            <img src={userimg} />
                            <b className="invitetext">Invite un ami</b>
                          </button>
                          <button
                            className=" partager"
                            onClick={() => setOpenSharepopup(true)}
                          >
                            <img src={share} />
                            <b className="partagertext"> Partager </b>
                          </button>
                        </div>
                        <div className="goback">
                          <button
                            className="goBackbutton"
                            onClick={() => setresultStep(0)}
                          >
                            <b className="">Go Back</b>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className=""
                        style={{ margin: "10px", textAlign: "center" }}
                      >
                        <h1> Désolé pas de cours disponible</h1>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className=""
                    style={{ margin: "10%", textAlign: "center" }}
                  >
                    <h1>Chargement en cours...</h1>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Result;
