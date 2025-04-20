import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-[20px]">
        <Button type="button" className="bg-[#4f4f4f]">
          Add
        </Button>
        <Button type="submit" className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="reset" disabled className="bg-[#7d48ed]">
          Success
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center mt-[20px] gap-4">
        <Input
          type="text"
          className="rounded-lg border border-[#4f4f4f] text-sm px-4 placeholder:text-[#acacac]"
        />
        <Input
          type="password"
          className="rounded-lg border border-[#4f4f4f] text-sm px-4 placeholder:text-[#acacac]"
        />
        <Checkbox />
      </div>
    </>
  );
}
