function Courses({ darkmode }) {
  let data = [
    {
      name: "Online Quran Reading",
      des: "Basically “Quran Reading” is very important for our life. Allah (God) has gifted the Holy Quran to us by Prophet Muhammad (P.B.U.H). Muslims regard the Holy Quran as the most important miracle ",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c2.png",
    },
    {
      name: "Noorani Qaida Online",
      des: "This course Noorani Qaida for kids is designed special for those students who have the first setup into learning Quran. In this course student can learn Noorani Qaida with basic rules of Reading Quran",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c1.png",
    },
    {
      name: "Learn Quran with Tajweed",
      des: "Online Quran Reading Course is design for kids, adults and all the Muslims around the world who are not able to Read Quran Online with rules of Tajweed. “Quran Reading” Course is a term expressing",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c4.png",
    },
    {
      name: "Quran Memorization",
      des: "Quran Memorization at home is easy now. Alhamdulillah we all are Muslims and Allah created us in the Muslim’s home. He sent the Prophet Muhammad (Peace Be Upon Him) to us for telling the way which goes to the jannah.",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c3.png",
    },
    {
      name: "Quran Translation",
      des: "islamic centre online is the best institute for teaching Islamic study for all person of age If you want to learn Quran with translation and tafseer so then take first 3 classes from us free of cost.",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c5.png",
    },
    {
      name: "Basic Islamic Knowledge",
      des: "The student will start his/her lesson from very basics of Arabic alphabet’s after that he will go to the next lesson’s as well. His/her qualified Quran teacher will teach also Islamic teaching like basic of Islam, Namaz, Kalima’s, etc",
      img: "https://islamiccentreonline.com/wp-content/uploads/2022/09/c6.png",
    },
    {
      name: "Basic To Advance Arabic",
      des: "The student will start his/her lesson from very basics of Arabic alphabet’s after that he will go to the next lesson’s as well. His/her qualified Quran teacher will teach also Islamic teaching like basic of Islam, Namaz, Kalima’s, etc",
      img: "https://online.pubhtml5.com/qtvu/hbsg/files/page/1.jpg",
    },
  ];

  return (
    <div className="py-10">
      <h1 className="w-full  text-3xl -xsm:text-xl font-semibold  text-center mb-5 ">
        What we Offer?
      </h1>
      <div className="flex gap-8 justify-center px-8 flex-wrap  ">
        {data.map((obj) => (
          <div
            key={data.index}
            className={`${
              darkmode ? "!bg-[#424242] !text-white" : "  "
            } relative flex flex-col mt-6  shadow-md shadow-[#808080] border rounded-xl w-60`}
          >
            <div className="relative h-36 mx-4 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40">
              <img src={obj.img} alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-[16px] w-full text-center font-semibold  ">
                {obj.name}
              </h5>
              <p className="block font-sans text-xs antialiased font-light leading-relaxed text-inherit">
                {obj.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
