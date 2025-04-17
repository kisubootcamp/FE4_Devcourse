export default function Button({ children, styles }: { children: React.ReactNode; styles?: string }) {
	return (
		<div className={`border rounded-lg border-[#4f4f4f] ${styles === "fill" ? "bg-[#4f4f4f] text-white" : null}`}>
			<button className="w-full h-[44px]">{children}</button>
		</div>
	);
}
