import React from "react";
import Main from "../../Main/Main";
import ClothesByTime from "../../ClothesByTime/ClothesByTime";
import Today from "../../Today/Today";
import TodayCards from "../../TodayCards/TodayCards";
import { useLocationContext } from "../../../contexts/LocationContext";
import useLocation from "../../../hooks/useLocation";
import MainSkeleton from "../UI/MainSkeleton";
import ClothesByTimeSkeleton from "../UI/ClothesByTimeSkeleton";
import TodaySkeleton from "../UI/TodaySkeleton";
import TodayCardsSkeleton from "../UI/TodayCardsSkeleton";
import ServiceEvaluation from "../ServiceEvaluation/ServiceEvaluation";
import Fetch from "../../../Fetch";

export default function Content() {
  const { location } = useLocationContext();
  const { locationQuery } = useLocation(location);
  const { status, isLoading } = locationQuery;

  return (
    <div className="flex flex-col items-center w-full global-max-w overflow-hidden">
      {isLoading && (
        <>
          <MainSkeleton />
          <ClothesByTimeSkeleton />
          <TodaySkeleton />
          <TodayCardsSkeleton />
        </>
      )}
      {status === "success" && (
        <>
          <Main />
          <ClothesByTime />
          <Today />
          <TodayCards />
          <ServiceEvaluation />
        </>
      )}
      {/* <Fetch /> */}
    </div>
  );
}
