export default function ProfileCard({
  bgImg,
  userImg,
  userName,
  instagramId,
  handleClickFollowBtn,
}: ProfileCardProps) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bgImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImg} alt="profile-pic" />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instagramId}</p>
          <button onClick={() => handleClickFollowBtn(userName)}>Follow</button>
        </div>
      </article>
    </>
  );
}
