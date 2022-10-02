import { useState, useEffect } from "react";
import "./Sidebar.css";

function Sidebar(props) {
  const [navsivebarwidth, setnavsivebarwidth] = useState(
    "hidden md:w-[20%] lg:w-[15%]"
  );
  const [menuText, setmenuText] = useState("md:inline");
  const [minimizeIndex, setminimizeIndex] = useState(true);
  const [aboutleft, setaboutleft] = useState("md:left-48 lg:left-20");
  const [spaceicon, setspaceicon] = useState("ml-0 ");
  function sidebarmini() {
    if (minimizeIndex === true) {
      setnavsivebarwidth("hidden md:w-[5rem] lg:w-[5rem] lg:w-[15%]");
      setmenuText("md:text-[0rem] md:ml-1 lg:ml-1");
      setaboutleft("md:left-[152px] lg:left-10");
      setspaceicon("ml-2 ");
      setminimizeIndex(false);
    } else if (minimizeIndex === false) {
      setnavsivebarwidth("hidden md:w-[20%] lg:w-[15%]");
      setmenuText("md:inline");
      setaboutleft("md:left-48  lg:left-20");
      setspaceicon("ml-0");
      setminimizeIndex(true);
    }
  }
  useEffect(() => {
    props.mdleft(aboutleft);
  }, [aboutleft, props]);

  return (
    <div
      className={`sm:block ${navsivebarwidth}  transition-all h-full fixed bg-navside z-10 nav-sidebar`}
    >
      <button
        onClick={sidebarmini}
        id="logo"
        className="w-full bg-none border-none text-aliceblue text-4xl md:text-5xl text-center cursor-pointer mb-5 mt-8 mx-0   "
      >
        <span className="underline decoration-underline decoration-4 transition-all ">
          P
        </span>
      </button>

      <div className="w-full h-full text-center  mt-7 transition-all menu">
        <ul>
          <li className=" mt-12 xl:mt-16 ">
            <a
              href="#about"
              className={` p-0 m-0 text-white text-center lg:text-xl  font-thin ${spaceicon}`}
            >
              <i className="fa-solid fa-circle-info mt-2 " />
              <span
                className={`menu-text about hidden ${menuText}  md:inline hover:text-2xl ml-2 lg:ml-3  hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all `}
              >
                About
              </span>
            </a>
          </li>
          <li className="mt-6 lg:mt-7 xl:mt-10">
            <a
              href={"#profile"}
              className={` p-0 m-0 text-white text-center text-xl lg:text-xl  font-thin ${spaceicon}`}
            >
              <i className="fa-solid fa-user mt-2 " />
              <span
                className={`menu-text hidden ${menuText} md:inline hover:text-[1.7rem] ml-2 lg:ml-3 hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all`}
              >
                Profile
              </span>
            </a>
          </li>
          <li className="mt-6 lg:mt-7 xl:mt-10">
            <a
              href="#skill"
              className={` p-0 m-0 text-white text-center text-xl lg:text-xl  font-thin ${spaceicon}`}
            >
              <i className="fa-solid fa-screwdriver-wrench mt-2 " />
              <span
                className={`menu-text hidden ${menuText} text-md md:inline ml-2 lg:ml-3 hover:text-[1.7rem] hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all`}
              >
                Skill
              </span>
            </a>
          </li>
          <li className="mt-6 lg:mt-7 xl:mt-10">
            <a
              href="#workings"
              className={` p-0 m-0 text-white text-center text-xl xl:text-2xl  font-thin ${spaceicon}`}
            >
              <i className="fa-solid fa-briefcase mt-2 " />
              <span
                className={`menu-text hidden ${menuText} text-md md:inline ml-2 lg:ml-3 hover:text-[1.7rem] hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all`}
              >
                Workings
              </span>
            </a>
          </li>
          <li className="mt-6 lg:mt-7 xl:mt-10">
            <a
              href="#activities"
              className={` p-0 m-0 text-white text-center text-xl lg:text-xl  font-thin ${spaceicon}`}
            >
              <i className="fa-solid fa-person-running mt-2 " />
              <span
                className={`menu-text hidden ${menuText} text-md md:inline ml-2 lg:ml-3 hover:text-[1.7rem] hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all`}
              >
                Activities
              </span>
            </a>
          </li>
          <li className="mt-6 lg:mt-7 xl:mt-10">
            <a
              href="#certificate"
              className={` p-0 m-0 text-white text-center text-xl lg:text-xl  font-thin ${spaceicon}`}
            >
              
              <i className="fa-solid fa-certificate mt-2"></i>
              <span
                className={`menu-text hidden ${menuText} text-md md:inline ml-2 lg:ml-3 hover:text-[1.7rem] hover:pb-1 hover:border-b-[1px] hover:border-b-aliceblue transition-all`}
              >
                Certificate
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
