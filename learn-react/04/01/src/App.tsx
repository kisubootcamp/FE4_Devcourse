import User from './components/User';
export default function App() {
  return (
    <>
      <User
        message="안녕하세요"
        count={10}
        isVisible={true}
        tags={['react', 'ts', 'js']}
        user={{ id: 1, name: 'sucoding' }}
      />
    </>
  );
}
