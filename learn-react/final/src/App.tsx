import { useEffect } from 'react';
import CountButton from './components/CountButton';
import CountDisplay from './components/CountDisplay';
import { useCountStore } from './stores/countStore';

export default function App() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log('new Count : ', newCount);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <CountButton />
      <CountDisplay />
    </>
  );
}
