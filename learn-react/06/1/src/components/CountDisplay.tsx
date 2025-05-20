import CountInDisplay from "./CountInDisplay";

export default function CountDisplay({ count }: { count: number }) {
  return (
    <>
      <h1>
        <CountInDisplay count={count} />
      </h1>
    </>
  );
}
