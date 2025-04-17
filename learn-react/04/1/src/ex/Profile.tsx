export default function Profile({ bgImg, userImg, userName, snsID }): {
  bgImg: string;
  userImg: string;
  userName: string;
  snsId: string;
} {
  return (
    <>
      <h1>{bgImg}</h1>
      <div>{userImg}</div>
      <div>{userName}</div>
      <div>{snsID}</div>
    </>
  );
}
