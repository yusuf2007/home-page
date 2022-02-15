import React from "react";
import Searchbar2 from "./Searchbar2.js";
import Card from "./Card.js";
import BigCard from "./BigCard.js";
import Home from "../images/home1.png";
import Steering from "../images/steering-wheel.png";
import Banner from "../images/banner.png";

const Main = (props) => {
  return (
    <>
      <div className="main d-flex">
        <div className="left">
          <div className="top-filter rounded-2 shadow-sm">
            <div className="fliter d-flex justify-content-between align-items-center p-3">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Home} alt="home" />
                <h4 className="main-text m-0">Ko‘chmas mulk</h4>
              </div>
              <i class="fa-solid fa-angle-up"></i>
            </div>
            <div className="second-filter d-flex flex-column">
              <div className="card-1 p-2 d-flex justify-content-between">
                <h6 className="text-light m-0">Xususiy uylar</h6>
                <h6 className="text-light m-0">(592,268)</h6>
              </div>
              <div className="card-2 p-2  d-flex justify-content-between">
                <h6 className="text-secondary m-0">Kvartiralar</h6>
                <h6 className="text-secondary m-0">(121,652)</h6>
              </div>
              <div className="card-3 p-2  d-flex justify-content-between">
                <h6 className="text-secondary m-0">Yer uchastkasi</h6>
                <h6 className="text-secondary m-0">(199,047)</h6>
              </div>
              <div className="card-4 p-2  d-flex justify-content-between">
                <h6 className="text-secondary m-0">Tijorat binolari</h6>
                <h6 className="text-secondary m-0">(602)</h6>
              </div>
              <div className="card-5 p-2  d-flex justify-content-between">
                <h6 className="text-secondary m-0">Garajlar / turargohlar</h6>
                <h6 className="text-secondary m-0">(10,962)</h6>
              </div>
            </div>
          </div>
          <div className="bottom-filter">
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3 mb-2">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className="main-card-1 d-flex justify-content-between align-items-center shadow-sm rounded-2 p-3">
              <div className="d-flex align-items-center">
                <img className="me-2" src={Steering} alt="" />
                <h5 className="m-0">Transport</h5>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
        <div className="right w-100 ms-3">
          <Searchbar2 />
          <img className="w-100 mt-4" src={Banner} alt="" />
          <h1 className="my-4">Tavsiya etilgan e’lonlar</h1>
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="right-bottom mb-4">
            <div className="right-bottom-info d-flex justify-content-between align-items-center pb-3 my-5">
              <h1 className="m-0">Loyihalar</h1>
              <a className="text-decoration-none" href="#">
                Ko‘proq
              </a>
            </div>
            <div className="row">
              <div className="col">
                <BigCard />
              </div>
              <div className="col">
                <BigCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
