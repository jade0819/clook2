import React from "react";
import useSVGComponent from "../../hooks/useSVGComponent";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center gap-8 w-full h-[100px] py-[2.375rem] text-base font-medium leading-[1.375rem] text-white bg-brand">
      {useSVGComponent("logo", "20px", true)}
      <span>V1.0</span>
      <span>Team. Clook</span>
      <span>team.clook@gmail.com</span>
      <span>날씨: 기상청</span>
      <span>대기: 한국환경공단(에어코리아)</span>
      <span>지역: 카카오</span>
    </footer>
  );
}
