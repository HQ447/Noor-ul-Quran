// eslint-disable-next-line react/prop-types, no-unused-vars
function Profile({ darkmode }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="  relative w-full pb-16 pt-28 flex flex-col justify-center items-center bg-[#000000c1]">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
          className=" rounded-full h-28 border-[4px] border-white  w-28"
        />
        <h1 className="text-3xl -xsm:text-xl text-white font-semibold mt-2">
          Muhammad Talha
        </h1>
        <p className="text-sm -xsm:text-xs mt-1 text-white">
          Aalim e Deen , Arabic Teacher & Lawyer
        </p>
        <div className="flex gap-2 mt-3 ">
          <button className="px-2 py-2 text-sm -xsm:text-xs bg-[#08a199] text-white rounded-sm">
            Download CV
          </button>
          <button className="px-2 py-2 text-sm -xsm:text-xs border-2 border-[#08a199] rounded-sm text-white">
            Contact me
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="absolute -z-20 top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex -sm:flex-col -sm:gap-4 px-16 -mmd:px-12 -md:px-7 py-10  -xsm:px-3 ">
        <div className="flex flex-col w-[50%] -sm:w-full px-4 -md:px-2  -xsm:px-0">
          <h1 className="text-xl font-semibold -xsm:text-lg mb-2">About</h1>
          <p className="text-sm -xsm:text-xs text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            illo repudiandae dicta enim consequuntur officiis nesciunt. Illo,
            earum sint explicabo doloribus nihil distinctio est praesentium fuga
            provident, veritatis repellendus aliquam. illo repudiandae dicta
            enim consequuntur officiis nesciunt. Illo, earum sint explicabo
            doloribus nihil distinctio est praesentium fuga provident, veritatis
            repellendus aliquam.
          </p>
        </div>
        <div className="flex flex-col w-[50%] -sm:w-full gap-2">
          <h1 className="text-xl font-semibold -xsm: mt-3 -xsm:text-lg">
            Basic Information
          </h1>
          <div className=" flex w-full justify-between shadow-md py-2 px-3">
            <h1 className="text-sm -xsm:text-xs font-semibold">Education:</h1>
            <p className=" text-sm -xsm:text-xs -xsm:text-center">
              Islamic Studies , Islamic Law & Jurisprudence
            </p>
          </div>
          <div className=" flex w-full justify-between shadow-md py-2 px-3">
            <h1 className="text-sm -xsm:text-xs font-semibold">Experience:</h1>
            <p className=" text-sm -xsm:text-xs -xsm:text-center">
              3 Years Teaching Experience
            </p>
          </div>
          <div className=" flex w-full justify-between shadow-md py-2 px-3">
            <h1 className="text-sm -xsm:text-xs font-semibold">Address:</h1>
            <p className=" text-sm -xsm:text-xs">Kohat , Kpk , Pakistan</p>
          </div>
          <div className=" flex w-full justify-between shadow-md py-2 px-3">
            <h1 className="text-sm -xsm:text-xs font-semibold">Gender:</h1>
            <p className=" text-sm -xsm:text-xs">Male</p>
          </div>
          <div className=" flex w-full justify-between shadow-md py-2 px-3">
            <h1 className="text-sm -xsm:text-xs font-semibold">
              Date of Birth:
            </h1>
            <p className=" text-sm -xsm:text-xs">DD-MM-YY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
