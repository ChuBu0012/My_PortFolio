import Typing from "./typing";
import "./about.css";

function about({ mdleft }) {
  return (
    <div className="about flex justify-center items-center h-screen" id="about">
      <div
        className={`about-box flex flex-col items-center relative ${mdleft}`}
      >
        <h3
          data-aos="zoom-in-down"
          data-aos-duration={500}
          className=" transition-all lg:text-7xl text-center text-headabout md:w-[350px] font-semibold lg:w-full leading-normal text-3xl "
        >
          Pornput Sooduppatham
        </h3>
        <ul className="flex text-center justify-center items-center mt-2 mb-4 text-2xl lg:text-3xl font-semibold md:text-2xl md:mb-8 lg:mt-6">
          <li className=" mr-2 lg:mr-4">
            <a
              href="https://github.com/ChuBu0012"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github ih" />
            </a>
          </li>
          <li className=" mx-2 lg:mx-4">
            <a
              href="https://www.instagram.com/mo.st_to/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram ih" />
            </a>
          </li>
          <li className=" ml-2 lg:ml-4">
            <a href="tel:0952968102" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-phone"></i>
            </a>
          </li>
        </ul>
        <Typing />
        <a href="#profile" rel="noreferrer">
          <i className="fa-sharp fa-solid fa-arrow-down mt-10 animate-bounce "></i>
        </a>
      </div>
    </div>
  );
}

export default about;
