// ✅ 문제 2: 윈도우 사이즈 추적하기 📐

// 🎯 조건
// 	•	useEffect를 사용해서 브라우저 resize 이벤트를 감지해라
// 	•	window.innerWidth를 상태로 저장해서 화면에 출력
// 	•	언마운트 시 resize 이벤트 제거해라

import { useEffect, useState } from "react";

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Width: {windowSize.w}</p>
        <p className="text-2xl">Height: {windowSize.h}</p>
      </div>
    </>
  );
}
