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
}) {
  const [data, setData] = useState({ num: -1, comment: "" });
  const [scoreCardShow, setScoreCardShow] = useState(true);
  const [opinionCardShow, setOpinionCardShow] = useState(false);
  const [msgCardShow, setMsgCardShow] = useState(false);
  const [clickEventNone, setClickEventNone] = useState(false);

  const { mutate: addSurvey } = useSurvey();

  const handleSubmit = () => {
    console.log("클릭이벤트");
    setClickEventNone(true);

    addSurvey(data, {
      onSuccess: () => {
        setClickEventNone(false);
        setOpinionCardShow(false);
        setMsgCardShow(true);
      },
      onError: (e) => {
        console.log(
          `SurveyModal - 에러코드: ${e.response.status} / params: { num: ${data.num}, comment: ${data.comment} }`
        );
        setOpinionCardShow(false);
        setMsgCardShow(true);
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
          clickEventNone={clickEventNone}
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
