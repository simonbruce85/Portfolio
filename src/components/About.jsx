import React from "react";
import Backimage from "../assets/backgr.jpg"

function About() {
  return (
    <div name="about" className="w-full h-screen pb-32  bg-[#793434] text-gray-300" style={{ backgroundImage: `url(${Backimage})` }} id="backimgabout">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 px-4">
          <div className="border-l-4 border-[#00F5A0]">
            <p className="px-2">
              Hello. I am Simon, nice to meet you. Please take a look around
              alksdhfsf
              asdfas
              dfasd
              vasdvasdvasdvasd v dfvsdfvsdfv sdfvmsdfvlkvmdv dfvsjkdfnvsd fvkjsdfnvlkjsdffv dfvksdjfvnsdf vdf
              sdfvlknsdvlknfdv dfkvjnsdfvnsdfv
              sdfvnjksdfvnfjdvnjksdfnv skjdfnvskjkns skjfvns sksksknvksjnfdvjksndfv
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
