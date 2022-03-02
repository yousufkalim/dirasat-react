// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import blogImg from "../../assets/3.png";

export default function YouMayLike({ blogs, loading }) {
  let newblog = [];

  const getblogs = () => {
    newblog = [...blogs];
    return newblog;
  };
  return (
    <div className="articleyouMayLikecontainer">
      <p className="youMayLikeheading">Lisez aussi</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()
            ?.slice(1, 4)
            .map((item, i) => (
              <>
                <Grid item xs={12} sm={4}>
                  <>
                    <div className="blogdiv1">
                      <Link
                        to={`${item._id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <img
                          // src={blogImg}
                          src={process.env.REACT_APP_baseURL + item.blog_images}
                          className="blogdivimg"
                          alt="img"
                        />
                      </Link>
                      <div className="blogdiv1text">
                        <h3 className="blogdiv1heading">
                          {item.blog_title.length > 30
                            ? item.blog_title.substring(0, 30) + "..."
                            : item.blog_title}
                        </h3>
                        <p className="bloddiv1detail">
                          {item?.blog_desc.length > 186
                            ? item?.blog_desc.substring(0, 186) + ".."
                            : item?.blog_desc}
                        </p>
                        <p>
                          <Link
                            to={`${item._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {" "}
                            <span
                              className="seemore"
                              style={{ color: "#E7411B" }}
                            >
                              {" "}
                              Read More
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </>
                </Grid>
              </>
            ))}
        </Grid>
      )}
    </div>
  );
}
