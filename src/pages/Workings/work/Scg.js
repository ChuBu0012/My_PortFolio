import PostScg from "../showwork/SwimCap for blind.png";
import Poster from "../showwork/Poster SwimCap for blind (1).jpg";
import Final from "../showwork/finalscb.jpg";
import CertSCG from "../showwork/CertSCG.jpg";

import React from "react";

function Scg(props) {
  return (
    <div className=" mt-16 md:mt-16 mb-16">
      <div>
        <h2
          className={`  text-orange-300 text-center md:text-4xl font-semibold text-3xl underline underline-offset-4 decoration-3 `}
        >
          SwimCap for blind
        </h2>
        <p className="text-center text-sm my-12 ">
          <span className="font-Prompt text-orange-50">
            โครงการ "ปล่อยแสงไอเดียเปลี่ยนโลก" จากทาง SCG{" "}
          </span>
          <br />
          <span className="font-Prompt text-orange-50">
            ประเภท "ปัญหาความไม่เท่าเทียมและ การยอมรับความแตกต่าง"
          </span>
          <br />
          <span className="font-Prompt font-semibold text-red-300 ">
            เข้ารอบ Final List 5 ทีมสุดท้าย จาก 262 ผลงานจากประเทศไทย เวียดนาม
            เเละอินโดนีเซีย
          </span>
        </p>
      </div>
      <div className="lg:flex">
        <img
          src={PostScg}
          className=" mt-5 rounded-lg h-72 lg:h-80 xl:h-96 m-auto"
          alt=""
        />
        <img
          src={Poster}
          className=" mt-5 rounded-lg h-72 lg:h-[18rem] xl:h-[22rem] m-auto lg:m-0 lg:ml-5 self-end"
          alt=""
        />
        <img
          src={Final}
          className=" mt-5 rounded-lg h-72 lg:h-[18rem] xl:h-[22rem] m-auto lg:m-0 lg:ml-5 self-end"
          alt=""
        />
      </div>
      <img
        src={CertSCG}
        className=" mt-5 rounded-lg h-52 md:h-64 lg:h-80 xl:h-96 m-auto"
        alt=""
      />
      <iframe
        className=" m-auto mt-5 w-[320px] h-[200px] md:w-[500px] md:h-[300px]"
        src="https://www.youtube.com/embed/A_4JvvGN67k"
        title="concept SwimCap for Blind"
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Scg;
