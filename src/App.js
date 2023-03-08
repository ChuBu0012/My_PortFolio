
import Content from "./pages/content";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

function App(props) {
  AOS.init();
  const [left, setleft] = useState("");
  return (
    <div className="w-full h-full flex flex-row scroll-smooth">
      {/* <Sidebar mdleft={mdleft}/> */}
      <Content left={left} />
    </div>
  );
}

export default App;
