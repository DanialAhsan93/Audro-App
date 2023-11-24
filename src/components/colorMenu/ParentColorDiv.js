import React from "react";
import ColorPallet from "./ColorPallet";
import "./parentdiv.css";
import Infrared from "./Infrared";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedLight from "./RedLight";
const COLORS = [
  {
    id: "",
    color: " #ff0000",
    name: "NIR",
    cname: "Near Infrared",
  },
  {
    id: "red",
    color: "#f11808",
    name: "R",
    cname: "Red Light",
  },
  {
    id: "amber",
    color: " #fc942b",
    name: "A",
    cname: "Amber Light",
  },
  {
    id: "yellow",
    color: "  #f1e103",
    name: "Y",
    cname: "Yellow Light",
  },
  {
    id: "green",
    color: "  #21c202",
    name: "G",
    cname: "Green Light",
  },
];

export default function ParentColorDiv() {
  return (
    <div className="">
      <div className=" d-flex position-relative">
        <div className="color-class-div">
          <div className="color-strip"></div>
          <div className="color-pallet-parent">
            {COLORS.map((val, index) => {
              return (
                <div>
                  <Link
                    to={`${val.id}`}
                    // onClick={() => {
                    //   setValue(index);
                    // }}

                    className="child-divs"
                    key={index}
                    style={{ backgroundColor: `${val.color}` }}
                  >
                    <span style={{ color: `${val.color}` }}>{val.name}</span>
                    <p>{val.cname}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
