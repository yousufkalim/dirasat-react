import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DetailofCourses from "../components/DetailofCourses";
import search from "../assets/icons/search.png";
import showhide from "../assets/icons/showhide.png";
import hide from "../assets/icons/hide.png";

const TypeOfCourse = ({ type, percentage, courses }) => {
  const [showDetail, setShowDetail] = useState(false);

  const [open, setOpen] = useState(false);
  const getPercentageColor = (percentage) => {
    if (percentage >= 41) {
      // green
      return "linear-gradient(180deg, #84FF70 -54%, #2DA070 100%)";
    } else if (percentage >= 24 && percentage <= 40) {
      // light green
      return "linear-gradient(rgb(40 255 106) 0%, rgb(31 223 212) 100%)";
    } else if (percentage >= 8 && percentage <= 23) {
      // yellow
      return "linear-gradient(rgb(219 187 103) 0%, rgb(195 179 94) 100%)";
    } else if (percentage >= 3 && percentage <= 7) {
      // orange
      return "linear-gradient(rgb(255 183 51) 0%, rgb(189 165 37) 100%)";
    } else {
      // red
      return "#c98405";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="typeOfCourses">
        <Grid
          container
          spacing={3}
          style={{ cursor: "pointer" }}
          className="coursediv"
          onClick={() => {
            setShowDetail(!showDetail);
          }}
        >
          <Grid item xs={4} sm={8} className="courseType">
            {" "}
            {type}
          </Grid>
          <Grid
            item
            xs={5}
            sm={3}
            style={{ background: `${getPercentageColor(percentage)}` }}
            className="percentageGrid"
          >
            <img src={search} className="searchimg" />
            <b style={{ marginTop: "5px" }}>Compatible à {percentage}%</b>
          </Grid>
          <Grid item xs={1} sm={1} className="showhide">
            {showDetail ? (
              <img src={hide} className="showhideIcon" />
            ) : (
              <img src={showhide} className="showhideIcon" />
            )}{" "}
          </Grid>
        </Grid>
        {showDetail && (
          <DetailofCourses courses={courses} open={open} setOpen={setOpen} />
        )}
      </div>
    </>
  );
};

export default TypeOfCourse;
