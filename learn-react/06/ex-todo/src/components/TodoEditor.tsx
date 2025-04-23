import { useRef, useState } from 'react';

export default function TodoEditor({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');
  const textRef = useRef<HTMLInputElement>(null);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodoList = () => {
    onAdd(text);
    setText('');
    textRef.current?.focus();
  };

  return (
    <div className='flex p-4'>
      <input
        type='text'
        ref={textRef}
        value={text}
        onChange={handleText}
        placeholder='Enter a new todo'
        className='flex-grow p-2 border rounded-l-md focus:outline-none'
      />
      <button
        onClick={addTodoList}
        className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors'
      >
        Add
      </button>
    </div>
  );
}
