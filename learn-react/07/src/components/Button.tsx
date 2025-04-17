export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 콘텐츠가 있는 태그 */}
      {/* <시작태그> .... </종료태그> */}
      {/* 콘텐츠가 없는 태그 */}
      <button className="bg-blue-500 text-white p-2 rounded-md">
        {children || "Click"}
      </button>
    </>
  );
}
