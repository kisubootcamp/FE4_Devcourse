// export default function User({
//   //   user
//   id,
// }: //name,
// //age,
// {
//   //user{id:number;name:string;age:number;}
//   id: number;
//   //   name: string;
//   //   age: number;
//   clickHandler: () => void;
// }) {
//   return (
//     <>
//       {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
//       <h1>{id}</h1>
//       {/* <h1>{name}</h1>
//       <h1>{age}</h1> */}
//       {/* 스프레드 연산자로 App.tsx에서 나타냈다면 객체의 일부만 받아와도됨 (명확한 객체 속 속성이 명시되어있지 않으므로)*/}
//       <button onClick={clickHandler}>클릭</button>
//     </>
//   );
// }

export default function User({
  id,
  name,
  age,
  clickHandler,
}: {
  id: number;
  name: string;
  age: number;
  clickHandler?: () => void;
}) {
  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {clickHandler && <button onClick={clickHandler}>클릭</button>}
    </>
  );
} //if문보다 깔끔함
