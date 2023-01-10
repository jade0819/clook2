import React from "react";
import Section from "../Shared/Section/Section";
import { useLocationContext } from "../../contexts/LocationContext";
import Skeleton from "../Shared/UI/Skeleton";
import NotFound from "../Shared/Error/NotFound";
import useWeather from "../../hooks/useWeather";
import Card from "../Shared/Card/Card";
import Icon from "../Shared/Icon/Icon";
import CurrentWeather from "./CurrentWeather";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { sentenceFormat } from "../../util/sentenceFormat";

export default function Main() {
  const { location, isSucc } = useLocationContext();

  const queryResults = useWeather(["toptm", "topspt"], location, "");
  const toptm = queryResults.length > 0 ? queryResults[0] : null;
  const topspt = queryResults.length > 0 ? queryResults[1] : null;

  const isLoading = queryResults?.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);
  const status = queryResults.every((query) => query.status === "success");

  return (
    <>
      {(!isSucc || isLoading) && <Skeleton />}
      {isError && <NotFound />}
      {!isError && !isLoading && status && isSucc && (
        <Section>
          {toptm && topspt && (
            <>
              <CurrentWeather toptm={toptm.data} topspt={topspt.data} />
              {toptm.hasOwnProperty("time") && toptm.hasOwnProperty("time") && (
                <Card styles="relative">
                  <div className="absolute top-1/2 left-6 -translate-y-2/4">
                    <Icon icon={faBell} size={26} />
                  </div>
                  <span className="text-2xl text-brand font-medium">
                    {toptm.data.time.map((item, index) => {
                      return `${sentenceFormat(item)} ${
                        toptm.data.message[index]
                      }${
                        toptm.data.time.length - 1 === index
                          ? " 소식이 있어요."
                          : ", "
                      }`;
                    })}
                  </span>
                </Card>
              )}
            </>
          )}
        </Section>
      )}
    </>
  );
}
