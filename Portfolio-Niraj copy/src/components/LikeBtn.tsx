import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Like() {
  const uri = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, upadteCounter] = useState(0);
  const [btnState, upadteBtn] = useState(true);
  const [likeClass, updateClass] = useState("far fa-heart");

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        updateLike(res.data.data);
        upadteBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clickHandler() {
    updateClass("far fa-heart animate-like");
    updateLike(numLike + 1);
    upadteCounter(likeCounter + 1);

    if (likeCounter > 3) {
      upadteBtn(true);
    }

    axios
      .post(postUri)
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateClass("far fa-heart");
    }, 500);
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Nav.Item className="like-item">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;
