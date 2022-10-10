import folksong from '../showactivities/แข่งดนตรียาเสพติด.jpg';
function Folksong(props) {
  return (
    <div className=" mt-10 md:mt-16 mb-10 ">
      <h2 className="font-Prompt text-center text-2xl font-medium text-orange-400 underline underline-offset-4 decoration-3 ">
        การประกวดดนตรี Folksong<br/>วันต่อต้านยาเสพติด
      </h2>

      <div className="mt-5">
        <img src={folksong} loading="lazy" className="rounded w-60 lg:w-80 md:w-72 xl:w-80 m-auto" alt="" />
        <p className="text-center font-Prompt m-auto mt-3 w-[17.5rem] lg:w-full text-orange-50">
          รับหน้าที่เป็นผู้เล่นคาฮอง<br/>ในการดนตรี Folksong
        </p>
      </div>
    </div>
  );
}
export default Folksong;
