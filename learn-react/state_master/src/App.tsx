// import { Provider } from "react-redux";
// import CounterProvider from "./components/context/provider/CounterProvider";
// import CountOutsider from "./components/state/context-api/CountOutsider";
// import { store } from "./components/redux/store";
// import Count from "./components/state/redux-toolkit/Count";

import Count from "./components/state/zustand/Count";

export default function App() {
  return (
    <>
      {/* <CounterProvider>
        <Count />
      </CounterProvider>
      <CountOutsider /> */}

      {/* <Provider store={store}>
        <Count />
      </Provider> */}

      <Count />
    </>
  );
}
/* CounterProvider의 자식컴포넌트로 Count 아래의 컴포넌트들은 value를 공유받을 수 있다. */
