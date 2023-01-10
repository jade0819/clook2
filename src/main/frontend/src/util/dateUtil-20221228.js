import dayjs from "dayjs";

export function dateFormat(value) {
  if (!value) return;

  const date = dayjs(value);
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const week = `(${dayOfTheWeek[date.format("d")]})`;

  return date.format("MM월 DD일 ") + week;
}

export function currentHour() {
  const now = dayjs();
  // console.log(now.hour());
  return now.hour();
}

export function hourFormat(date) {
  if (!date) return;

  const word = date.split(" ");
  const hour = Number(word[1].slice(0, 2));

  return hour;
}

export function clothesTime(value) {
  if (!value) return;

  let hour = Number(value) / 100;
  hour = hour === 0 ? 24 : hour;

  // 0~3, 3~6, 6~9, 9~12, 12~15, 15~18, 18~21, 21~0
  let startHour = hour - 3;
  startHour = startHour > 12 ? startHour - 12 : startHour;

  const endHour = hour > 12 ? hour - 12 : hour;

  if (0 <= hour && hour < 13) return `오전 ${startHour} ~ ${endHour}시`;
  else return `오후 ${startHour}~${endHour}시`;
}

export function timeFormat(time) {
  if (!time) return;

  time = time.toString();

  const hour = time.slice(0, 2);
  const minute = time.slice(2, time.length);
  return `${hour < 12 ? "오전" : "오후"} ${hour}:${minute}`;
}
