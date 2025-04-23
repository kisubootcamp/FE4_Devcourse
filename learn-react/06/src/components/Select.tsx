import React, { useState } from "react";

export default function Select() {
    const [input, setInput] = useState("orange");
    const [check, setCheck] = useState(false);
    const [fruits, setFruits] = useState<string[]>([]);
    const [radio, setRadio] = useState<null | string>(null);
    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInput(e.target.value);
    };
    const checkHandler = () => {
        setCheck((check) => !check);
    };
    const fruitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFruits((fruits) =>
            fruits.includes(value)
                ? fruits.filter((f) => f !== value)
                : [...fruits, value]
        );
    };
    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };
    return (
        <>
            <h1>Select: {input}</h1>
            <select value={input} onChange={selectHandler}>
                <option value="apple">apple</option>
                <option value="banana">banana</option>
                <option value="orange">orange</option>
            </select>
            <hr />
            <input
                type="checkbox"
                checked={check}
                onChange={checkHandler}
            ></input>
            {check && <span>선택됨</span>}
            <hr />
            <h1>Select:{fruits.join(", ")}</h1>
            <label>
                <input
                    type="checkbox"
                    value="apple"
                    checked={fruits.includes("apple")}
                    onChange={fruitHandler}
                ></input>
                apple
            </label>
            <label>
                <input
                    type="checkbox"
                    value="banana"
                    checked={fruits.includes("banana")}
                    onChange={fruitHandler}
                ></input>
                banana
            </label>
            <label>
                <input
                    type="checkbox"
                    value="orange"
                    checked={fruits.includes("orange")}
                    onChange={fruitHandler}
                ></input>
                orange
            </label>
            <hr />
            <h1>Gender: {radio}</h1>
            <input
                type="radio"
                name="gender"
                value="male"
                onChange={radioHandler}
            ></input>
            male
            <input
                type="radio"
                name="gender"
                value="female"
                onChange={radioHandler}
            ></input>
            female
            <hr />
        </>
    );
}
