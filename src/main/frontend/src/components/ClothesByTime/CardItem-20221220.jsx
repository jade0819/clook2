import React from "react";
import { getClothesImages } from "../../util/getClothesImages";

export default function CardItem({ clothes, selected }) {
  return (
    <>
      <div className="flex flex-col items-center">
        {getClothesImages(clothes, "80px", selected)}
        <span className="mt-3">{clothes}</span>
      </div>
    </>
  );
}
