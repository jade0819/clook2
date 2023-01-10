import React from "react";
import { useLocationContext } from "../../contexts/LocationContext";
import useWeather from "../../hooks/useWeather";
import Section from "../Shared/Section/Section";
import TodaySkeleton from "../Shared/UI/TodaySkeleton";
import XScrollContainer from "../Shared/ScrollConteiner/XScrollContainer";
import Card from "./Card";
import CardItem from "./CardItem";
import fakeData from "./clothesData.json";

export default function ClothesByTime() {
  // const { location } = useLocationContext();
  // const queryResults = useWeather(["clothes"], location, "");
  // const { isLoading, status, data } = queryResults[0];

  const data = fakeData;
  const isLoading = false;
  const status = "success";

  return (
    <Section>
      {isLoading && <TodaySkeleton />}
      {!isLoading && status === "success" && (
        <>
          <span className="inline-block text-4xl leading-[150%] font-bold text-black mb-10">
            시간대별 옷차림
            {/* 0~3, 3~6, 6~9, 9~12, 12~15, 15~18, 18~21, 21~0 */}
          </span>

          <div className=" w-full h-[315px] px-3">
            <XScrollContainer>
              {data.map((item, index) => (
                <Card selected={item.m === "현재" ? "seleced" : ""}>
                  <span className="min-w-[160px] h-10 flex items-center justify-center text-xl font-semibold text-brand bg-blue-100 rounded-[20px]">
                    {"오전 m시 "}
                  </span>
                  <div className="flex justify-between items-center w-full">
                    {item.clothes1 && <CardItem clothes={item.clothes1} />}
                    {item.clothes2 && <CardItem clothes={item.clothes2} />}
                    {/* {item.clothes3 && <CardItem clothes={item.clothes3} />} */}
                    {index === 1 && <CardItem clothes={item.clothes2} />}
                  </div>
                </Card>
              ))}
            </XScrollContainer>
          </div>
        </>
      )}
    </Section>
  );
}
