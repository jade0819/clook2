import React, { useState, useRef, useEffect } from "react";
import PopupCard from "../../Card/PopupCard";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import Icon from "../../Icon/Icon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import letter from "../../../../assets/imgs/icon/letter.png";

export default function Survey() {
  const [buttonShow, setButtonShow] = useState(true);
  const [scoreShow, setScoreShow] = useState(false);
  const [opinionShow, setOpinionShow] = useState(false);
  const [msgShow, setMsgShow] = useState(false);
  const [score, setScore] = useState(0);
  const [opinionFlag, setOpinionFlag] = useState(false);
  const timerRef = useRef(null);

  const sendMessage = (value, e) => {
    e.preventDefault();

    timerRef.current = setTimeout(() => {
      setMsgShow(false);
      setButtonShow(value);
    }, 3000);
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  const scoreArr = Array(10)
    .fill()
    .map((value, index) => index + 1);

  const handleButtonShow = () => {
    setButtonShow(true);
  };

  const handleButtonhide = () => {
    setButtonShow(false);
    setScoreShow(true);
  };

  const handlePass = () => {
    setScore(0);
    setScoreShow(false);
    setOpinionShow(false);
    setMsgShow(false);
    handleButtonShow();
  };

  const handleClickScore = (item) => {
    setScore(item);
    if (!opinionFlag) {
      setOpinionShow(true);
    }
  };

  const handleSubmit = (type, e) => {
    if (!type) return;

    if (!msgShow) setMsgShow(true);

    if (type === "score") {
      setScoreShow(false);
      setScore(0);
      if (!opinionShow) {
        sendMessage(true, e);
      }
    } else if (type === "opinion") {
      setOpinionShow(false);
      if (!scoreShow) {
        sendMessage(true, e);
      }
    }
  };

  const handleClose = (type) => {
    if (!type) return;

    if (type === "score") {
      setScoreShow(false);
      setScore(0);
      if (!opinionShow) {
        setOpinionFlag(false);
        setButtonShow(true);
      }
    } else if (type === "opinion") {
      setOpinionShow(false);
      if (!scoreShow) {
        setOpinionFlag(false);
        setButtonShow(true);
      }
    }
  };

  const buttonAnim = {
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 1,
      },
    },
  };

  const cardAnim = {
    hidden: {
      opacity: 0,
      y: 300,
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.5,
      },
    },
  };

  const msgAnim = {
    hidden: {
      opacity: 0,
      x: 300,
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      display: "block",
    },
  };

  //right-[80px] bottom-[162px]
  return (
    <div className="fixed w-inherit bottom-[170px] flex justify-end pr-[100px]">
      <div className="">
        <motion.div
          className="mb-5"
          variants={cardAnim}
          initial="hidden"
          animate={scoreShow ? cardAnim.visible : cardAnim.hidden}
        >
          <PopupCard
            title="이 서비스를 친구나 지인에게 얼마나 추천하고 싶은가요?"
            styles="w-[643px]"
            closeStyles="text-brand"
            onClick={() => handleClose("score")}
          >
            <div>
              <div className="flex justify-between w-full m-0 mt-4 mb-[0.625rem]">
                {scoreArr.map((item, index) => (
                  <Button
                    key={index}
                    item={item}
                    styles={`w-[2.813rem] h-[2.813rem] ${
                      score === item
                        ? "bg-brand text-white"
                        : "text-brand bg-blue-100"
                    }`}
                    onClickType={item}
                    onClick={handleClickScore}
                  />
                ))}
              </div>
              <div className="flex justify-between w-full text-[0.938rem] font-normal leading-[1.563rem] text-brand mb-6">
                <span>추천</span> <span>비추천</span>
              </div>
              <div className="flex justify-between w-full text-base font-semibold leading-[1.188rem]">
                <Button
                  item="좀 더 둘러보고 다시 올게요!"
                  styles="h-10 text-white bg-[#9CA3AF] px-6 hover:bg-[#81868d]"
                  onClick={handlePass}
                />
                <Button
                  item="보내기"
                  styles="h-10 text-white bg-blue-100 px-6"
                  onClick={(e) => {
                    handleSubmit("score", e);
                  }}
                />
              </div>
            </div>
          </PopupCard>
        </motion.div>

        <motion.div
          className="mb-5"
          variants={cardAnim}
          initial="hidden"
          animate={
            opinionShow && !opinionFlag ? cardAnim.visible : cardAnim.hidden
          }
        >
          <PopupCard
            title="점수를 주신 이유도 알려주세요!"
            styles="w-[643px]"
            closeStyles="text-brand"
            onClick={() => handleClose("opinion")}
          >
            <div className="flex flex-col text-2xl text-brand font-bold leading-10">
              <textarea
                className="w-full h-20 bg-blue-100 rounded-default"
                name=""
                id=""
                cols="3"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-end w-full mt-4">
              <Button
                item="보내기"
                styles="p-2"
                onClick={(e) => {
                  handleSubmit("opinion", e);
                }}
              />
            </div>
          </PopupCard>
        </motion.div>

        <motion.div
          className=""
          variants={msgAnim}
          initial="hidden"
          animate={msgShow ? msgAnim.visible : msgAnim.hidden}
        >
          <Card styles="w-[643px] px-9 py-5" selected={true}>
            <div className="flex justify-start items-center w-2/3">
              <div className="text-[#D9D9D9] mr-6">
                <Icon icon={faCheck} size="2.438rem" />
              </div>
              <span className="text-white text-xl font-semibold leading-normal">
                소중한 의견 감사합니다!
              </span>
            </div>
            <div className="w-1/3"></div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="w-[100px] h-[100px] mt-1 bg-transparent"
        variants={buttonAnim}
        initial="hidden"
        animate={buttonShow ? buttonAnim.visible : buttonAnim.hidden}
      >
        <button
          className="w-full h-full bg-brand rounded-full cursor-pointer"
          onClick={handleButtonhide}
        >
          <img src={letter} alt="" />
        </button>
      </motion.div>
    </div>
  );
}
