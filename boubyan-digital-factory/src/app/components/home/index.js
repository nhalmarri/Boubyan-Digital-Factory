import Image from "next/image";
import kuwait from "@/app/assets/kuwait.svg";

function MainPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-white relative">
      <div className="w-full relative flex items-center justify-evenly -bottom-52">
        <div className="text-center lg:text-left lg:max-w-md space-y-5">
          <h1 className="text-3xl font-bold text-black">
            Digital Factory Now at Cairo!
          </h1>
          <p className="text-lg text-black">
            Boubyan Digital Factory offers a great potential for growth and
            development in a unique environment driven by a strong culture of
            digital innovation.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-4">
            Join us today
          </button>
        </div>
      </div>
      <></>
      <div className="flex-shrink-0">
        <Image
          src={kuwait}
          alt="Boubyan Digital Factory Logo"
          width={1400}
          height={1400}
        />
      </div>
    </div>
  );
}

export default MainPage;
