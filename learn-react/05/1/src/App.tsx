// import Button from './components/html/Button';

import Input from './components/html/Input';

export default function App() {
  return (
    <>
      <div className="input-middle">
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
      </div>
    </>
  );
}

//  <Button type="button" className="bg-[#4f4f4f]">
//         Add
//       </Button>
//       <Button type="button" className="bg-[#ed4848]">
//         Cancel
//       </Button>
//       <Button type="button" className="bg-[#7D48ED]" disabled>
//         Success
//  </Button>
