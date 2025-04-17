import "../css/ProfileCard.css";

interface ProfileCardProps {
  backgroundImg: string;
  profileImg: string;
  name: string;
  username: string;
  onFollow: (name: string) => void;
}

export default function ProfileCard({
  backgroundImg,
  profileImg,
  name,
  username,
  onFollow,
}: ProfileCardProps) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={backgroundImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={profileImg} alt="profile-pic" />
          <h3 className="alias">{name}</h3>
          <p className="username">{username}</p>
          <button onClick={() => onFollow(username)}>Follow</button>
        </div>
      </article>
    </>
  );
}
