import React from "react";

function Footer() {
  return (
    <>
      <div className="px-[5%] py-5 bg-[#454545]">
        <h1 className="text-[#000] font-semibold text-3xl text-center md:pb-0 pb-4 ">
          <span className="text-[#FF8F52]">Flower</span>Shop
        </h1>
        <div className="flex items-center  md:flex-row flex-col justify-center md:text-start text-center gap-2 md:gap-0  md:justify-between text-[#FFF]">
          <div>
            <h2 className="text-xl font-bold pb-3">Address </h2>
            <div className="text-sm font-medium">
              <p>Pallabi Mirpur Dhaka 1216,</p>
              <p>Mirpur shopping complex - Level : 3</p>
              <h2>Web : www.FlowerShop.com</h2>
              <h3>hotline : #44453354 </h3>
              <h4>Avaiable on : Sunday To Thrusday </h4>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold pb-3 text-[#FF8F52]">
              Follow us{" "}
            </h1>
            <div className="flex items-center gap-4 text-center text-xl">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Footer;
