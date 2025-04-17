export default function FollowBtn({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button onClick={() => onClick()}>Follow</button>
    </>
  );
}
