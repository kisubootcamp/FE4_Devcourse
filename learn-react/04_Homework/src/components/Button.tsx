import React from "react";

export default function Button({
    dark,
    children,
}: {
    dark?: boolean;
    children: React.ReactNode;
}) {
    return (
        <>
            <button
                className={`w-[325px] h-[44px] rounded-[8px] border-1 border-[#4F4F4F] ${
                    dark ? "bg-[#4F4F4F] text-white" : ""
                }`}
            >
                {children}
            </button>
        </>
    );
}
