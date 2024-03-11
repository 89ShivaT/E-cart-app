import React from "react";

function Banner() {
  return (
    <>
      <section>
        <div className="main-banner bg-[#181818] text-white h-screen py-14">
          <div className="container mx-auto">
            <div className="left-data relative">
              <h1 className="text-8xl font-bold">
                UI<span className="text-[#a460f9]">.</span>
              </h1>
              <h2 className="uppercase text-3xl  absolute left-[-50px] mr-5 -rotate-90 mt-20   text-white font-normal">
                Beginner's
              </h2>
            </div>
            {/* left-data end here */}
           
            {/* center-data end here */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
