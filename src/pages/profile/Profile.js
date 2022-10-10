import ProFile from "./profile.png";
import "./Profile.css";

function Profile({ mdleft }) {


  return (
    <div
      className="profile flex justify-center items-center h-screen md:mt-0 mt-36"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos="zoom-in-up"
    >
      <div
        className={`profile-box flex flex-col items-center relative ${mdleft}`}
      >
        <h3 className=" font-semibold text-6xl text-headprofile select-none border-b-4 pb-2 rounded lg:border-b-0 lg:border-transparent hover:lg:border-b-4 hover:lg:border-white hover:lg:pb-3 ">
          ProFile
        </h3>
        <div
          className="informprofile flex md:flex-row flex-col justify-center items-center mt-7
         md:mt-7"
        >
          <div className="informtext flex md:text-base text-sm lg:text-lg xl:text-xl mr-0 md:mr-4 lg:mr-10">
            <div className=" font-normal lg:text-xl xl:text-2xl text-base md:text-xl text-teal-200 leading-9 md:leading-9 lg:leading-[3rem] xl:leading-[3.5rem] Prompt ">
              ชื่อ
              <br />
              ชื่อเล่น <br />
              อายุ
              <br />
              งานอดิเรก
              <br />
              ศึกษาอยู่ที่
              <br />
              แผนการเรียน
              <br />
              วันเกิด
              <br />
              สัญชาติ
              <br />
              เชื้อชาติ
              <br />
            </div>
            <div className="ml-5 font-normal leading-9 md:leading-9  lg:leading-[3rem] xl:leading-[3.5rem] Prompt">
              นายพรพุทธ สุดอุปถัมภ์ <br />
              โมสต์ (Most)
              <br />
              17 ปี <br />
              เลี้ยงแคสตัส, Coding <br />
              โรงเรียนบางปะกอกวิทยาคม <br />
              วิทย์ - คณิต <br />
              15 กันยายน 2547 <br />
              ไทย <br />
              ไทย <br />
            </div>
          </div>
          <img
            src={ProFile}
            className="lg:h-96 md:h-60 h-48 md:mt-0 mt-7 informimg hover:p-5"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
