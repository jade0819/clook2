export function getPmFormat(pm) {
  if (!pm) return;

  if (pm === "1") return "좋음";
  else if (pm === "2") return "보통";
  else if (pm === "3") return "나쁨";
  else if (pm === "4") return "매우 나쁨";
  else return;
}

export function getUvFormat(uv) {
  if (!uv) return;

  uv = Number(uv);

  if (0 <= uv && uv < 3) return "낮음";
  else if (3 <= uv && uv < 6) return "보통";
  else if (6 <= uv && uv < 8) return "높음";
  else if (8 <= uv && uv < 11) return "매우 높음";
  else if (11 <= uv) return "위험";
  else return;
}

export function getWindFormat(wind) {
  if (!wind) return;

  wind = Number(wind);

  if (0 <= wind && wind < 3) return "적음";
  else if (3 <= wind && wind < 6) return "적당";
  else if (6 <= wind && wind < 8) return "많이";
  else if (8 <= wind && wind < 11) return "매우 많이";
  else if (11 <= wind) return "돌풍";
  else return;
}

export function changeColor(value) {
  if (!value) return;

  if (value === "1" || value === "낮음") return "text-green"; // 좋음
  else if (value === "2" || value === "보통") return "text-yellow"; // 보통
  else if (value === "3" || value === "높음") return "text-red"; // 나쁨
  else if (value === "4" || value === "매우 높음")
    return "text-rose-700"; // 매우 나쁨
  else if (value === "위험") return "text-rose-900"; // 위험
  else return;
}
