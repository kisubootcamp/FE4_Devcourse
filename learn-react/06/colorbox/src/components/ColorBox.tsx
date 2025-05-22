export default function ColorBox({
  color,
  setColor,
}: {
  color: string;
  setColor: (value: string) => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
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
            value={color}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
}
