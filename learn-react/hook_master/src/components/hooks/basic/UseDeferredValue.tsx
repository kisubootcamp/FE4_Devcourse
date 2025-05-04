// useDeferredValue 훅
// React 18에서 도입된 useDeferredValue 훅은 상태 업데이트를 지연시켜 UI의 반응성을 높이는 데 사용됩니다.
// 이 훅은 비동기적으로 상태를 업데이트할 수 있는 기능을 제공하여, 사용자가 입력하는 동안 UI가 부드럽게 유지되도록 도와줍니다.
// 단, 절대적으로 부드럽게 해주는 것은 아니며, 상대적인 부드러움을 제공합니다.

import { useDeferredValue, useState } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(50000);

export default function UseDeferredValue() {
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );
  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {filteredItems.map((d) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </>
  );
}
