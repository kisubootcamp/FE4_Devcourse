import Todo from './components/Todo';
// 완료시 중간선, 삭제버튼누르면 삭제, 등록버튼
export default function App() {
  return (
    <>
      <div className='item-middle bg-black'>
        <Todo />;
      </div>
    </>
  );
}
