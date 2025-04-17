import { ReactNode } from "react";

export default function Button({
    children,
    type,
}: {
    children: ReactNode;
    type: "button" | "submit";
}) {
    return (
        <>
            {/* 콘텐츠가 있는 문법 */}
            {/* children이라는 예약어를 사용한다. { children: ReactNode } */}
            {/* ReactNode는 텍스트, 태그, 컴포넌트 모두 가능  */}
            <button type={type}>{children || "버튼"}</button>
        </>
    );
}
