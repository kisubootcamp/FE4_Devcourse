export default function ProfileCard({
  bgImg,
  userImg,
  userName,
  instaId,
  followClick,
}: {
  bgImg: string;
  userImg: string;
  userName: string;
  instaId: string;
  followClick: (name: string) => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bgImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instaId}</p>
          <button onClick={() => followClick(userName)}>Follow</button>
        </div>
      </article>
    </>
  );
}
