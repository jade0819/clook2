import React from "react";
import useFetch from "../../../hooks/useFetch";
import Main from "../../Main/Main";
import Skeleton from "../UI/Skeleton";

export default function Content() {
  const { data, loading, error } = useFetch("all", "");
  const toptm = data ? data.toptm : null;
  const topspt = data ? data.topspt : null;
  console.log(toptm, topspt);
  // const toptm = null,
  //   topspt = null;

  return (
    <div className="flex flex-col items-center w-full max-w-[992px]">
      {loading && <Skeleton />}
      {!loading && data && (
        <>
          <Main toptm={toptm} topspt={topspt} />
          <div className="flex items-center h-[500px]">스크롤 테스트</div>
        </>
      )}
    </div>
  );
}
