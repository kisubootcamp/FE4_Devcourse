import Button from './components/html/Button';
export default function App() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <Button className="bg-[#4f4f4f]" type="button">
          Add
        </Button>
        <Button className="bg-[#ed4848]" type="button">
          Cancel
        </Button>
        <Button className="bg-[#7D48ED]" type="button">
          Success
        </Button>
      </div>
    </>
  );
}
