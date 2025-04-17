export default function User({ name, age }: { name: string; age: string }) {
  return (
    <h1>
      User: {name} / {age}
    </h1>
  );
}
// export default function User(props: { name: string; age: string }) {
//   const {name,age} =  props
//   return (
//     <h1>
//       User: {props.name} / {props.age}
//     </h1>
//   );
// }
