import { twMerge } from "tailwind-merge";

// 제네릭 타입에는 html에 존재하는 모든 태그가 올 수 있다.
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & { isLogin?: boolean } & {
	className: "bg-[#4f4f4f]" | "bg-[#ed4848]" | "bg-[#7D48ED]";
};

export default function Button(
	// { id,
	// children,
	// className,
	// type,
	// disabled, }
	props: // { id?: string;
	// children: React.ReactNode;
	// className: string;
	// type: "submit" | "reset" | "button";
	// disabled: boolean; }

	// => ButtonProps로 한방에 대체 가능하다. button에서 사용할 수 있는 모든 property를 대체
	// 모든 속성이 optional로 되어 있기 때문에 넘겨줘도 되고 안넘겨줘도 된다.
	ButtonProps
) {
	// 사용하지 않을 속성만 적고 구조분해할당
	const { className, children, ...rest } = props;

	return (
		<>
			<button
				// id={id}
				// type={type}
				className={twMerge(
					"w-[77px] h-[44px] text-white rounded-lg cursor-pointer text-sm disabled:bg-gray-300 disabled:cursor-default",
					className
				)}
				// name="btns"
				// disabled={disabled}
				{...rest}
				// draggable
			>
				{children}
			</button>
		</>
	);
}
