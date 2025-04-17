export default function ProfileCard({
  bg,
  userImg,
  nName,
  instaID,
  onClick,
}: {
  bg: string;
  userImg: string;
  nName: string;
  instaID: string;
  onClick: (name: string) => void;
}) {
  return (
    <article className="card">
      <div>
        <img className="card-img" src={bg} alt="background-pic" />
      </div>
      <div className="profile">
        <img className="prof-img" src={userImg} alt="profile-pic" />
        <h3 className="alias">{nName}</h3>
        <p className="username">{instaID}</p>
        <button
          onClick={() => {
            onClick(nName);
          }}
        >
          Follow
        </button>
      </div>
    </article>
  );
}
