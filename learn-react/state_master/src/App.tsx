// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import CountOutsider from "./components/state/context-api/CountOutsider";
import Count from "./components/state/zustand/Count";
// import Count from "./components/state/redux-toolkit/Count";

export default function App() {
  return (
    <>
      {/* <CounterProvider>
        <Count />
      </CounterProvider> */}
      {/* <Provider store={store}>
        <Count />
      </Provider> */}
      <Count />
      <CountOutsider />
    </>
  );
}
