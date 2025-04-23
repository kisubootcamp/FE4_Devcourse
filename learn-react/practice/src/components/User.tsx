export default function User({
  name,
  username,
  profImg,
  cardImg,
  follow,
}: User) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={cardImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={profImg} />
          <h3 className="alias">{name}</h3>
          <p className="username">{username}</p>
          <button onClick={() => follow(name)}>Follow</button>
        </div>
      </article>
    </>
  );
}
