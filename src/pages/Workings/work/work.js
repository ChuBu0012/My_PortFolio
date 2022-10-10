import "./work.css";
function WateringCactus({ name, website, src, des, tool, size, shadow }) {
  return (
    <div className=" mt-16 md:mt-10">
      <h2
        className={`font-Prompt text-center md:text-3xl  text-2xl font-thin underline decoration-dashed ${tool} underline-offset-4  decoration-2 `}
      >
        {name}
      </h2>
      <a href={website} target={"_blank"} className="" rel="noreferrer">
        <img
          src={src}
          className={`mt-5 border-b-4  border-white  rounded-3xl md:mt-8 lg:mt-12 w-96 px-5 md:w-[540px] lg:w-[650px] xl:w-[900px]`}
          style={size}
          alt=""
          loading="lazy"
        />
      </a>
      <a href={website} target={"_blank"} rel="noreferrer">
        <p
          className={`${shadow} font-Prompt text-center text-lg text-orange-300 mt-4`}
        >
          {des}
        </p>
      </a>
      <p className=" font-Prompt text-center text-lg text-orange-200">
        Tool: {tool}
      </p>
    </div>
  );
}

export default WateringCactus;
