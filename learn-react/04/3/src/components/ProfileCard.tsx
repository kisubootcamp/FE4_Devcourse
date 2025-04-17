export default function ProfileCard({
  bgImg,
  userImg,
  username,
  instaID,
  changeColor,
}: ProfileCardProps) {
  return (
    <article className="card">
      <div>
        <img className="card-img" src={bgImg} alt="background-pic" />
      </div>
      <div className="profile">
        <img className="prof-img" src={userImg} alt="profile-pic" />
        <h3 className="alias">{username}</h3>
        <p className="username">{instaID}</p>
        <button onClick={(e) => changeColor(e)}>Follow</button>
      </div>
    </article>
  );
}
