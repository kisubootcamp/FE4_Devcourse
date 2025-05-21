// import Button from "./html/button";
import Input from "./html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        {/* <Button type="button" className=" bg-[#4f4f4f]">
          Add
        </Button>
        <Button type="submit" className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="reset" className="bg-[#7D48ED]">
          Success
        </Button> */}
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input type="number" className="input-style" disabled />
        <Input
          type="week"
          className="input-style"
          // disabled
        />
        <Input
          type="tel"
          className="input-style"
          // disabled
        />
      </div>
    </>
  );
}
