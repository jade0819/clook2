import React, { useEffect, useRef } from "react";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Message({ cardShow, setCardShow }) {
  const timerRef = useRef(null);

  useEffect(() => {
    console.log("시작");

    timerRef.current = setTimeout(() => {
      setCardShow((prev) => false);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => {
      console.log("클리어 타임");
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Card
      styles={`flex items-center justify-center w-[643px] px-9 py-5`}
      selected={true}
    >
      <div className="flex justify-start items-center w-full">
        <div className="text-[#D9D9D9] mr-6">
          <Icon icon={faCheck} size="2.438rem" />
        </div>
        <span className="text-white text-xl font-semibold leading-normal">
          소중한 의견 감사합니다!
        </span>
      </div>
      <div>
        <Icon icon={faTimes} size="1.563rem" />
      </div>
    </Card>
  );
}
