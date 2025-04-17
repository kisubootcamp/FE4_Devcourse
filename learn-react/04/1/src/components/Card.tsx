export default function Card({ backImage, userImage, userName, userId, follow }: Card) {
  return (
    <>
      <article className='card'>
        <div>
          <img className='card-img' src={backImage} alt='background-pic' />
        </div>
        <div className='profile'>
          <img className='prof-img' src={userImage} alt='profile-pic' />
          <h3 className='alias'>{userName}</h3>
          <p className='username'>{userId}</p>
          <button onClick={follow}>Follow</button>
        </div>
      </article>
    </>
  );
}
