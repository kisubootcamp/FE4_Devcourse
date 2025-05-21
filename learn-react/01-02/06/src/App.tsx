export default function App() {
  return (
    <>
      <h1 className="nanumpen">나눔펜 NanumPen</h1>
    </>
  );
}

// tailwind는 learning-curve가 높다
// 코드가 지저분해진다
// 를 단점으로 지적한다.
// tailwind는 커스텀 클래스를 제공함
// 컴포넌트 형태이기때문에 수정사항이 발생해도 수정하기 용이함
// 버셀에서 권장하는 CSS: CSS모듈, Tailwind
// 같은 성격의 속성을 적으면 가장 나중에 적은 속성이 적용된다.
// twMerge는 중복된 속성을 제거해준다.
// twMerge에서도 boolean으로 속성 활성화 여부를 지정해줄 수 있다.
