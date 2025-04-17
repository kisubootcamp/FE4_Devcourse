export default function Box({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white px-5 py-10 mx-auto my-10 rounded-xl w-[450px]">
			{children}
		</div>
	);
}
