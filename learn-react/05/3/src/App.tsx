// import Button from "./components/html/Button";

import Input from "./components/html/Input";

export default function App() {
  // return (
  //   <>
  //     <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
  //       <Button className='bg-[#4f4f4f]'>Add</Button>
  //       <Button className='bg-[#ed4848]'>Cancle</Button>
  //       <Button className='bg-[#7d48ed]'>Success</Button>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className='item-middle'>
        <Input type='text' className='input-style' />
        <Input type='password' className='input-style' />
        <Input className='input-style' disabled />
      </div>
    </>
  );
}
