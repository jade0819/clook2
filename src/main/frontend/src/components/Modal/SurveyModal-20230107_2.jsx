import React, { useEffect, useState } from "react";
import Modal from "../Shared/Modal/Modal";
import ScoreCard from "../Shared/Survey/ScoreCard";
import useSurvey from "../../hooks/useSurvey";
import OpinionCard from "../Shared/Survey/OpinionCard";

export default function SurveyModal({
  onCloseModal,
  custom,
  position,
  styles,
}) {
  // const [data, setData] = useState({ score: -1, opinion: "" });
  const [data, setData] = useState({ num: -1, comment: "" });
  const [scoreCardShow, setScoreCardShow] = useState(true);
  const [opinionCardShow, setOpinionCardShow] = useState(false);
  const [msgCardShow, setMsgCardShow] = useState(false);

  // const { addSurvey } = useSurvey();
  const { addSurvey, error } = useSurvey();
  // const { mutate: addSurvey, isError } = useSurvey();

  const handleSubmit = () => {
    // const { score, opinion } = data;
    // if (score === -1 && opinion === "") return;

    // const params = { num: score.toString(), comment: opinion };
    console.log(JSON.stringify(data));

    // addSurvey.mutate(JSON.stringify(params));
    addSurvey.mutate(JSON.stringify(data));
    // addSurvey(JSON.stringify(data));
    // addSurvey(JSON.stringify(data), {
    //   onError: (e) => {
    //     console.log("Survey모달의 에러");
    //     console.log(e.response.status);
    //   },
    // });

    // 통신 완료하면 카드 닫고, 성공 메시지 띄우기
    setOpinionCardShow(false);
  };

  useEffect(() => {
    if (error) {
      console.log(`에러!!!!\n점수: ${data.num}\n의견: ${data.comment}`);
      // setMsgCardShow(true);
      console.log(error.response.status);
      onCloseModal();
    }
  }, [error]);

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
          // data={data}
          setData={setData}
          // setOpinionCardShow={setOpinionCardShow}
          handleSubmit={handleSubmit}
        />
      )}
    </Modal>
  );
}
