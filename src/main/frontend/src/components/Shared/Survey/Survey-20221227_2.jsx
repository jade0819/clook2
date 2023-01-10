import React, { useState } from "react";
import Score from "./Score";
import Opinion from "./Opinion";
import CardMsg from "./CardMsg";
import letter from "../../../assets/imgs/icon/letter.png";
import useSurvey from "../../../hooks/useSurvey";

export default function Survey() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(null);
  const [scoreShow, setScoreShow] = useState(false);
  const [opinionShow, setOpinionShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);

  const { addSurvey } = useSurvey();

  const handleOpinionShow = () => {
    setOpinionShow(true);
  };

  const handleSubmit = (type) => {
    if (!type) return;

    if (type === "score") {
      if (score > 0) {
        setScore(0);
        setScoreShow(false);
        setCardShow(true);

        const num = score > 0 ? score.toString() : "";
        console.log("보내기!!");
        console.log({ num: num, comment: "" });
        addSurvey.mutate({ num: num, comment: "" });
      }
    } else if (type === "opinion") {
      setOpinionShow(false);
      setCardShow(true);

      console.log("보내기!!");
      console.log({ num: "", comment: message });
      addSurvey.mutate({ num: "", comment: message });
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
