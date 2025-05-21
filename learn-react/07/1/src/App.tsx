import CountDisplay from './components/CountDisplay';
import CountButton from './components/CountButton';
import { use, useState } from 'react';

export default function App() {
  // const [count, setCount] = useState(0); // 상태 끌어올리기
  // const increment = () => {
  //   setCount((count) => count + 1);
  // };
  // const decrement = () => {
  //   setCount((count) => count - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };
  // 제어컨트롤러 방식
  // 폼(요소) 제어
  // const [text, setText] = useState('');
  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };
  // const resetHandler = () => {
  //   setText('');
  // };
  // const [input, setInput] = useState('');
  // const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setInput(e.target.value);
  // };
  // const [checked, setChecked] = useState(false);
  // const handlerCheckbox = () => {
  //   setChecked((checked) => !checked);
  // };
  // 불변성 지켜주면서 코딩해야 함
  // 한 번 정의된 데이터가 변하지 않는 특징
  const [values, setValues] = useState<string[]>([]);
  const clickHandler = () => {
    // setValues(['apple']);
    // 배열 업데이트트
    setValues((values) => [...values, 'apple']);
  };
  const [user, setUser] = useState<{
    name: string;
    age: number;
    handsome: boolean;
  }>({
    name: 'sucoding',
    age: 20,
    handsome: false,
  });
  const clickHandler2 = () => {
    setUser((user) => ({ ...user, age: 50, handsome: true }));
  };
  const [selected, setSelected] = useState<string[]>([]);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelected((selected) =>
      selected.includes(value)
        ? selected.filter((fruit) => fruit !== value)
        : [...selected, value]
    );
  };
  const [radio, setRadio] = useState('male');
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      {/* <CountDisplay count={count} />
      <CountButton increment={increment} decrement={decrement} reset={reset} /> */}
      {/* <h1>input: {text}</h1>
      <input type="text" value={text} onChange={changeHandler} />
      {text.length >= 4 && <p>4글자 미만</p>}
      <button onClick={resetHandler}>reset</button> */}
      {/* <p>selected: {input}</p>
      <select value={input} onChange={changeHandler}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
      <input type="checkbox" checked={checked} onChange={handlerCheckbox} />
      {(checked && <h1>선택됨</h1>) || (!checked && <h1>선택안됨</h1>)} */}
      <h1>{values.join(',')}</h1>
      <button onClick={clickHandler}>추가</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={clickHandler2}>추가</button>
      <p>선택된 과일: {selected.join(',')}</p>
      <label style={{ display: 'block' }}>
        <input
          type="checkbox"
          value="apple"
          checked={selected.includes('apple')}
          onChange={changeHandler}
        />
        apple
      </label>
      <label style={{ display: 'block' }}>
        <input
          type="checkbox"
          value="banana"
          checked={selected.includes('banana')}
          onChange={changeHandler}
        />
        banana
      </label>
      <label style={{ display: 'block' }}>
        <input
          type="checkbox"
          value="orange"
          checked={selected.includes('orange')}
          onChange={changeHandler}
        />
        orange
      </label>
      <hr />
      <h1>radio: {radio}</h1>
      <input
        type="radio"
        name="gender"
        checked={radio === 'male'}
        value="male"
        onChange={radioChangeHandler}
      />
      male
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={radio === 'female'}
        onChange={radioChangeHandler}
      />
      female
    </>
  );
}
