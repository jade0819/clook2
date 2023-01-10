import React, { useState } from "react";
import Score from "./Score";
import Opinion from "./Opinion";
import CardMsg from "./CardMsg";
import letter from "../../../assets/imgs/icon/letter.png";

export default function Survey() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(null);
  const [scoreShow, setScoreShow] = useState(false);
  const [opinionShow, setOpinionShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);

  const handleOpinionShow = () => {
    setOpinionShow(true);
  };

  const handleSubmit = (type) => {
    if (!type) return;

    if (type === "score") {
      if (score > 0) {
        console.log("보내기 완료!");
        setScore(0);
        setScoreShow(false);
        setCardShow(true);
      }
    } else if (type === "opinion") {
      console.log("보내기 완료!");
      setOpinionShow(false);
      setCardShow(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setMessage(null);
    setScoreShow(false);
    setOpinionShow(false);
    setCardShow(false);
  };

  const handlePass = () => {
    handleReset();
  };

  const handleToggle = () => {
    if (scoreShow || opinionShow || cardShow) {
      handleReset();
    } else {
      setScoreShow(true);
    }
  };

  return (
    <div className="absolute bottom-0 w-full max-w-[1440px]">
      <div className="fixed bottom-[191px] flex flex-col items-end w-full max-w-[1350px] pointer-events-none">
        <div className="m-0 p-0 pointer-events-auto">
          {scoreShow && (
            <Score
              score={score}
              setScore={setScore}
              setScoreShow={setScoreShow}
              handleOpinionShow={handleOpinionShow}
              handlePass={handlePass}
              handleSubmit={handleSubmit}
            />
          )}
          {opinionShow && (
            <Opinion
              opinionShow={opinionShow}
              setOpinionShow={setOpinionShow}
              message={message}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
            />
          )}

          {cardShow && (
            <CardMsg cardShow={cardShow} setCardShow={setCardShow} />
          )}
        </div>

        <button
          className="w-[100px] h-[100px] mt-5 bg-brand rounded-full cursor-pointer pointer-events-auto"
          onClick={handleToggle}
        >
          <img src={letter} alt="" />
        </button>
      </div>
    </div>
  );
}
