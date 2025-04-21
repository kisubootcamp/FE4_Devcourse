import { useState } from "react";
export default function ChangeName() {
    const [name, setName] = useState<null | string>(null);
    const changeName = () => {
        setName("강하영");
    };

    return (
        <>
            <h1 className="text-3xl underline">Name: {name}</h1>
            <button onClick={changeName}>이름 생성</button>
            <hr />
        </>
    );
}
