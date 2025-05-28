import { twMerge } from "tailwind-merge";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
	// type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
	type?: ReactInputType;
};

export default function Input(props: InputProps) {
	const { className, ...rest } = props;
	return (
		<input
			className={twMerge("w-[240px] h-[44px]", className)}
			placeholder="Enter Your Name"
			{...rest}
		/>
	);
}
