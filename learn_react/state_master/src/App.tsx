import Count from "./components/state/zustand/Count";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import CountOutsider from "./components/state/context-api/CountOutsider";

export default function App() {
  return (
    <>
      {/* <CounterProvider>
        <Count />
      </CounterProvider> */}

      {/* <CountOutsider />
      <Provider store={store}>
        <Count />
      </Provider> */}

      <Count />
    </>
  );
}
