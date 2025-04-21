// import Button from "./components/html/Button";
import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        {/* <Button className="bg-[#4f4f4f]">Add</Button>
        <Button type="submit" className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="reset" className="bg-[#7d48ed]" disabled>
          Success
        </Button> */}

        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input className="input-style" disabled />
        {/* <Input
          type="checkbox"
          className="rounded-lg border border-[#4f4f4f] text-sm px-4 placeholder:text-[#acacac]"
        /> */}
      </div>
    </>
  );
}
