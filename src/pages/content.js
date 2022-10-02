import About from "./about/about";
import Profile from "./profile/Profile";
import Skill from "./skill/skill";
// import Workings from './Workings/Working';
// import Activities from "./activities/Activities";
import "./content.css";
import React, { lazy, Suspense } from "react";

const Workings = lazy(() => import("./Workings/Working"));
const Activities = lazy(() => import("./activities/Activities"));
const Certificates = lazy(() => import("./Certificate/Certificates.js"))
function content({ left }) {
  return (
    <Suspense fallback={<></>}>
      <div
        className={`content box-border w-full bg-content max-h-full transition-all font-Prompt`}
      >
        <About mdleft={left} />

        <span id="profile"></span>
        <Profile mdleft={left} />

        <span id="skill"></span>
        <Skill mdleft={left} />

        <span id="workings"></span>
        <Workings mdleft={left} />

        <span id="activities"></span>
        <Activities mdleft={left} />

        <span id="certificate"></span>
        <Certificates mdleft={left}/>
      </div>
    </Suspense>
  );
}

export default content;
