import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./poert1.jpg";
import Logo2 from "./port2.png";
import Logo3 from "./port3.png";
import "./About.css";
import { useEffect } from "react";
import $ from "jquery";

export default function About() {
  useEffect(() => {
    $(".rounded-4").click((eventInfo) => {
      $("#lightBoxContainer").addClass("d-flex");
      $("#lightBoxContainer").removeClass("d-none");
      let src = $(eventInfo.target).attr("src");
      $(".main").attr("src", src);
      $("#closeSlider").click(() => {
        $("#lightBoxContainer").addClass("d-none");
      });
    });
  }, []);

  return (
    <>
      <section className="portfolio">
        <h1 className="text-center">About COMPONENT</h1>
        <div className=" d-flex justify-content-center mb-3">
          <div className="lineContact"></div>
          <i
            _ngcontent-kex-c6=""
            className="fa-solid fa-star contact-icon mx-2 fs-5"
          ></i>
          <div className="lineContact"></div>
        </div>
        <div className="container mb-5">
          <div className="row gy-5">
            <div className="col-md-4  position-relative">
              <img src={Logo} alt="" className=" rounded-4 w-100" />
            </div>
            <div className="col-md-4 position-relative">
              <img src={Logo2} alt="" className=" rounded-4  w-100" />
            </div>
            <div className="col-md-4 position-relative">
              <img src={Logo3} alt="" className=" rounded-4  w-100" />
            </div>
            <div className="col-md-4 position-relative">
              <img src={Logo} alt="" className="rounded-4  w-100" />
            </div>
            <div className="col-md-4 position-relative">
              <img src={Logo2} alt="" className=" rounded-4  w-100" />
            </div>
            <div className="col-md-4 position-relative">
              <img src={Logo3} alt="" className=" rounded-4  w-100" />
            </div>
          </div>
          <div
            id="lightBoxContainer"
            className=" d-none justify-content-center align-items-center "
          >
            <img src={Logo} className=" position-relative main " alt="" />
            <div
              id="lightBox"
              className="d-flex justify-content-between align-items-center position-absolute"
            >
              <i
                id="closeSlider"
                className="fa-solid fa-circle-xmark text-white fs-4 position-absolute p-3"
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
