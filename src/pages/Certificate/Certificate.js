function Certificate({ src, des }) {
  return (
    <div className="mt-3 md:mt-0">
      <img src={src} className="w-60 md:w-72  2xl:w-80 mb-3" alt="" />
      <p className="text-center text-yellow-50 font-Prompt text-sm">{des}</p>
    </div>
  );
}
export default Certificate;
