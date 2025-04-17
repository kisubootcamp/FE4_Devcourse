export default function Input({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <input
                id={id}
                type="text"
                placeholder={children as string}
                className="w-[325px] h-[44px] px-[16px] py-[14px] rounded-[8px] border-1 border-[#4F4F4F]"
            ></input>
        </>
    );
}
