export default function ProfileCard({
  userImg,
  backgroundImg,
  username,
  instargram,
  handleClickFollow,
}: ProfileCardProps) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={backgroundImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{username}</h3>
          <p className="username">{instargram}</p>
          <button onClick={handleClickFollow}>Follow</button>
        </div>
      </article>
    </>
  );
}
