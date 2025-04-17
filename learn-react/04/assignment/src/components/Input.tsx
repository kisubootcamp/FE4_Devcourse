export default function Input({ name }: { name: string }) {
	const placeholder: string =
		name === "email" ? "someone@example.com" : name === "password" ? "Enter Password" : "Enter Your Name";

	return (
		<div className="border rounded-lg border-[#4f4f4f]">
			<input className="p-[13.5px] w-full h-[44px] px-[16px]" type="text" placeholder={placeholder} />
		</div>
	);
}
