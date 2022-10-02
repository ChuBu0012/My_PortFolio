import arun1 from "../showactivities/arun1.jpg";
import arun2 from "../showactivities/arun2.png";
import arun from "../showactivities/arun.jpg";

function Arunarsa(props) {
  return (
    <div className=" mt-12 md:mt-16 mb-10 ">
      <h2 className="font-Prompt md:text-2xl text-center text-2xl font-medium text-orange-400 underline underline-offset-4 decoration-3 ">
        โครงการอรุณอาสา
      </h2>
      <div>
        <img src={arun} className="rounded w-64 lg:w-80 md:w-80 xl:w-96 mt-7 m-auto" alt="" />
      </div>

      <div className="mt-5">
        <img src={arun1} className="rounded w-60 lg:w-80 md:w-72 xl:w-80 m-auto" alt="" />
        <p className="text-center font-Prompt m-auto mt-3 w-[17.5rem] lg:w-full text-orange-50">
          รับหน้าที่เป็นผู้เล่นคาฮอง ในการเปิดหมวกเพื่อสมทบทุนบริจาคใน
          โครงการอรุณอาสา ณ ตลาดน้ำบางน้ำผึ้ง
        </p>
      </div>
      <div className="mt-5">
        <img src={arun2} className="rounded w-60 lg:w-80 md:w-72 xl:w-80 m-auto" alt="" />
        <p className="text-center font-Prompt m-auto mt-3 w-64 lg:w-full text-orange-50">
          รับหน้าที่เป็นพี่ฐานกีฬา
          <br />
          เพื่อสอนน้อง ๆ เล่นกีฬาต่าง ๆ<br />
          ณ โรงเรียนวัดโสดาประดิษฐาราม
        </p>
      </div>
    </div>
  );
}
export default Arunarsa;
