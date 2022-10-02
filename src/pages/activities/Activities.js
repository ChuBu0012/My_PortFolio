
import Arunarsa from './Active/Arunarsa';
import Folksong from './Active/folksong';
import "./Activities.css"
import StaffRov from './Active/StaffRov';
import Pim321 from './Active/pim321';
function Activities({ mdleft }) {
  return (
    <div className="activities flex justify-center items-center h-[18%] md:h-[22%] mt-40 mb-20 lg:mt-0 lg:h-[23%] xl:h-[27%] 2xl:h-[25%] ">
      <div
        className={`activities-box flex flex-col items-center relative ${mdleft}`}
      >
        <h3 className=" font-semibold text-6xl text-sky-200 select-none border-b-4 pb-2 rounded lg:border-b-0 lg:border-transparent hover:lg:border-b-4 hover:lg:border-white hover:lg:pb-3 ">
          Activities
        </h3>
        <Arunarsa/>
        <Folksong/>
        <StaffRov/>
        <Pim321/>
      </div>
    </div>
  );
}

export default Activities;
