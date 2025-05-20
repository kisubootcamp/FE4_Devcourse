// // import Gallery from "./components/higher/Gallary";
// import Count from "./components/state/redux-toolkit/Count";
// import CountOutsider from "./components/state/context-api/CountOutsider";
// // import CounterProvider from "./context/provider/CounterProvider";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import Count from "./components/state/zustand/Count";

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
    </>
  );
}
