import React from "react";

function ChooseUs() {
  const features = [
    {
      title: "Free Trials",
      description:
        "We offer 3 days completely free trial classes for every course.",
      image:
        "https://elitequrantutors.com/wp-content/uploads/2024/06/free-trial.webp",
    },
    {
      title: "Expert Staff",
      description:
        "Our tutors are highly qualified & expert Qaris and Islamic Scholars.",
      image:
        "https://elitequrantutors.com/wp-content/uploads/2024/06/Expert-staff.webp",
    },
    {
      title: "Flexible Class Timings",
      description:
        "Timing options are extremely flexible at our online Institute.",
      image:
        "https://elitequrantutors.com/wp-content/uploads/2024/06/timing.webp",
    },
    {
      title: "Affordable Fee Plans",
      description: "Our monthly fee plans are very reasonable and affordable.",
      image: "https://elitequrantutors.com/wp-content/uploads/2024/06/fee.webp",
    },
    {
      title: "Progress Reports",
      description:
        "Report card of the students is sent to their parents monthly.",
      image:
        "https://elitequrantutors.com/wp-content/uploads/2024/06/progress-report.webp",
    },
    {
      title: "Male & Female Tutors",
      description: "For our sisters, we also have expert female teacher.",
      image:
        "https://elitequrantutors.com/wp-content/uploads/2024/06/male-female.webp",
    },
  ];
  return (
    <section className="px-4 py-12 text-center bg-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-xl font-bold text-blue-700 md:text-2xl lg:text-3xl">
          Why <span className="text-green-600">Choose Us!</span>
        </h2>
        <div className="flex justify-center my-2">
          <img
            src="https://elitequrantutors.com/wp-content/uploads/2023/02/Saperator-1-300x25.png"
            alt="Separator"
            className="w-56 h-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 transition duration-300 transform bg-gray-100 rounded-lg md:flex-row hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 mx-auto md:w-15 md:h-15s"
              />
              <div>
                <h5 className="mt-4 font-semibold sm:text-sm lg:text-lg">
                  {item.title}
                </h5>
                <p className="text-xs text-gray-600 lg:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
