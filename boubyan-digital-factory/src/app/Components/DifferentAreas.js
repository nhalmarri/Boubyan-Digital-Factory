import React from "react";

function DifferentAreas() {
  return (
    <div>
      <div className=" mt-[-30px] px-4 text-[#54585A] w-3/4 mx-auto bg-white rounded-lg shadow-lg p-16 text-grey z-20">
        <div className="text-center font-bold text-2xl mb-6">
          Different areas of expertise, one powerful team
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="text-left mb-8">
              <div className="font-bold  mb-2">Design</div>
              <div className="text-xs font-light">
                We’re scientists, artists, communicators, technologists, and
                human-centered problem solvers focused on designing things all
                people will love.
              </div>
            </div>
            <div className="text-left mb-8">
              <div className="font-bold  mb-2">Product Ownership</div>
              <div className="text-xs font-light">
                We spend our days focused on driving acquisition, growth, and
                sales through our digital channels — all with a focus on
                data-driven optimization and personalization.
              </div>
            </div>
            <div className="text-left mb-8">
              <div className="font-bold  mb-2">AI & Machine Learning</div>
              <div className="text-xs font-light">
                We work to identify real-life problems and solve them with
                technology to change the way our customers bank, one release at
                a time.
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="text-left mb-8">
              <div className="font-bold mb-2">Software Development</div>
              <div className="text-xs font-light">
                We believe in the power of data over intuition, and we lead the
                charge in embedding this data-driven approach into everything
                our teams build.
              </div>
            </div>
            <div className="text-left mb-8">
              <div className="font-bold mb-2">Data and Analytics</div>
              <div className="text-xs font-light">
                We take ownership of business objectives and translate them into
                digital priorities, building excellence in the global digital
                customer experience.
              </div>
            </div>
            <div className="text-left mb-8">
              <div className="font-bold mb-2 ">Management</div>
              <div className="text-xs font-light ">
                The Platform Organization builds modern technology platforms
                that enable our teams to develop applications quickly, securely,
                and efficiently.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifferentAreas;
