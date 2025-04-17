import Button from './components/Button';
import CheckboxLabel from './components/CheckboxLabel';
import InputBox from './components/InputBox';
import LoginLayout from './components/LoginLayout';

export default function App() {
  return (
    <>
      <LoginLayout title='Login Into App' description='Please enter your details to continue.'>
        <InputBox placeholder='someone@example.com' />
        <InputBox placeholder='Enter Password' />
        <CheckboxLabel labelId='login' />
        <Button text='Log In' isBg={true} />
        <Button text='Go To Sign up' isBg={false} />
      </LoginLayout>

      <LoginLayout title='Sign Into App' description='Please enter your details to continue.'>
        <InputBox placeholder='Enter Your Name' />
        <InputBox placeholder='someone@example.com' />
        <InputBox placeholder='Enter Password' />
        <CheckboxLabel labelId='sign' />
        <Button text='Log In' isBg={true} />
        <Button text='Go To Sign up' isBg={false} />
      </LoginLayout>
    </>
  );
}
