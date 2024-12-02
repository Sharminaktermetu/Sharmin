import Image from "next/image";

// import chooseUsImg from "@/assets/choose-us.png";

const servicesData = [
  {
    // imageSrc: img1,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    // imageSrc: img2,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    // imageSrc: img3,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    // imageSrc: img4,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const Whyme = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-blue-500 font-bold text-lg">Why Us</h1>
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-center">
        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex gap-4 p-4 bg-slate-100 rounded-lg ${
                index % 2 === 0
                  ? "rounded-r-[100px]"
                  : "rounded-l-[100px]"
              }`}
            >
              <div className="bg-white p-3 rounded-lg">
                {/* <Image src={service?.imageSrc} width={50} alt={service.title} /> */}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {/* <Image src={chooseUsImg} width={400} alt="choose us" /> */}
        </div>
      </div>
    </div>
  );
};

export default Whyme;
