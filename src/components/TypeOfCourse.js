import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DetailofCourses from "../components/DetailofCourses";
import { Store, UpdateStore } from "../StoreContext";
import search from "../assets/icons/search.png";
import showhide from "../assets/icons/showhide.png";
import hide from "../assets/icons/hide.png";
import * as html2canvas from "html2canvas";

const TypeOfCourse = ({ type, percentage, courses }) => {
  const updateStore = UpdateStore();
  const [showDetail, setShowDetail] = useState(true);
  const { deatilResult } = Store();
  const [data, setdata] = useState();

  useEffect(() => {
    console.log("deatilResult", deatilResult);

    getresultpageforPdf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deatilResult]);
  const getresultpageforPdf = () => {
    let domElement = document.getElementById(type);
    // console.log("domElement", domElement);

    html2canvas(domElement, {
      // ignoreElements: function (element) {
      //   if ("resultButtondiv" === element.id) {
      //     return true;
      //   }
      // },
      backgroundColor: "#282b38",
    }).then((canvas) => {
      updateStore({ deatilResult: { ...deatilResult, [type]: canvas } });
      // document.body.appendChild(canvas);
      setShowDetail(false);
    });
  };

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
      return "linear-gradient(90deg, rgba(240,244,99,1) 0%, rgba(247,232,106,1) 50%, rgba(232,236,100,1) 100%)";
    } else if (percentage >= 3 && percentage <= 7) {
      // orange
      return "linear-gradient(90deg, rgba(246,185,8,1) 0%, rgba(242,182,7,1) 50%, rgba(237,174,5,1) 100%)";
    } else {
      // red
      return "linear-gradient(90deg, rgba(246,161,8,1) 0%, rgba(242,162,7,1) 50%, rgba(237,162,5,1) 100%)";
    }
  };

  const onButtonwholeClick = async (e) => {
    e.stopPropagation();
    // var pdf = new jsPDF();
    let domElement = document.getElementById(type);
    // console.log("domElement typeOfCourses", domElement);

    html2canvas(domElement).then((canvas) => {
      // console.log("CAN ASFAND VAS result", canvas);
      // pdf.setFillColor(52, 55, 71);
      // pdf.rect(0, 0, 350, 350, "F");
      // pdf.addImage(logo, "PNG", 75, 5, 60, 25);
      // pdf.addImage(MainCharacter, "PNG", 30, 35, 150, 130);
      // pdf.save("download.pdf");
      // document.body.appendChild(canvas);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="typeOfCourses" id={type}>
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
            {/* {showDetail && (
              <button onClick={(e) => onButtonwholeClick(e, type)}>
                Download whole PDF
              </button>
            )} */}
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
          <DetailofCourses
            courses={courses}
            open={open}
            setOpen={setOpen}
            id="detailofone"
          />
        )}
      </div>
    </>
  );
};

export default TypeOfCourse;
