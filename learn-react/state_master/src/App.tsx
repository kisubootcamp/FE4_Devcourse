import { Provider } from "react-redux";
import Gallery from "./components/higher/Gallary";
// import Count from "./components/state/context-api/Count";
import CountOutsider from "./components/state/context-api/CountOutsider";
// import Count from "./components/state/redux-toolkit/Count";
import CounterProvider from "./context/provider/CounterProvider";
import { store } from "./redux/store";
import Count from "./components/state/zustand/Count";

export default function App() {
	return (
		<>
			{/* <Gallery /> */}
			{/* <CounterProvider>
				<Count />
			</CounterProvider> */}
      {/* 이렇게 작성하면 CountOutsider는 Context api에서 공급하는 데이터를 받지 못한다. */}
      {/* <CountOutsider></CountOutsider>  */}

      {/* 중앙 스토어 하나 공급 */}
      {/* <Provider store={store}> 
        <Count></Count>
      </Provider> */}
      {/* CountOutsider는 스토어 공급받지 못함. */}
      {/* <CountOutsider></CountOutsider>  */}
      
      {/* zustand는 공급의 범위를 지정할 필요 없다. */}
      <Count></Count>
      <CountOutsider></CountOutsider>
		</>
	);
}
