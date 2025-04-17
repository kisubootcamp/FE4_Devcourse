import { Children } from 'react';
import Button from './components/Button';

function Text() {
  return <strong>HELLO</strong>;
}

export default function App() {
  return (
    <>
      <Button type="reset">
        <Text />
      </Button>
    </>
  );
}
