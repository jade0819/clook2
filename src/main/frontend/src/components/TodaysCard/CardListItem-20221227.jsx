import React from "react";
import { getWeatherImages } from "../../util/getWeatherImages";

export default function CardListItem({
  header,
  title,
  stationName,
  updateTime,
  children,
}) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex text-xl leading-[150%] font-semibold text-brand">
        <img
          className="mr-3 my-auto"
          src={getWeatherImages("cardIcon", title)}
          alt={title}
        />
        <span>
          {header === "sunset" ? "오늘" : "현재"} {title}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center text-2xl leading-[150%] font-semibold text-brand">
        {children}
      </div>
      <div className="flex justify-between items-center text-base leading[1.188rem] font-normal">
        {stationName && (
          <span className="text-[#2563EB]">측정소: {stationName}</span>
        )}
        {updateTime && (
          <span className="text-[#9CA3AF]">{updateTime}시 업데이트</span>
        )}
        {!stationName && !updateTime && <div className="h-2"></div>}
      </div>
    </div>
  );
}
