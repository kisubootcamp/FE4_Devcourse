//import Count from "./components/state/context-api/Count";
//import { Provider } from "react-redux";
import CountOutsider from "./components/state/context-api/CountOutsider";
//import Count from "./components/state/redux-toolkit/Count";
//import { store } from "./redux/store";
//import CounterProvider from "./context/provider/CounterProvider";
import Count from "./components/state/zustand/Count";
export default function App() {
  return (
    <>
      {/* <CounterProvider>
        <Count />
      </CounterProvider> */}
      {/* <Provider store={store}>
        <Count />
        <CountOutsider />
      </Provider>
       */}
      <Count />
      <CountOutsider />
    </>
  );
}
