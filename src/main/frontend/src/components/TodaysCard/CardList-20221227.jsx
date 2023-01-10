import React from "react";
import Card from "../Shared/Card/Card";
import CardListItem from "./CardListItem";
import * as dateUtil from "../../util/dateUtil";
import * as tscFormat from "../../util/todaysCardFormat";

export default function CardList({ card, uv, air, sun }) {
  // card - 바람 방향: vec / 풍속: wsd
  // card - 습도: reh
  // card - 강수량: pcp
  // sun - 일출: sunrise / 일몰: sunset
  // air - 미세먼지: pm10Grade1h / 초미세: pm25Grade1h
  // air - 측정소: stationName / 시간: dataTime
  // uv - 자외선: h0~h24

  const currentHour = dateUtil.currentHour();
  const data = tscFormat.compoundCardData(card, uv, air, sun, currentHour);

  const updateTime = dateUtil.currentHour() + 1;
  const pmUpdateTime = dateUtil.hourFormat(air.dataTime) + 1;

  return (
    <div className="flex flex-row flex-wrap justify-evenly content-start">
      <Card styles="w-[19.313rem] h-[15rem] p-5 mb-10">
        <CardListItem
          header="pm"
          title="미세먼지"
          stationName={air?.stationName}
          updateTime={pmUpdateTime}
        >
          <div>
            <span className="text-2xl leading-normal text-blue-600">
              미세먼지
            </span>{" "}
            -{" "}
            <span
              className={`text-[1.875rem] leading-normal ${tscFormat.changeColor(
                air.pm10Grade1h
              )}`}
            >
              {tscFormat.getPmFormat(air.pm10Grade1h)}
            </span>
          </div>
          <div>
            <span className="text-2xl leading-normal text-blue-600">
              초미세먼지
            </span>{" "}
            -{" "}
            <span
              className={`text-[1.875rem] leading-normal ${tscFormat.changeColor(
                air.pm25Grade1h
              )}`}
            >
              {tscFormat.getPmFormat(air.pm25Grade1h)}
            </span>
          </div>
        </CardListItem>
      </Card>

      <Card styles="w-[19.313rem] h-[15rem] p-5  mb-10">
        <CardListItem header="uv" title="자외선" updateTime={updateTime}>
          <span
            className={`text-[2.25rem] leading-normal mb-2 ${tscFormat.changeColor(
              tscFormat.getUvFormat(uv.h0)
            )}`}
          >
            {tscFormat.getUvFormat(uv.h0)}
          </span>
          <span className="text-xl leading-normal text-blue-600">
            {uv.h0}mm
          </span>
        </CardListItem>
      </Card>

      <Card styles="w-[19.313rem] h-[15rem] p-5  mb-10">
        <CardListItem header="wind" title="바람" updateTime={updateTime}>
          <span className={`text-[2.25rem] leading-normal mb-2`}>
            {tscFormat.getWindFormat(card.wsd)}
          </span>
          <span className="text-xl leading-normal text-blue-600">
            {card.vec} - {card.wsd}m/s
          </span>
        </CardListItem>
      </Card>

      <Card styles="w-[19.313rem] h-[15rem] p-5  mb-10">
        <CardListItem header="humidity" title="습도" updateTime={updateTime}>
          <span className={`text-[2.25rem] leading-normal`}>{card.reh}%</span>
        </CardListItem>
      </Card>

      <Card styles="w-[19.313rem] h-[15rem] p-5  mb-10">
        <CardListItem header="pcp" title="강수량" updateTime={updateTime}>
          <span className={`text-[2.25rem] leading-normal`}>
            {card.pcp === "강수없음" ? 0 : card.pcp}mm
          </span>
        </CardListItem>
      </Card>

      <Card styles="w-[19.313rem] h-[15rem] p-5  mb-10">
        <CardListItem header="suns" title="일출/일몰">
          <div>
            <span className="text-2xl leading-normal text-blue-600">일출</span>{" "}
            -{" "}
            <span className={`text-[1.875rem] leading-normal`}>
              {dateUtil.timeFormat(sun.sunrise)}
            </span>
          </div>
          <div>
            <span className="text-2xl leading-normal text-blue-600">일몰</span>{" "}
            -{" "}
            <span className={`text-[1.875rem] leading-normal`}>
              {dateUtil.timeFormat(sun.sunset)}
            </span>
          </div>
        </CardListItem>
      </Card>
    </div>
  );
}
