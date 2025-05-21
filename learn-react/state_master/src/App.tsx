// import { Provider } from 'react-redux';
// import Gallery from './components/higher/Gallary';
// import Count from './components/state/context-api/Count';
// import CountOutsider from './components/state/context-api/CountOutsider';
// import CounterProvider from './context/Provider/CounterProvider';
// import Count from './components/state/redux-toolkit/Count';
// import { store } from './redux/store';

import Count from './components/state/zustand/Count';

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
