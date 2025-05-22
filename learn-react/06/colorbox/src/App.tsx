import { useState } from 'react';
import ColorBox from './components/ColorBox';

export default function App() {
  const [color, setColor] = useState('');
  return (
    <>
      <ColorBox color={color} setColor={setColor} />
    </>
  );
}
