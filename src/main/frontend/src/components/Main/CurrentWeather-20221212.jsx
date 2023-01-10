import React from "react";
import { getWweatherImages } from "../../util/getWweatherImages";
import { dateFormat } from "../../util/dateFormat";

export default function CurrentWeather({ toptm, topspt }) {
  //pty, tmn, tmx, tmpl, fcstDate, fcstTime, ftime;
  //sky, t1h, tmpl, background, icon, character, fcstTime, ftime;

  return (
    <div
      className="flex w-full h-[400px] mt-6 mb-5"
      style={{
        backgroundImage: `url(${getWweatherImages(1, topspt.background)})`,
      }}
    >
      <div className="basis-1/2 flex flex-col justify-center items-center text-white">
        <div className="flex items-center my-2 mb-4 text-xl font-medium">
          <img
            className="w-10 h-9"
            src={getWweatherImages(3, topspt.icon)}
            alt=""
          />
          <span>{dateFormat(toptm.fcstDate)}</span>
        </div>
        <div className="flex items-center my-2 text-8xl font-normal">
          <span>{topspt.t1h}</span>
          <span>°C</span>
        </div>
        <div className="flex items-center my-2 ml-3 text-lg font-medium">
          {/* <div>
            최저<span className="ml-1">{toptm.tmn}</span>°C
          </div>
          <div>
            최고<span className="ml-1">{toptm.tmx}</span>°C
          </div> */}
          <span>최저 {toptm.tmn}</span>
          <span className="ml-1">최고 {toptm.tmx}</span>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-start">
        <img
          className="relative t-0 l-0 ml-5 animate-slow-bounce"
          src={getWweatherImages(2, topspt.character)}
          alt=""
        />
      </div>
    </div>
  );
}
