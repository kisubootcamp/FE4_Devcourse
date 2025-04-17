export default function Header({ message }: { message: string }) {
	return (
		<>
			<h1 className="text-lg font-bold">{message} Into App</h1>
			<div>Please enter your details to continue.</div>
		</>
	);
}
