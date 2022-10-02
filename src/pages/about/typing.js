import { useEffect } from "react";
import Typed from "typed.js";

function Typing(params) {
  useEffect(() => {
    var i = 0;
    var headtext = ["I'm interested in ", "I like ", "I'm ", "I want to be a "];
    var text = ["coding.", "deknoi.", "Full stack developer.", "Web developer"];
    var color = ["#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"];

    for (i = 0; i < text.length; i++) {
      text[i] = `<span style="color:${color[i]};">${text[i]}</span>`;
    }
    const options = {
      strings: [
        headtext[0] + text[0],
        headtext[1] + text[0],
        headtext[1] + text[0],
        headtext[3] + text[2],
        headtext[3] + text[3],
      ],
      typeSpeed: 50,
      smartBackspace: true,
      cursorChar: "_",
      backSpeed: 20,
      loop: true,
      backDelay: 1000,
    };

    Typed.current = new Typed(".type", options);

    return () => {
      Typed.current.destroy();
    };
  }, []);
  return (
    <h1 className=" text-base md:text-xl lg:text-4xl">
      <span className="type font-bold lg:font-medium "></span>
    </h1>
  );
}

export default Typing;
