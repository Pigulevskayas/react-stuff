import React from "react";
import "./socialbtn.css";

export function Socialbtn({ type }) {
  return (
    <a href="#">
      <i className={`fa fa-${type}`}></i>
    </a>    
  );
}
