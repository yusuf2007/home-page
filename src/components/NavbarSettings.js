import React from "react";
import "../css/App.css";
import Admin from "../images/Admin.png";
import Mail from "../images/mail.png";
import Bell from "../images/bell.png";
import Star from "../images/star.png";

const NavbarSettings = (props) => {
  function dropdown1() {
    document.querySelector(".sub-menu-1").style.display = "block";
    document.querySelector(".fa-user-o").style.backgroundColor = "white";
    document.querySelector(".fa-user-o").style.color = "black";
  }

  function removeDropdown1() {
    document.querySelector(".sub-menu-1").style.display = "none";
    document.querySelector(".fa-user-o").style.backgroundColor = "transparent";
    document.querySelector(".fa-user-o").style.color = "white";
    document.querySelector(".fa-user-o").style.border = "none";
  }

  function dropdown2() {
    document.querySelector(".sub-menu-2").style.display = "block";
    document.querySelector(".fa-envelope-o").style.backgroundColor = "white";
    document.querySelector(".fa-envelope-o").style.color = "black";
  }

  function removeDropdown2() {
    document.querySelector(".sub-menu-2").style.display = "none";
    document.querySelector(".fa-envelope-o").style.backgroundColor =
      "transparent";
    document.querySelector(".fa-envelope-o").style.color = "white";
    document.querySelector(".fa-envelope-o").style.border = "none";
  }

  function dropdown3() {
    document.querySelector(".sub-menu-3").style.display = "block";
    document.querySelector(".fa-bell-o").style.backgroundColor = "white";
    document.querySelector(".fa-bell-o").style.color = "black";
  }

  function removeDropdown3() {
    document.querySelector(".sub-menu-3").style.display = "none";
    document.querySelector(".fa-bell-o").style.backgroundColor = "transparent";
    document.querySelector(".fa-bell-o").style.color = "white";
    document.querySelector(".fa-bell-o").style.border = "none";
  }

  function dropdown4() {
    document.querySelector(".sub-menu-4").style.display = "block";
    document.querySelector(".fa-star-o").style.backgroundColor = "white";
    document.querySelector(".fa-star-o").style.color = "black";
  }

  function removeDropdown4() {
    document.querySelector(".sub-menu-4").style.display = "none";
    document.querySelector(".fa-star-o").style.backgroundColor = "transparent";
    document.querySelector(".fa-star-o").style.color = "white";
    document.querySelector(".fa-star-o").style.border = "none";
  }

  return (
    <div className="right-section d-flex justify-content-around">
      <div className="icons d-flex justify-content-evenly align-items-center w-75">
        <ul className="d-flex align-items-center justify-content-evenly flex-start w-100 p-0 m-0 ul">
          <li>
            <a onClick={dropdown1} href="#">
              <i className="fa fa-user-o p-2" aria-hidden="true"></i>
            </a>
            <div onClick={removeDropdown1} className="sub-menu-1">
              <div className="d-flex justify-content-center align-items-center p-3 user-settings">
                <div>
                  <img className="img" src={Admin} alt="" />
                </div>
                <div>
                  <h6 className="m-0 text-light">Ixtiyorjon Xakimov</h6>
                  <p className="m-0 text-light">ixtiyorjonxakimmov@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <i className="fa fa-user-o user-icon" aria-hidden="true"></i>
                <p className="user-text m-0">Mening hisobim</p>
              </div>
              <div className="d-flex align-items-center p-3 exit-button">
                <i class="fa fa-sign-out sign-out-icon" aria-hidden="true"></i>
                <p className="user-text m-0">Tizimdan chiqish</p>
              </div>
            </div>
          </li>
          <li>
            <a onClick={dropdown2} href="#">
              <i className="fa fa-envelope-o p-2" aria-hidden="true"></i>
            </a>
            <div onClick={removeDropdown2} className="sub-menu-2">
              <div className="mail-1 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Mail} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-2 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Mail} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-3 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Mail} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-4 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Mail} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a onClick={dropdown3} href="#">
              <i className="fa fa-bell-o  p-2" aria-hidden="true"></i>
            </a>
            <div onClick={removeDropdown3} className="sub-menu-3">
              <div className="mail-1 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Bell} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-2 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Bell} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-3 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Bell} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
              <div className="mail-4 d-flex p-3">
                <div className="mail-img d-flex align-items-center">
                  <img src={Bell} alt="" />
                </div>
                <div className="mail-text">
                  <h6 className="mail-main-text">We’re blasting off 🚀</h6>
                  <p className="mail-small-text m-0">
                    OneSignal announces 500% growth, delivering 2 trillion
                    messages annually.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a onClick={dropdown4} href="#">
              <i className="fa fa-star-o p-2" aria-hidden="true"></i>
            </a>
            <div onClick={removeDropdown4} className="sub-menu-4">
              <div className="star-1 d-flex p-3">
                <div className="star-img d-flex align-items-center">
                  <img src={Star} alt="" />
                </div>
                <div className="star-text">
                  <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                  <p className="star-small-text m-0">
                    joylashgan 5 xonali uy sotiladi
                  </p>
                </div>
              </div>
              <div className="star-2 d-flex p-3">
                <div className="star-img d-flex align-items-center">
                  <img src={Star} alt="" />
                </div>
                <div className="star-text">
                  <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                  <p className="star-small-text m-0">
                    joylashgan 5 xonali uy sotiladi
                  </p>
                </div>
              </div>
              <div className="star-3 d-flex p-3">
                <div className="star-img d-flex align-items-center">
                  <img src={Star} alt="" />
                </div>
                <div className="star-text">
                  <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                  <p className="star-small-text m-0">
                    joylashgan 5 xonali uy sotiladi
                  </p>
                </div>
              </div>
              <div className="star-4 d-flex p-3">
                <div className="star-img d-flex align-items-center">
                  <img src={Star} alt="" />
                </div>
                <div className="star-text">
                  <h6 className="star-main-text">Uy sotiladi 4 sotixda</h6>
                  <p className="star-small-text m-0">
                    joylashgan 5 xonali uy sotiladi
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn-setting-2 p-1">E’lon berish</button>
      </div>
    </div>
  );
};

export default NavbarSettings;
