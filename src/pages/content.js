import About from "./about/about";
import Profile from "./profile/Profile";
import Skill from "./skill/skill";
import "./content.css";
function content({ left }) {
  return (

    <div
      className={`content box-border w-full bg-content max-h-full transition-all font-Prompt`}
    >
      <About mdleft={left} />

      <span id="profile"></span>
      <Profile mdleft={left} />

      <span id="skill"></span>
      <Skill mdleft={left} />
    </div>

  );
}

export default content;
