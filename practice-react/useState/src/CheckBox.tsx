import { useState } from 'react';

export default function CheckBox() {
  const [selected, setSelected] = useState<string[]>([]);
  const selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((selected) =>
      selected.includes(e.target.value)
        ? selected.filter((fruits) => fruits !== e.target.value)
        : [...selected, e.target.value]
    );
  };
  return (
    <>
      <div>
        <h1>선택된 과일 : {selected.join(', ')}</h1>
        <input
          type="checkbox"
          value="apple"
          checked={selected.includes('apple')}
          onChange={selectHandler}
        />{' '}
        apple
        <input
          type="checkbox"
          value="banana"
          checked={selected.includes('banana')}
          onChange={selectHandler}
        />{' '}
        banana
        <input
          type="checkbox"
          value="grape"
          checked={selected.includes('grape')}
          onChange={selectHandler}
        />{' '}
        grape
        <input
          type="checkbox"
          value="mango"
          checked={selected.includes('mango')}
          onChange={selectHandler}
        />{' '}
        mango
      </div>
    </>
  );
}
