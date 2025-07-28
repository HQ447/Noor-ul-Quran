import quran from "./quran.pdf";
import qaida from "./qaida.pdf";
import book from "./book.pdf";

function Downloads({ darkmode }) {
  return (
    <div
      className={`${
        darkmode ? " " : ""
      } relative pt-28 bg-[#00000090]  text-white min-h-screen pb-5 `}
    >
      <div className="flex flex-col items-center justify-center w-full mb-4">
        <h1
          className={` w-full text-2xl  -xsm:text-xl font-semibold  text-center  `}
        >
          Resources
        </h1>
        <p className="text-sm -xsm:text-xs">
          Open or Download Books and other Resources in pdf
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/8164720/pexels-photo-8164720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="absolute top-0 left-0 object-cover w-full h-full -z-20"
      />

      <div className="flex flex-wrap justify-center px-8 gap-11 -xsm:gap-3 -xsm:px-3 ">
        <div className=" bg-[#ffffffb0] text-black  shadow-md border  p-5 -xsm:p-2 rounded-md">
          <div className="w-40 h-48 -xsm:h-32 -xsm:w-28">
            <img
              src="https://i.pinimg.com/474x/67/cd/ff/67cdff79947266fb9393815eaa02bb23.jpg"
              alt="loading-error"
              className="w-full h-full"
            />
          </div>
          <p className="w-full my-2 text-sm text-center ">Holy Quran</p>
          <a href={quran}>
            <button className="py-2 -xsm:py-1 -xsm:text-[10px] w-full text-sm bg-black hover:scale-95 transition-all text-white rounded-sm ">
              Download now
            </button>
          </a>
        </div>
        <div className="bg-[#ffffffb0] text-black shadow-md border  p-5 -xsm:p-2 rounded-md ">
          <div className="w-40 h-48 -xsm:h-32 -xsm:w-28">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBHaNFAULretljI3ok8v5yd42TJgaSRukB78U2T849y_Ax6msibsYNz4uu7yCRysHrxs&usqp=CAU"
              alt="loading error"
              className="w-full h-full "
            />
          </div>
          <p className="w-full my-2 text-sm text-center ">Noorani Qaida</p>
          <a href={qaida}>
            <button className="py-2 -xsm:py-1 -xsm:text-[10px] w-full hover:scale-95 transition-all bg-black  text-sm text-white rounded-sm">
              Download now
            </button>
          </a>
        </div>
        <div className="bg-[#ffffffb0] text-black shadow-md border p-5 -xsm:p-2 rounded-md">
          <div className="w-40 h-48 -xsm:h-32 -xsm:w-28">
            <img
              src="https://online.pubhtml5.com/qtvu/hbsg/files/page/1.jpg"
              alt="loading error"
              className="w-full h-full "
            />
          </div>
          <p className="w-full my-2 text-sm text-center ">Lughat ul Muslim</p>
          <a href={book}>
            <button className="-xsm:text-[10px] text-white -xsm:py-1 py-2 w-full hover:scale-95 transition-all text-sm bg-black  rounded-sm">
              Download now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
