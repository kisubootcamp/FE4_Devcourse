export default function login({
  title,
  subTitle,
  idBox,
  passWordBox,
  policyCheck1,
  terms,
  and,
  polices,
  loginBtn,
  signupBtn,
}: Login) {
  return (
    <div className="backGround flex justify-center items-center h-[100vh] bg-[#100d1d]">
      <div className="signinBox, bg-[#ffffff] w-[375px] h-[434.03px] rounded-[10px] relative">
        <div className="loginTop mt-[10px] justify-center items-start">
          <h1 className="title p-[25px] h-[10px] flex-col font-bold text-[20px]">
            {title}
          </h1>
          <h3 className="subTitle p-[25px] h-[10px] flex flex-col gap-[8px] pt-[10px] text-[14px]">
            {subTitle}
          </h3>
        </div>

        <div className="loginContainer">
          <div className="loginComp grid justify-center items-center mt-[20px]">
            <input
              type="text"
              className="idBox border-1 border-[#4f4f4f] mb-[16px] w-[325px] h-[44px] text-[14px] p-[16px] rounded-[8px]"
              placeholder={idBox}
              alt="아이디박스"
            />
            <input
              type="text"
              className="passWordBox, border-1 border-[#4f4f4f] rounded-[8px] h-[44px] p-[16px] text-[14px] mb-[16px]"
              placeholder={passWordBox}
              alt="비밀번호박스"
            />
            <div className="checkBoxLine items-center justify-center">
              <input
                type="checkbox"
                className="policyCheck accent-[#4f4f4f] h-[20.03px] w-[20.03px] align-text-bottom mr-[8px]"
              />
              <span className="policyText">{policyCheck1}</span>
              <span className="terms font-bold">{terms}</span>
              <span className="and">{and}</span>
              <span className="polices font-bold">{polices}</span>
            </div>
          </div>
          <div className="toolBtn grid justify-center items-center mt-[32px]">
            <button className="loginBtn, bg-[#4f4f4f] w-[325px] h-[44px] rounded-[5px] justify-center content-center text-white">
              {loginBtn}
            </button>
            <button className="signupBtn bg-[#ffffff] w-[325px] h-[44px] rounded-[5px] justify-center content-center border-1 mt-[16px] ">
              {signupBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
