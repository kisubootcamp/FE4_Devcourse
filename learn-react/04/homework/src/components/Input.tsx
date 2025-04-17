export default function Input({ ph }: { ph: string }) {
	return (
		<input
			className="w-full border-2 rounded-[7px] border-gray-400 p-2 my-2"
			placeholder={ph}></input>
	);
}
