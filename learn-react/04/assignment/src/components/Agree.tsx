export default function Agree() {
	return (
		<div className="mt-[16px] h-[25px] mb-[32px]">
			<input className="w-[20.4px] h-[20.4px]" type="checkbox" id="agree" />
			<label className="h-[20.4px] mx-[8px]" htmlFor="agree">
				I agree with <span className="font-bold">terms</span> and <span className="font-bold">policies</span>.
			</label>
		</div>
	);
}
