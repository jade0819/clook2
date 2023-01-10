import React from "react";
import Main from "../../Main/Main";
import useWeather from "../../../hooks/useWeather";
import Skeleton from "../UI/Skeleton";
import Today from "../../Today/Today";
import { useLocationContext } from "../../../contexts/LocationContext";

export default function Content() {
  const { location } = useLocationContext();
  const { toptmQuery, topsptQuery, isLoadingToptm, isLoadingTopspt } =
    useWeather(location);
  const { data: toptm } = toptmQuery;
  const { data: topspt } = topsptQuery;
  // console.log(toptm);
  // console.log(topspt);
  return (
    <div className="flex flex-col items-center w-full max-w-[992px]">
      {(isLoadingToptm || isLoadingTopspt) && <Skeleton />}
      {toptmQuery.isSuccess && topsptQuery.isSuccess && (
        <>
          <Main toptm={toptm} topspt={topspt} />
          <Today />
          <div className="flex items-center h-[500px]">스크롤 테스트</div>
        </>
      )}
    </div>
  );
}
