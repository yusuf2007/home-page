import React from "react";
import Img1 from "../images/big-card-img/img1.png";

const BigCard = () => {
  return (
    <div className="big-card shadow-sm mt-5">
      <img className="w-100" src={Img1} alt="" />
      <div className="main-info p-2">
        <h5 className="my-3">Savdo markazi bitkazish sanasi: 2025 yil iyul </h5>
        <p className="my-2">
          Bozor yaqinida qurilayotgan binodan savdo o‘rinlari sotuvi
          boshlanganini ma’lum qilamiz.{" "}
        </p>
        <div className="info d-flex mt-3">
          <div className="date d-flex">
            <i class="fa-solid fa-calendar"></i>
            <p className="card-info-text ms-2 me-4">October 30, 2021</p>
          </div>
          <div className="view d-flex">
            <i class="fa-solid fa-eye"></i>
            <p className="card-info-text ms-2">856</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
