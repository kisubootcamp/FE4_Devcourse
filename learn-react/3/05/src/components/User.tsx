//App.tsx 에서 넘어오는 데이터, props 객체가 들어옴

// export default function User(props: { name: string; age: string }) {
//실무에서는 아래와 같이 구조분해할당을 사용
export default function User({ name, age }: { name: string; age: number }) {
  return (
    <>
      <h1>
        User:{name} / {age}
      </h1>
    </>
  );
}
//
// export default function User({ name, age }: { name: string; age: string }) {
//   return (
//     <>
//       <h1>
//         User:{name} / {age}
//       </h1>
//     </>
//   );
// }
