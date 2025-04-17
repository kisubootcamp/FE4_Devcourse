// 이벤트
// 이벤트 속성 HTML 태그에서 발생할 수 있는 이벤트 속성
// onclick
export default function Event() {
  // 매개변수가 있는 함수
  const myFunction = (message: string) => {
    alert(message);
  };
  return (
    <>
      {/* 1. 매개변수가 필요하지 않으면!!!
      함수를 호출할 때 myFunction()이 아니라 myFunction만 써주기 */}
      {/* <button onClick={myFunction}>버튼</button> */}

      {/* 2. 매개변수가 필요하면!!!!
      함수를 호출할 때 콜백함수를 만들고
       그 안에서 함수 호출(myFunction())해주기 */}
      <button
        onClick={() => {
          myFunction("hello");
        }}
      >
        버튼
      </button>
    </>
  );
}
