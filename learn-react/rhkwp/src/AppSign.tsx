import SignIn from "./components/signin";

export default function AppSign() {
  // const isLogIn = (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   logIn: boolean
  // ) => {
  //   if(isLogIn === true){

  //   }
  // };
  return (
    <>
      <SignIn
        title="Sign Into App"
        subTitle="Please enter your details to continue"
        nameBox="Enter Your Name"
        emailBox="someone@example.com"
        passwordBox="Enter Password"
        termsCheck="I agree with "
        terms="terms "
        and="and "
        polices="policies"
        signInBtn="Sign In"
        goLogInBtn="Go To Log In"
      />
    </>
  );
}
