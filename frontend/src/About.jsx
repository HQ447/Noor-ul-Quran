function About() {
  return (
    <div className="flex justify-center items-center relative w-full h-screen flex-col text-center ">
      <img
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        src="https://images.pexels.com/photos/10925608/pexels-photo-10925608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="w-full h-full flex justify-center items-center flex-col bg-[#00000094] text-white">
        <h1 className=" text-3xl -xsm:text-xl font-bold">Who We Are?</h1>
        <p className=" w-[60%] -md:w-[70%] -sm:w-[80%] -xsm:px-0 ">
          An online Quran academy is a platform that offers Quranic education
          and Islamic studies through virtual classes. These academies provide
          courses for learners of all ages, focusing on Quran recitation,
          Tajweed (pronunciation rules), memorization (Hifz), and understanding
          (translation and Tafseer). They often use tools like Zoom, Skype, or
          custom-built platforms to connect students with qualified teachers.
        </p>
      </div>
    </div>
  );
}

export default About;
