export default function Head({ type }: { type: string }) {
	return (
		<>
			<div className="font-bold text-2xl mb-3">{type} into App</div>
			<div className="text-gray-400 mb-3">
				Please enter your details to continue.
			</div>
		</>
	);
}
