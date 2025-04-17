import Sub from "./components/Sub";
import { Title, Button } from "./css/card";

export default function App() {
  return (
    <>
      <Title>App Component</Title>
      <Button $primary>My Button</Button>
      <Button>Your Button</Button>
      <Sub />
    </>
  );
}
