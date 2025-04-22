// ✅ 문제 3: 사용자 입력에 따라 API 요청하기 (가짜로)

// 🎯 조건
// 	•	input에 사용자가 이름을 입력하면, 해당 이름을 기반으로 “가짜 API 요청”을 한다
// 	•	useEffect로 입력값이 바뀔 때마다 1초 후에 가짜 fetch 실행 (setTimeout)
// 	•	입력 중에는 로딩 메시지 표시, 완료되면 “✅ {이름}님 정보 불러왔습니다” 출력

// 보너스:
// 	•	타이핑 중 이전 요청이 있다면 clearTimeout으로 중복 요청 방지

import { useEffect, useState } from "react";

export default function TestApiCall() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text === "") return;
    setLoading(true);

    const timer = setTimeout(() => {
      console.log(`✅ ${text}님 정보 불러왔습니다`);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-[300px] h-[44px] border border-gray-300 rounded-lg p-2"
        />
        <p className="text-2xl">
          {loading
            ? "로딩중..."
            : text === ""
            ? "이름을 입력해주세요"
            : `${text}님 정보`}
        </p>
      </div>
    </>
  );
}
