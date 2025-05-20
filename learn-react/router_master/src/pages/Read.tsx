import { useParams } from "react-router";

export default function Read() {
  const params = useParams();
  return (
    <>
      <h1>Read Component: {params.id}</h1>
      <title>Read</title>
    </>
  );
}
