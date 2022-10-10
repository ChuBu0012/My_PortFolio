import Cactus from "./showwork/Cactus.png";
import PreWeather from "./showwork/PreWeather.gif";
import Todolist from "./showwork/Todolist App.png";
import BlogBlog from "./showwork/BlogBlog.png";
import Happy from "./showwork/Happy Birthday.png";
import Kidbight from './showwork/Kidbight.png';
import parse from 'html-react-parser'
import React, { lazy, Suspense } from "react";
import "./Workings.css";
import WateringCactus from "./work/work";
import Design from './work/Design';
import Whatstudy from './showwork/whatstudy.png';
const Scg = lazy(()=>import("./work/Scg"))



function Workings({ mdleft }) {
  const works = [
    {
      id: 1,
      name: "Watering Cactus",
      website: "https://watering-cactus0012.netlify.app/",
      src: Cactus,
      des: "เว็บไซต์รดน้ำแคสตัส",
      tool: "html css js Tailwindcss ReactJs",
      shadow:"des"
    },
    {
      id: 2,
      name: "PreWeather",
      website: "https://meepoohvp.github.io/weather-project/",
      src: PreWeather,
      des: "เว็บไซต์เช็คสภาพอากาศ",
      tool: "html css js Tailwindcss RapidAPI",
       shadow:"des"
    },
    {
      id: 4,
      name: "Blog! Blog!",
      website: "https://blog-blog0012.netlify.app/",
      src: BlogBlog,
      des: parse("เว็บ Blog"),
      tool: parse("html css js TailwindCss ReactJs<br/>NodeJs ExpressJs MongoDB"), shadow:"des"
    },
    {
      id: 7,
      name: "WhatStudy-BPK",
      website: "https://whatstudy-bpk.netlify.app/",
      src: Whatstudy,
      des: parse("เว็บไซต์ติดตามผลการศึกษาต่อ<br/>ของโรงเรียนบางปะกอกวิทยาคม"),
      tool: parse("html css js TailwindCss ReactJs<br/>NodeJs ExpressJs MongoDB")
    },
    {
      id: 3,
      name: "Todolist App",
      website: "https://todolist-app-0012.web.app/",
      src: Todolist,
      des: "เว็บไซต์คำนวณรายรับ-จ่าย และวางแผนการใช้ชีวิต",
      tool: "html css js Tailwindcss ReactJs", shadow:"des"
    },
    {
      id: 5,
      name: "Happy Birth Day MyFriend",
      website: "https://thebest-hbd-2810.web.app/",
      src: Happy,
      des: "เว็บไซต์อวยพรวันเกิดเพื่อน ๆ",
      tool: "html css js Tailwindcss Jquery", shadow:"des"
    },
    {
      id: 6,
      name: "บำรุง และพัฒนาโปรแกรมเปิด-ปิดไฟอัตโนมัติ บริเวณศาลาโรงเรียน ",
      src: Kidbight,
      des: `ช่วยคุณครูบำรุงและพัฒนาโปรแกรมเปิด-ปิดไฟอัตโนมัติ บอร์ด Kidbight บริเวณศาลาโรงเรียนบางปะกอกวิทยาคม`,
      size:{"width":"50%","marginLeft":"auto","marginRight":"auto"},
      tool:"KbIde",shadow:"kidbight"
    },
  ];
  return (
    <Suspense fallback={<></>}>
    <div className=" flex justify-center items-center h-[65%] md:h-[55%] lg:h-[57%] xl:h-[55%] 2xl:h-[55%] mt-12 workings">
      <div
        className={`workings-box flex flex-col items-center relative ${mdleft}`}
      >
        <h3 className=" font-semibold text-6xl text-headworkings select-none border-b-4 pb-3 rounded lg:border-b-0 lg:border-transparent hover:lg:border-b-4 hover:lg:border-white hover:lg:pb-4  transition-all">
          Workings
        </h3>
        
        <Scg/>

        {works.map((work) => {
          return <WateringCactus {...work} key={work.id} />;
        })}

      <Design/>
      </div>
    </div>
    </Suspense>
  );
}
export default Workings;
