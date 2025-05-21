export default function ProfileCard({
  bg,
  userImg,
  uname,
  instaId,
  follow,
}: {
  bg: string;
  userImg: string;
  uname: string;
  instaId: string;
  follow: (name: string) => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{uname}</h3>
          <p className="username">{instaId}</p>
          <button onClick={() => follow(uname)}>Follow</button>
        </div>
      </article>
    </>
  );
}
