// Init
import React, { useState, useEffect } from "react";
// import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import blogImg from "../../assets/3.png";
import { url } from "../../config";

export default function LatestArticle({ blogs, loading, setLoading }) {
  let newdata = [];

  return (
    <div className="LatestArticlecontainer">
      <p className="LatestArticleheading">Derniers articles</p>
      {loading ? (
        <h1>Chargement en cours...</h1>
      ) : blogs ? (
        <>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Link
                to={{
                  pathname: `/blog/${blogs[0]?._id}`,
                  state: { message: "hello, im a passed message!" },
                }}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                {console.log(
                  "proce",
                  process.env.REACT_APP_baseURL + blogs[0]?.blog_images
                )}
                <div className="latestArticleLeft">
                  <img
                    // src={blogImg}
                    src={url + blogs[0]?.blog_images}
                    className="article1img"
                  />
                  <div className="articledetail">
                    <p>
                      {/* {moment(blogs[0]?.createdAt).format("dddd DD, YYYY")} */}
                      {/* <span className="commentSpan">' 2 Comments</span> */}
                      <br />
                    </p>
                    <h2 className="articleheading">{blogs[0]?.blog_title}</h2>
                    <p className="textdescription1">
                      {blogs[0]?.blog_desc}
                      {blogs[0]?.blog_desc.length > 150
                        ? blogs[0]?.blog_desc.substring(0, 180) + "..."
                        : blogs[0]?.blog_desc}{" "}
                      <span className="seemore"> See more</span>
                    </p>
                    <p className="articleBy">
                      Lire l’article
                      {/* By{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      {blogs[0]?.blog_author?.name.charAt(0).toUpperCase() +
                        blogs[0]?.blog_author?.name.slice(1)}
                    </span> */}
                    </p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              {blogs.slice(1, 4).map((item) => (
                <>
                  <Link
                    to={`blog/${item._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div className="latestArticleRight">
                      {" "}
                      <img
                        // src={blogImg}
                        src={url + item.blog_images}
                        className="article2img"
                      />
                      <div className="articleText">
                        <h3>
                          {item.blog_title.length > 40
                            ? item.blog_title.substring(0, 40) + "..."
                            : item?.blog_title}
                        </h3>
                        <p className="textdescription">
                          {item?.blog_desc.length > 186
                            ? item?.blog_desc.substring(0, 186) + ".."
                            : item?.blog_desc}
                        </p>

                        <p className="author1">
                          Lire l’article
                          {/* By<span style={{ color: "red" }}> Moin Khan</span> */}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </Grid>
          </Grid>
        </>
      ) : (
        <h1>No Blogs available</h1>
      )}
    </div>
  );
}
