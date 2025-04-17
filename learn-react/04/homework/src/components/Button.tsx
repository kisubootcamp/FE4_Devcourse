export default function Button({
	style,
	content,
}: {
	style: string;
	content: string;
}) {
	return (
		<button className={`p-2 my-2 border-1 rounded-[7px] w-full ${style}`}>
			{content}
		</button>
	);
}
