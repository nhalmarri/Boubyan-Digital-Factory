import React from "react";
import Image from "next/image";
import Image1 from "@/app/assets/people-pointing.svg";
import BigIdeas from "@/app/assets/big-ideas.svg";
import SomethingNew from "@/app/assets/something-new.svg";
import BeMentored from "@/app/assets/be-mentored.svg";
import CreateExperience from "@/app/assets/create-experiences.svg";

function RedBox() {
  return (
    <div className="relative bg-white flex flex-col items-center mt-10 ">
      {/* White and Red background split for image */}
      <div className="relative w-full">
        <div className="bg-white h-[200px]"></div>
        <div className="bg-red-600 h-[300px]"></div>
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] flex justify-center">
          <Image
            src={Image1}
            alt="People Pointing"
            width={618}
            height={467.84}
          />
        </div>
        <div className="bg-red-600">
          <span>. </span>
          {/* Content section with red background */}
          <div className="bg-red-600 text-white w-full py-10 px-5 text-center mt-[-200px]">
            <div className="font-extrabold text-2xl my-2 mb-4">
              You are here because you believe in your exceptional talent.
            </div>
            <div className="text-sm mb-10">
              <div>
                Boubyan Digital Factory offers a great potential for growth and
                development in a unique{" "}
              </div>
              environment driven by a strong culture of digital innovation.
            </div>

            {/* Grid Container for 4 Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start max-w-4xl mx-auto text-left">
              {/* Category 1 */}
              <div className="flex flex-col items-start">
                <Image src={BigIdeas} alt="Big Ideas" width={54} height={62} />
                <div className="font-semibold text-m mt-2 mb-4">Big Ideas</div>
                <div className="text-xs font-extralight">
                  We’re looking for problem-solvers, makers, and leaders who are
                  ready to roll up their sleeves and collaborate to ship
                  solutions to our customers.
                </div>
              </div>

              {/* Category 2 */}
              <div className="flex flex-col items-start">
                <Image
                  src={SomethingNew}
                  alt="Something New Everyday"
                  width={66.37}
                  height={66.65}
                />
                <div className="font-semibold text-m mt-2 mb-4">
                  Something New Everyday
                </div>
                <div className="text-xs font-extralight">
                  You’ll succeed not just in your day-to-day role but in your
                  career as a whole through mobility, cross-functional
                  development opportunities, and coaching.
                </div>
              </div>

              {/* Category 3 */}
              <div className="flex flex-col items-start">
                <Image
                  src={BeMentored}
                  alt="Be Mentored"
                  width={60}
                  height={59.99}
                />
                <div className="font-semibold text-m mt-2 mb-4">
                  Be Mentored
                </div>
                <div className="text-xs font-extralight">
                  You’ll learn from a wide variety of industry leaders,
                  developing solutions not only locally, but for the global
                  market alongside technology-focused teams in Kuwait.
                </div>
              </div>

              {/* Category 4 */}
              <div className="flex flex-col items-start">
                <Image
                  src={CreateExperience}
                  alt="Create Experiences"
                  width={58}
                  height={57.99}
                />
                <div className="font-semibold text-m mt-2 mb-4">
                  Create Experiences
                </div>
                <div className="text-xs font-extralight">
                  You'll create elegant digital experiences that let employees
                  and customers take charge and enable Boubyan to drive
                  meaningful change for every future.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RedBox;
