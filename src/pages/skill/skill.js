import tailwindwhite from "./tailwindwhite.png";
import "./Skill.css";
function Skill({ mdleft }) {
  return (
    <div className="skill flex justify-center items-center h-screen mt-28 mb-20 lg:mt-0">
      <div
        className={`skill-box flex flex-col items-center relative ${mdleft}`}
      >
        <h3
          data-aos="fade-down"
          data-aos-duration="900"
          className=" font-semibold text-6xl text-headskill select-none border-b-4 pb-2 rounded lg:border-b-0 lg:border-transparent hover:lg:border-b-4 hover:lg:border-white hover:lg:pb-3  transition-all"
        >
          Skill
        </h3>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="20"
          className="  grid grid-cols-3 gap-8 text-6xl md:text-7xl md:gap-10 lg:text-7xl xl:text-8xl lg:gap-10 xl:gap-14 place-items-center mt-10 lg:mt-14 "
        >
          {/* row1 */}
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Html</p>
            <i
              title="html"
              className="fa-brands fa-html5 border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Css</p>
            <i
              title="css"
              className="fa-brands fa-css3-alt border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Javascript</p>
            <i
              title="javascript"
              className="fa-brands fa-js-square border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>

          {/* row2 */}
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center relative bottom-[1.1rem] font-Prompt">TailwindCss</p>
            <img
              src={tailwindwhite}
              title="tailwindcss"
              alt=""
              className={` h-9 select-none lg:h-16 md:h-12 hover:lg:h-20 border-b-0 border-transparent hover:md:h-14 hover:border-b-2 hover:h-[50px] hover:border-white hover:pb-3`}
              draggable="false"
            />
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">ReactJs</p>
            <i
              title="ReactJs"
              className="fa-brands fa-react border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">NodeJs</p>
            <i
              title="nodeJs"
              className="fa-brands fa-node-js border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>

          {/* row3 */}
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Git</p>
            <i
              title="git"
              className="fa-brands fa-git-alt border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Python</p>
            <i
              title="python"
              className="fa-brands fa-python border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
          <div>
            <p className="text-sm hidden md:block text-pink-50 text-center font-Prompt">Java</p>
            <i
              title="java"
              className="fa-brands fa-java border-b-0 border-transparent hover:border-b-2 hover:border-white hover:pb-3"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
