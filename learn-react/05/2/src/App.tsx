//import Login from "./components/Login";
// import Signup from "./components/Signup";

import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       {/* <Login /> */}
//       <Signup />
//     </>
//   );
// }

//예제
//1. 전구문제
// import b_off from "./images/b_off.png";
// import b_on from "./images.b_on.png";
// export default function App() {
//   const [lamp, setLamp] = useState(false);
//   const lampToggleHandler = () => {
//     setLamp((lamp) => !lamp);
//   };
//   return (
//     <>
//       <body>
//         <img
//           src={lamp ? b_on : b_off}
//           alt="전구이미지"
//           onClick={lampToggleHandler}
//         />
//       </body>
//     </>
//   );
// }
// import ColorBox from "./components/ColorBox";
// export default function App() {
//   const [colorbox, setColorbox] = useState("");
//   const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setColorbox(e.target.value);
//   };
//   return (
//     <>
//       <ColorBox color={colorbox} onChange={colorHandler} />
//     </>
//   );
// }
//2.답안
// import ColorBox from "./components/ColorBox";
// export default function App () {
//   return (
//     <>
//       <ColorBox/>
//     </>
//   );
// }

//3.답안
import Login from "./components/Login";
// import {useState} from "react";
export default function App() {
  return (
    <>
      <Login />
    </>
  );
}
