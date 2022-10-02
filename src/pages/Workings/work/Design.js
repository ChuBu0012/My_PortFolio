import purple from "../showwork/ส่งประกวด สีม่วง.png";
import red from "../showwork/ส่งประกวด สีแดง.png";
import orange from "../showwork/ส่งประกวด สีเเสด.png";

import CertDesign3D from "../showwork/desin3D.jpeg";
import Design3D from "../showwork/3D.png";

import printer3D from '../showwork/3Dprinter.png';
import Certprinter3D from '../showwork/อบรม 3D บางปะกอก.png';

import Tech from '../showwork/tech.png';
function Design(params) {
  return (
    <div className=" mt-16 md:mt-16 mb-16">
      {/* ประกวดเสื้อ */}
      <h2
        className={` font-Prompt text-center md:text-3xl  text-2xl font-thin underline decoration-dashed underline-offset-4  decoration-2 `}
      >
        ประกวดการออกแบบเสื้อกีฬาสี
      </h2>
      <div className="mt-12 xl:flex">
        <div>
          <img
            src={purple}
            className="m-auto mt-5 md:w-80 w-60 rounded xl:w-80"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-base xl:text-lg text-purple-200">
            ตัวอย่างเสื้อกีฬาสีสีม่วง
          </p>
        </div>
        <div className="mx-3">
          <img
            src={red}
            className="m-auto mt-5 md:w-72 w-52 rounded xl:w-96"
            alt=""
          />
          <p className="font-Prompt text-center text-sm md:text-base mt-2 xl:text-lg text-red-200">
            ตัวอย่างเสื้อกีฬาสีสีแดง
          </p>
        </div>
        <div>
          <img
            src={orange}
            className="m-auto mt-5 md:w-64  w-48 rounded xl:w-72"
            alt=""
          />
          <p className="font-Prompt text-center text-sm md:text-base mt-2 xl:text-lg text-orange-200">
            ตัวอย่างเสื้อกีฬาสีสีแสด
          </p>
        </div>
      </div>
      <p className="font-Prompt md:text-xl xl:text-2xl text-center text-lg mt-5 ">
        ได้รับผลโหวตรองชนะเลิศอันดับที่ 2
      </p>

      {/* ออกแบบโปรเตอร์การตอบคำถามเทคโนโลยี */}
      <h2
        className={`mt-16 font-Prompt text-center md:text-3xl  text-2xl font-thin underline decoration-dashed underline-offset-4  decoration-2 `}
      >
        ออกแบบโปรเตอร์<br/>การตอบคำถามเทคโนโลยี
      </h2>
      <div className="mt-12 xl:flex xl:justify-around ">
        <div>
          <img
            src={Tech}
            className="m-auto mt-5 md:w-72 w-60 rounded xl:w-80"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-base xl:text-lg text-sky-200">
            ตัวอย่างงานออกแบบ
          </p>
        </div>
      </div>

      {/* 3D */}
      <h2
        className={`mt-16 font-Prompt text-center md:text-3xl  text-2xl font-thin underline decoration-dashed underline-offset-4  decoration-2 `}
      >
        การแข่งขันออกแบบชิ้นงาน 3D
      </h2>
      <div className="mt-12 xl:flex xl:justify-around ">
        <div>
          <img
            src={Design3D}
            className="m-auto mt-5 md:w-72 w-60 rounded xl:w-80"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-base xl:text-lg text-sky-200">
            ตัวอย่างงานออกแบบ
          </p>
        </div>
        <div>
          <img
            src={CertDesign3D}
            className="m-auto mt-5 md:w-80 w-72 rounded xl:w-96"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-lg xl:text-xl text-sky-200">
            Certificate
          </p>
        </div>
      </div>

      {/* อบรม 3D  */}
      <h2
        className={`mt-16 font-Prompt text-center md:text-3xl  text-2xl font-thin underline decoration-dashed underline-offset-4  decoration-2 `}
      >
        การอบรมเชิงปฎิบัติ<br/>การพิมพ์ชิ้นงานด้วย 3D printer
      </h2>
      <div className="mt-12 xl:flex xl:justify-around ">
        <div>
          <img
            src={printer3D}
            className="m-auto mt-5 md:w-72 w-60 rounded xl:w-80"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-base xl:text-lg text-sky-200">
            ตัวอย่างงานออกแบบ
          </p>
        </div>
        <div>
          <img
            src={Certprinter3D}
            className="m-auto mt-5 md:w-80 w-72 rounded xl:w-96"
            alt=""
          />
          <p className="font-Prompt text-center mt-2 text-sm md:text-lg xl:text-xl text-sky-200">
            Certificate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Design;
