import React, { useState } from "react";

export default function App() {
  const [radio, setRadio] = useState("");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  const [seletedFruits, setSeletedFruits] = useState<string[]>([]);
  const changeSeletHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeletedFruits((seletedFruits) =>
      seletedFruits.includes(value)
        ? seletedFruits.filter((fruit) => fruit !== value)
        : [...seletedFruits, value]
    );
  };
  return (
    <>
      <p>선택된 과일: {seletedFruits.join(", ")}</p>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="apple"
          checked={seletedFruits.includes("apple")}
          onChange={changeSeletHandler}
        />
        apple
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="banana"
          checked={seletedFruits.includes("banana")}
          onChange={changeSeletHandler}
        />
        banana
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value="orange"
          checked={seletedFruits.includes("orange")}
          onChange={changeSeletHandler}
        />
        orange
      </label>
      <hr />
      <h1>radio: {radio}</h1>
      <input
        type="radio"
        name="gender"
        checked={radio === "male"}
        value="male"
        onChange={radioChangeHandler}
      />
      male
      <br />
      <input
        type="radio"
        name="gender"
        checked={radio === "female"}
        value="female"
        onChange={radioChangeHandler}
      />
      female
    </>
  );
}
