import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input type="number" className="input-style" disabled />
        {/* <Input
          type="checkbox"
          className="rounded-lg border border-[#4F4F4F] text-sm px-4 placeholder:text-[#acacac]"
        />
        <Input
          type="radio"
          className="rounded-lg border border-[#4F4F4F] text-sm px-4 placeholder:text-[#acacac]"
        /> */}
      </div>
    </>
  );
}
