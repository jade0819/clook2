import { useLocationContext } from "../../../contexts/LocationContext";
import Main from "../../Main/Main";
import Skeleton from "../UI/Skeleton";
import ClothesByTime from "../../ClothesByTime/ClothesByTime";

export default function Content() {
  const { location } = useLocationContext();

  const { toptm, topspt } = useWeather(location);
  const isLoading = (toptm && toptm.isLoading) || (topspt && topspt.isLoading);
  const isSuccess = (toptm && toptm.isSuccess) || (topspt && topspt.isSuccess);

  return (
    <div className="flex flex-col items-center w-full max-w-[992px]">
      {!isLoading && isSuccess && (
        <>
          <Main toptm={toptm.data} topspt={topspt.data} />
          <ClothesByTime />
          <div className="flex items-center h-[500px]">스크롤 테스트</div>
        </>
      )}
    </div>
  );
}
