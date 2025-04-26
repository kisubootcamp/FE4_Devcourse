import { useEffect } from "react";
import { useParams } from "react-router";

export default function Read() {
	const params = useParams();

  useEffect(() => {
    // fetch(`주소적고/${params.id}`)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => ) 등등
  })

	return (
		<>
			<h1>Read Component: {params.id}</h1>
		</>
	);
}
