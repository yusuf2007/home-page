import React from "react";
import Img1 from "../images/card-img/img1.png";

const Card = () => {
  return (
    <div className="card shadow-sm">
      <img src={Img1} alt="" />
      <div className="main-info p-2">
        <div className="info d-flex justify-content-between">
          <div className="date d-flex">
            <i class="fa-solid fa-calendar"></i>
            <p className="card-info-text ms-2">October 19, 2021</p>
          </div>
          <div className="view d-flex">
            <i class="fa-solid fa-eye"></i>
            <p className="card-info-text ms-2">1 223</p>
          </div>
        </div>
        <h6>Bank of America</h6>
        <h5>1 200 000 UZS</h5>
      </div>
    </div>
  );
};

export default Card;
