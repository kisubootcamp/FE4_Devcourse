// 첫 번째 방법
// export default function User(props: { name: string; age: number }) {
//   console.log(props);
//   return (
//     <h1>
//       User: {props.name} / {props.age}
//     </h1>
//   );
// }

// 두 번째 방법 (실무에서 가장 많이 쓰이는 방법)
export default function User({ name, age }: { name: string; age: number }) {
  return (
    <h1>
      User: {name} / {age}
    </h1>
  );
}

// 세 번째 방법
// export default function User(props: { name: string; age: number }) {
//   const { name, age } = props;
//   return (
//     <h1>
//       User: {name} / {age}
//     </h1>
//   );
// }
