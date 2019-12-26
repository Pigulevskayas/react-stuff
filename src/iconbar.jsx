import React from "react";
import "./iconbar.css";
import { Socialbtn } from "./socialbtn";

export function Iconbar({ orientation }) {
  return (
    <div className={`icon-bar ${orientation}`}>
	  <a className="active" href="#"><i className="fa fa-home"></i></a>
	  <a href="#"><i className="fa fa-search"></i></a>
	  <a href="#"><i className="fa fa-envelope"></i></a>
	  <a href="#"><i className="fa fa-globe"></i></a>
	  <a href="#"><i className="fa fa-trash"></i></a>
	  <Socialbtn type="facebook" />
	  <Socialbtn type="twitter" />
	</div>   
  );
}
