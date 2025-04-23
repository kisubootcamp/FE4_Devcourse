import Input from "./components/html/Input";

export default function App() {
  return (
    <div className="item-middle">
      <Input
        type="text"
        className="input-style"
        placeholder="Enter your name"
      />
      <Input type="number" className="input-style" disabled />
      <Input
        type="password"
        className="input-style"
        placeholder="Enter your password"
      />
    </div>
  );
}
