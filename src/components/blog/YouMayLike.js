// Init
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import blogImg from "../../assets/3.png";

import { Link } from "react-router-dom";

export default function YouMayLike({ blogs, loading, setLoading }) {
  let newblog = [];

  const getblogs = () => {
    newblog = [...blogs];
    return newblog;
  };

  return (
    <div className="youMayLikecontainer">
      <p className="youMayLikeheading">You may Like this:</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()
            ?.slice(1, 5)
            .map((item) => (
              <>
                <Grid item xs={12} sm={3}>
                  <>
                    <div className="blogdiv1">
                      <Link
                        to={`blog/${item._id}`}
                        params={{ testvalue: "hello" }}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                      >
                        <img
                          // src={blogImg}
                          src={process.env.REACT_APP_baseURL + item.blog_images}
                          className="blogdivimg"
                        />
                      </Link>
                      <div className="blogdiv1text">
                        <h3 className="blogdiv1heading">
                          {item?.blog_title.length > 20
                            ? item?.blog_title.substring(0, 19) + "..."
                            : item?.blog_title}
                        </h3>

                        <p className="bloddiv1detail">
                          {item?.blog_desc.length > 147
                            ? item?.blog_desc.substring(0, 146) + ".."
                            : item?.blog_desc}
                        </p>
                        <p>
                          <Link
                            to={`blog/${item._id}`}
                            params={{ testvalue: "hello" }}
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <span className="seemore"> Read More</span>
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
