import { useState } from "react";

export default function App() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFruits((selectedFruits) =>
      selectedFruits.includes(value)
        ? selectedFruits.filter((x) => x !== value)
        : [...selectedFruits, value]
    );
  };
  const [radio, setRadio] = useState("");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <p>
        선택한 과일: <strong>{selectedFruits.join(", ")}</strong>
      </p>
      <label htmlFor="" style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"apple"}
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
      </label>
      <label htmlFor="" style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"banana"}
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
      </label>
      <label htmlFor="" style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"orange"}
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label>
      <hr />
      <p>
        선택한 버튼: <strong>{radio}</strong>
      </p>
      <input type="radio" name="gender" value="male" onChange={radioChangeHandler} />
      male
      <br />
      <input type="radio" name="gender" value="female" onChange={radioChangeHandler} />
      female
    </>
  );
}
