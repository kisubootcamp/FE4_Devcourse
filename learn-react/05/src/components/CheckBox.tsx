import { twMerge } from "tailwind-merge";
type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
    type?: "checkbox";
};
export default function Checkbox(props: CheckboxProps) {
    const { children, className, ...rest } = props;
    return (
        <div className="flex items-center gap-2 leading-none">
            <input
                type="checkbox"
                id="chk"
                className={twMerge("checkbox-style", className)}
                {...rest}
            />
            <label htmlFor="chk">{children}</label>
        </div>
    );
}
