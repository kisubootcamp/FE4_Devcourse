import CountDisplay from "./CounDisplay";
import CountButton from "./CountButton";
export default function Count() {
  console.log("Count 렌더링");

  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
