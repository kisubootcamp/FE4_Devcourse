// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보들
// 타입스크립트에 제공하기 위해 사용하는 파일 형식

// 이벤트
// 이벤트 속성 HTML 태그에
export default function User({ message, count, isVisible, tags, user, myF }: UserProps) {
  const con = () => console.log('22');
  //onClick의 e는 React.MouseEvent<HTMLButtonElement>
  //(e) => changeHandler(e)로 타입확인 가능
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>
        {message} / {count} / {isVisible.toString()}
      </h1>
      <h1>{tags}</h1>
      <h1>
        {user.id} / {user.name}
      </h1>
      {/* 매개변수 X */}
      <button onClick={con}>클릭</button>
      {/* 매개변수 O */}
      <button onClick={() => myF('ㅇㅇ')}>클릭</button>
      <input type='text' onChange={changeHandler} />
    </>
  );
}
