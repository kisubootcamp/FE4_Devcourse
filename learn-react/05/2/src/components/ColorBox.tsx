export default function ColorBox({
  color,
  onChange,
}: {
  color: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: color }}
          ></div>
          <input
            type="text"
            className="border border-slate-500 w-40 mt-2"
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
//답안
// export default function ColorBox() {
//   const [input, setInput] = useState("");
//   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };
//   return (
//     <>
//       <div className="item-middle">
//         <div className="flex flex-col">
//           <div
//             className="w-40 h-40 border border-slate-500"
//             style={{ backgroundColor: input }}
//           ></div>
//           <input
//             type="text"
//             className="border border-slate-500 w-40 mt-2"
//             value={input}
//             onChange={changeHandler}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
