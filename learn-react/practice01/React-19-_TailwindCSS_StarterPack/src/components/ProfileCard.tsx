export default function ProfileCard(props: {
  bg: string;
  userImg: string;
  uname: string;
  instaId: string;
  onClick: (name: string) => void;
}) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={props.bg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={props.userImg} alt="profile-pic" />
          <h3 className="alias">{props.uname}</h3>
          <p className="username">{props.instaId}</p>
          <button onClick={() => props.onClick(props.uname)}>Follow</button>
        </div>
      </article>
    </>
  );
}
