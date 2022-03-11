// Init
import React, { useState, useEffect } from "react";
import BlogBodyimg from "../../assets/img/blogcover1.png";
import LatestArticle from "./LatestArticle";
import YouMayLike from "./YouMayLike";
import api from "../../api";
import { Store, UpdateStore } from "../../StoreContext";
import Carousel from "react-material-ui-carousel";
import { url } from "../../config";
import { Link } from "react-router-dom";

export default function BlogBody() {
  const [loading, setLoading] = useState(false);
  // init
  const updateStore = UpdateStore();
  const { blogs } = Store();
  useEffect(() => {
    // get blogs
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let getBlogs = async () => {
    setLoading(true);

    let res = await api("get", "/blogs");
    if (res) {
      updateStore({ blogs: res?.data });
    }
    setLoading(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("blogs are", blogs);
  return (
    <>
      {loading ? (
        "Chargement en cours..."
      ) : (
        <>
          <div className="BlogBodycontainer">
            <Carousel
              className="topcoursecarousal"
              indicators={false}
              interval={3000}
              autoPlay={true}
              animation={"fade"}
            >
              {blogs?.map((item, i) => (
                <>
                  <Link
                    to={`blog/${item._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      src={url + item.blog_images}
                      className="BlogbodyImage"
                    />
                    <div className="BlogtextonImg">
                      <h1 className="BlogtextimgH1"> NOTRE BLOG</h1>
                      {/* <p className="BlogtextonImgP">Tag Line Here</p> */}
                    </div>
                  </Link>
                  <items key={i} item={item} />
                </>
              ))}
            </Carousel>
          </div>
        </>
      )}

      <LatestArticle blogs={blogs} loading={loading} setLoading={setLoading} />
      <YouMayLike blogs={blogs} loading={loading} setLoading={setLoading} />
    </>
  );
}

//  <div className="BlogBodycontainer">
//         <img src={BlogBodyimg} className="BlogbodyImage" />
//         <div className="BlogtextonImg">
//           {/* <h1 className="BlogtextimgH1">Blog</h1> */}
//           {/* <p className="BlogtextonImgP">Tag Line Here</p> */}
//         </div>
//       </div>
