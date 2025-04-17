// 이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
// onclick, onchange, 등등

export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  handleClick,
  setProfile,
  profile,
}: UserProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="text-white">
      <div>{message}</div>
      <div>{count}</div>
      <div>{isVisible ? "visible" : "hidden"}</div>
      <div>
        {tags.map((tag) => {
          return <div key={tag}>{tag}</div>;
        })}
      </div>
      <div>{user.name}</div>
      {/* <button onClick={handleClick2}>클릭</button> */}
      <hr />
      <button onClick={(e) => handleClick(e, "Hello, World!")}>클릭</button>
      <input
        className="ring-1 ring-amber-500"
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => setProfile(!profile)}>프로필 보기</button>
    </div>
  );
}
