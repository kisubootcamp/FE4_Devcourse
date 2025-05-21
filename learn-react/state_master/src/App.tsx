// import Count from "./components/state/context-api/Count";
// import { Provider } from "react-redux";
import CounteOutsider from "./components/state/context-api/CounteOutsider";
// import Count from "./components/state/redux-toolkit/Count";
// import { store } from "./redux/store";
import Count from "./components/state/zustand/Count";
// import CounterProvider from "./context/provider/CounterProvider";

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

      <CounteOutsider />
    </>
  );
}
