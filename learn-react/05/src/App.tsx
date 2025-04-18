import Input from './components/Input';
import Button from './components/Button';
export default function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="border border-[#4F4F4F] flex flex-col w-[375px] px-5 mt-20 ml-30 rounded-lg">
          <h1 className="text-2xl font-[600] text-[#4F4F4F] mb-2 mt-8 ">
            Login Into App
          </h1>
          <h3 className="font-[300] text-[#4F4F4F] mb-4">
            Please enter your details to continue.
          </h3>
          <div className="flex flex-col">
            <Input
              type="email"
              placeholder={'someone@example.com'}
              style="mb-4"
            />
            <Input type="password" placeholder="Enter Password" />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <input type="checkbox" className="w-3 h-3" />
            <label className="ml-2 text-[14px]">
              I agree with <span className="font-bold">terms</span> and{' '}
              <span className="font-bold">policies</span>.
            </label>
          </div>
          <div className="flex flex-col">
            <Button style="bg-[#4F4F4F] text-[#F5F5F5] mb-5">Log In</Button>
            <Button style="border border-[#4F4F4F] text-[#4F4F4F] mb-9">
              Go To Sign Up
            </Button>
          </div>
        </div>

        <div className="border border-[#4F4F4F] flex flex-col w-[375px] px-5 mt-20 ml-30 rounded-lg">
          <h1 className="text-2xl font-[600] text-[#4F4F4F] mb-2 mt-8 ">
            Sign Into App
          </h1>
          <h3 className="font-[300] text-[#4F4F4F] mb-4">
            Please enter your details to continue.
          </h3>
          <div className="flex flex-col">
            <Input type="text" placeholder="Enter Your Name" style="mb-4" />

            <Input
              type="email"
              placeholder={'someone@example.com'}
              style="mb-4"
            />
            <Input type="password" placeholder="Enter Password" />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <input type="checkbox" className="w-3 h-3" />
            <label className="ml-2 text-[14px]">
              I agree with <span className="font-bold">terms</span> and{' '}
              <span className="font-bold">policies</span>.
            </label>
          </div>
          <div className="flex flex-col">
            <Button style="bg-[#4F4F4F] text-[#F5F5F5] mb-5">Sign In</Button>
            <Button style="border border-[#4F4F4F] text-[#4F4F4F] mb-9">
              Go To Log In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
