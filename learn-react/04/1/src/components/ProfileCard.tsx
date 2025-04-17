export default function ProfileCard({
  cardImg,
  profImg,
  alias,
  userName,
  buttonFunc,
}: {
  cardImg: string;
  profImg: string;
  alias: string;
  userName: string;
  buttonFunc: (name: string) => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={cardImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={profImg} alt="profile-pic" />
          <h3 className="alias">{alias}</h3>
          <p className="userName">{userName}</p>
          <button onClick={() => buttonFunc(alias)}>Follow</button>
          {/* 왜 {(alias)=>buttonFunc(alias)}아님? */}
        </div>
      </article>
    </>
  );
}
