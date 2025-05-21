import CountOutsider from "./components/state/context-api/CountOutsider";
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
      <CountOutsider />
    </>
  );
}
