import React, { lazy, Suspense } from "react";
import ai2 from "./showCertificate/2.png";
import ai3 from "./showCertificate/3.png";
import ai4 from "./showCertificate/4.png";
import ai5 from "./showCertificate/5.png";
import EEC from "./showCertificate/EEC Automation Park.png";
import FIET from "./showCertificate/FIET.png";
import py from "./showCertificate/อบรม python.png";
import web from "./showCertificate/อบรมweb.png";
import en from "./showCertificate/อบรมเตรียมวิศวะ.png";
import rov from "./showCertificate/เกียรติบัตร BPK ROV Tournament (255).png";
import pornput from "./showCertificate/เกียรติบัตรผ่านการอบรมของ นายพรพุทธ สุดอุปถัมภ์.png";
import folksong from "./showCertificate/โฟคซอง.png";
import LIIS from "./showCertificate/lieday_199.png";
const Certificate = lazy(() => import("./Certificate"));

function Certificates({ mdleft }) {
  const Cert = [
    { id:1,src: ai2, des: "การเขียนโปรแกรมพื้นฐานสำหรับ AI" },
    { id:2,src: ai3, des: "การสร้าง AI โดยใช้ Python" },
    { id:3,src: ai5, des: "เริ่มต้นเรียนรู้ปัญญาประดิษฐ์" },
    { id:4,src: ai4, des: "การประยุกต์ใช้ปัญญาประดิษฐ์ขั้นสูง" },
    { id:5,src: EEC, des: "Micro:bit" },
    { id:7,src: FIET, des: "FIET Family open house" },
    { id:8,src: py, des: "Python สำหรับวิทยาการข้อมูล" },
    { id:10,src: web, des: "Web Application development" },
    { id:11,src: en, des: "แนะแนวเตรียมวิศวกรรมศาสตร์" },
    { id:12,src: rov, des: "Rov Tournament (Bpk Open House)" },
    { id:13,src: pornput, des: "ความรู้ทางเทคโนโลยี" },
    { id:14,src: folksong, des: "ประกวดดนตรี FolkSong" },
    { id:15,src: LIIS, des: "กิจกรรมวัน LIIS DAY" },
  ];
  return (
    <Suspense fallback={<></>}>
      <div className="certificate flex justify-center items-center h-[22%] md:h-[13%] lg:h-[14%] xl:h-[11%]">
        <div
          className={`certificate-box flex flex-col items-center relative ${mdleft}`}
        >
          <h3 className=" font-semibold text-6xl  text-yellow-100 select-none border-b-4 pb-2 rounded lg:border-b-0 lg:border-transparent hover:lg:border-b-4 hover:lg:border-white hover:lg:pb-3 ">
            Certificate
          </h3>
          <div className="mt-6 md:mt-10 grid    xl:grid-cols-3 xl:gap-6 md:grid-cols-2 md:gap-7">
          {
            Cert.map((cert)=>{
              return <Certificate {...cert} key={cert.id}/>
            })
          }
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Certificates;
