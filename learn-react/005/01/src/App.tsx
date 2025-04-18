// import Button from "./components/html/Button";
import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        <Input type="text" className="input-style" placeholder="Enter Your Name" />
        <Input type="password" className="input-style" placeholder="Enter Your Name" />
        <Input type="number" className="input-style" placeholder="Enter Todo List" disabled />
      </div>
    </>
  );
}
