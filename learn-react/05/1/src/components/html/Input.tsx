import { twMerge } from "tailwind-merge";

// 리터럴 타입만 추출하는 커스텀 타입
type OnlyLiterals<T> = T extends string ? (string extends T ? never : T) : never; // 근데 이렇게 복잡하게 할것보다
// 유니언에서 원하는거 뺄때는 Exclude 메서드를 사용한다.
type ReactInputType = OnlyLiterals<React.InputHTMLAttributes<HTMLInputElement>["type"]>; // 타입 속성에 넣을 수 있는 모든 속성이 오게 하는 것.

// Omit은 객체에서 첫번째 요소에서 두번째 요소를 빼는 메서드다.
// 즉 input에 올 수 있는 모든 속성중에서 type만 빼고가 된 것.
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
	// 뺀 뒤에 원하는 타입만 들어갈 수 있게 type을 추가로 정의
	// type?: "text" | "password" | "tel" | "number";
	// type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
	type?: InputType;
};

export default function Input(props: InputProps) {
	const { className, ...rest } = props;

	return (
		<>
			<input
				// type="text"
				className={twMerge("w-[240px] h-[44px]", className)}
				// placeholder="Enter Your Name"
				// disabled
				// readOnly
				// value={"default"}
				{...rest}
			/>
		</>
	);
}
