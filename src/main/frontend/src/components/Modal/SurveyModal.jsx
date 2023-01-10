import React, { useEffect, useState } from "react";
import Modal from "../Shared/Modal/Modal";
import ScoreCard from "../Shared/Survey/ScoreCard";
import useSurvey from "../../hooks/useSurvey";
import OpinionCard from "../Shared/Survey/OpinionCard";
import MsgCard from "../Shared/Survey/MsgCard";

export default function SurveyModal({
  onCloseModal,
  custom,
  position,
  styles,
  addSurvey,
}) {
  const [data, setData] = useState({ num: -1, comment: "" });
  const [scoreCardShow, setScoreCardShow] = useState(true);
  const [opinionCardShow, setOpinionCardShow] = useState(false);
  const [msgCardShow, setMsgCardShow] = useState(false);

  const handleSubmit = () => {
    setOpinionCardShow(false);
    setMsgCardShow(true);

    addSurvey(data, {
      onError: (e) => {
        console.log(
          `SurveyModal - code: ${e.response.status} / params: { num: ${data.num}, comment: ${data.comment} }`
        );
      },
    });
  };

  useEffect(() => {
    if (data.num > -1) handleSubmit();
  }, [data.comment]);

  return (
    <Modal
      onCloseModal={onCloseModal}
      custom={custom}
      position={position}
      styles={styles}
    >
      {scoreCardShow && (
        <ScoreCard
          onCloseModal={onCloseModal}
          data={data}
          setData={setData}
          setScoreCardShow={setScoreCardShow}
          setOpinionCardShow={setOpinionCardShow}
        />
      )}
      {opinionCardShow && (
        <OpinionCard
          setData={setData}
          handleSubmit={handleSubmit}
          // clickEventNone={clickEventNone}
        />
      )}
      {msgCardShow && (
        <MsgCard
          onCloseModal={onCloseModal}
          msgCardShow={msgCardShow}
          setMsgCardShow={setMsgCardShow}
        />
      )}
    </Modal>
  );
}
