export default function ProfileCard({
  bjImg,
  userImg,
  userName,
  instagramId,
  handleClickFollowBtn,
}: ProfileCardProps) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bjImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instagramId}</p>
          <button onClick={handleClickFollowBtn}>Follow</button>
        </div>
      </article>
    </>
  );
}
