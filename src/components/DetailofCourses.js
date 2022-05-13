//init
import React from "react";
import "../css/card.css";
import Grid from "@material-ui/core/Grid";
import selectivity from "../assets/icons/selectivity.png";
import cost from "../assets/icons/cost.png";
import language from "../assets/icons/language.png";
import duration from "../assets/icons/duration.png";
import proximate from "../assets/icons/proximate.png";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

//Component
function DetailofCourses({ courses, open, setOpen, user }) {
  console.log("courses",courses)
  return (
    <>
      {courses?.length >= 1 ? (
        courses?.map((course) => (
          <Grid container spacing={2} className="courseDetail">
            <Grid item xs={12} sm={5}>
              <p>
                {course?.dcourseId?.Establishment} -{" "}
                <span>{course?.dcourseId?.City+" - "+course?.dcourseId?.wilaya} </span>
                {/* {user?.institute} */}
              </p>

              <h2> {course?.dcourseId?.Speciality}</h2>
            </Grid>
            <Grid item xs={12} sm={7} className="ratingGrid">
              {/* <div className="selectivitydiv">
                <img src={selectivity} alt="selectivity" />
                <p className="textonmobile">Séléctivité</p>
                <div>
                  <b style={{ fontSize: "15px" }}>
                    {course?.selectivityrating
                      ? course?.selectivityrating[0] + "/5"
                      : course?.courseId?.selectivity[0]
                      ? course?.courseId?.selectivity[0] + "/5"
                      : "N/A"}
                  </b>
                </div>
              </div> */}
              <div className="costRating">
                <img src={cost} alt="coût" />
                <p className="textonmobile">Coût</p>
                <div>
                  {course?.dcourseId?.cost ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.cost[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
              <div className="languageRating">
                <img src={language} alt="langue" />
                <p className="textonmobile">Langue</p>
                <div>
                  {" "}
                  {course?.dcourseId?.languagestar ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.languagestar[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
              <div>
                <img src={duration} alt="durée" />
                <p className="textonmobile">Durée</p>
                <div>
                  {course?.dcourseId?.duration ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.duration[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
              {/* <div>
                <img src={proximate} alt="proximaté" />
                <p className="textonmobile">Proximité</p>
                <div>
                  {course?.distancerating ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.distancerating >= item) {
                          return (
                            <StarIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div> */}
            </Grid>
          </Grid>
        ))
      ) : (
        <>
          <h4>Désolé pas de cours disponible</h4>
        </>
      )}
    </>
  );
}

export default DetailofCourses;
