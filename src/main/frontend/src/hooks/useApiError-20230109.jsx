import React, { useCallback } from "react";

export default function useApiError() {
  const handleError = useCallback((error) => {
    const httpStatus = error.response.status; // HTTP Status

    switch (httpStatus) {
      case 400:
        console.log("!! 400 에러!!"); // 클라이언트의 요청이 유효하지 않음. (url 잘못 등)
        break;
      case 403:
        console.log("!! 403 에러!!"); // 클라이언트가 권한 없음.
        break;
      case 404:
        console.log("!! 404 에러!!"); // 클라이언트가 요청한 자원이 존재하지 않음
        break;
      case 409:
        console.log("!! 409 에러!!"); // 클라이언트의 요청이 서버의 상태와 충돌이 발생한 경우
        break;
      case 429:
        console.log("!! 429 에러!!"); // 클라이언트가 일정 시간 동안 너무 많은 요청을 보낸 경우
        break;
      case 500:
        console.log("!! 500 에러!!"); // 서버 오류로 인해 요청 불가
        break;
      default:
        console.log("!! default : " + error.status);
        break;
    }
  }, []);

  return { handleError };
}
