import Person from '../showactivities/PIM_คนเดียว.jpg';
import CertPIM321 from '../showactivities/PIM 321.png';
function Pim321(props) {
  return (
    <div className=" mt-12 md:mt-16 mb-10 ">
      <h2 className="font-Prompt md:text-2xl text-center text-2xl font-medium text-orange-400 underline underline-offset-4 decoration-3 ">
        PIM Young Creative Progarm ครั้งที่ 321
      </h2>

      <div>
        <img src={CertPIM321} className="rounded w-64 lg:w-80 md:w-80 xl:w-96 mt-7 m-auto" alt="" />
      </div>

      <div className="mt-5">
        <img
          src={Person}
          className="rounded w-60 lg:w-80 md:w-72 xl:w-80 m-auto"
          alt=""
        />
        <p className="text-center font-Prompt m-auto mt-3 w-[17.5rem] lg:w-full text-orange-50">
        
        ได้เรียนรู้การสร้างเกมด้วย Code block และการออกแบบ 3D ด้วย Blender
        </p>
      </div>
    </div>
  );
}

export default Pim321;
