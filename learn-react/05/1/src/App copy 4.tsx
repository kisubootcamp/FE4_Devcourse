import Button from "./components/html/Button";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Button type="button" className="bg-[#4F4F4F]">
          Add
        </Button>
        <Button type="submit" className="bg-[#ed4848]">
          Cancel
        </Button>
        <Button type="reset" className="bg-[#7D48ED]" disabled>
          Sucess
        </Button>
        <Button>Button</Button>
      </div>
    </>
  );
}
