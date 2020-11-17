import "./field-item.css";
import React from "react";

import { connect } from "react-redux";
const FieldItem = ({ onItemCompare, getCheck, clear, item, clicks }) => {
  const styles = {
    close: {
      backgroundColor: "white",
      border: "1px solid black",
    },
    open: {
      border: "1px solid black",
      backgroundColor: item.color,
      transformStyle: "preserve-3d",
      animation: "anim 0.4s 1 linear",
      animationDirection: "normal",
    },
  };
  const handlerClick = () => {
    onItemCompare();
    if (clicks === 2) {
     setTimeout(() => {
        getCheck();
        clear();
      }, 600);
    } 
  };

  return (
    <div
      style={item.isClose ? styles.close : styles.open}
      className="field-item"
      onClick={handlerClick}
    ></div>
  );
};

const mapStateToProps = ({ clicks }) => {
  return {
    clicks: clicks,
  };
};

export default connect(mapStateToProps, null)(FieldItem);
