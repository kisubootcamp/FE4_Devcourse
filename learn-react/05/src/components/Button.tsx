import { twMerge } from "tailwind-merge";

export default function Button(props: React.ComponentPropsWithRef<"button">) {
    const { className, children, ...rest } = props;

    return (
        <>
            <button className={twMerge("button-style", className)} {...rest}>
                {children}
            </button>
        </>
    );
}

// export default function Button({
//     className,
//     children,
//     type,
//     disabled,
// }: React.ComponentPropsWithRef<"button">) {
//     return (
//         <>
//             <button
//                 type={type}
//                 className={twMerge(
//                     "w-[77px] h-[44px] text-white text-sm rounded-lg cursor-pointer",
//                     "disabled:bg-gray-400 disabled:cursor-default",
//                     className
//                 )}
//                 disabled={disabled}
//             >
//                 {children}
//             </button>
//         </>
//     );
// }

// export default function Button({
//     className,
//     children,
//     type,
//     disabled,
// }: {
//     className: string;
//     children: React.ReactNode;
//     type: "submit" | "reset" | "button";
//     disabled?: boolean;
// }) {
//     return (
//         <>
//             <button
//                 type={type}
//                 className={twMerge(
//                     "w-[77px] h-[44px] text-white text-sm rounded-lg cursor-pointer",
//                     "disabled:bg-gray-400 disabled:cursor-default",
//                     className
//                 )}
//                 disabled={disabled}
//             >
//                 {children}
//             </button>
//         </>
//     );
// }
