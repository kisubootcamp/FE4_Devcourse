// 들어오는 매개변수는 props 객체
export default function User(props: { name: string; age: number }) {
  // User({name, age}: {name: string, age: string}) 구조 분해 할당
  console.log(props);
  return (
    // 컴포넌트의 속성(properties)으로 데이터를 전달
    // 컴포넌트의 properties로 데이터를 전달
    // 컴포넌트의 props로 데이터를 전달
    // props 객체
    <h1>
      User: {props.name} / {props.age}
      {/* function이 app에서 name과 age값을 받아옴 */}
    </h1>
  );
}
