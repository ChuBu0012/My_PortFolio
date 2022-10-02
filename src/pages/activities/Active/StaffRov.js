import Openhouse from "../showactivities/open house rov.jpg";
import PhotoOH from "../showactivities/รวมopenhouserov.jpg";
function StaffRov(props) {
  return (
    <div className=" mt-12 md:mt-16 mb-10 ">
      <h2 className="font-Prompt md:text-2xl text-center text-2xl font-medium text-orange-400 underline underline-offset-4 decoration-3 ">
        Staff Rov Tournament E-sport
        <br />
        Bpk Open house 2021
      </h2>
      <div>
        <img
          src={Openhouse}
          className="rounded w-64 lg:w-80 md:w-80 xl:w-96 mt-7 m-auto"
          alt=""
        />
      </div>

      <div className="mt-5">
        <img
          src={PhotoOH}
          className="rounded w-60 lg:w-80 md:w-72 xl:w-80 m-auto"
          alt=""
        />
        <p className="text-center font-Prompt m-auto mt-3 w-[17.5rem] lg:w-full text-orange-50">
          รับหน้าที่ Staff Rov tournament Bpk open house 2022
        </p>
      </div>
    </div>
  );
}

export default StaffRov;
