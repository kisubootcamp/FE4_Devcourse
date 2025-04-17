export default function ProfileCard({
	bg,
	userImg,
	uname,
	instaID,
	clickEvent,
}: {
	bg: string;
	userImg: string;
	uname: string;
	instaID: string;
	clickEvent: (name: string) => void;
}) {
	return (
		<>
			<article className="card">
				<div>
					<img className="card-img" src={bg} alt="background-pic" />
				</div>
				<div className="profile">
					<img className="prof-img" src={userImg} alt="profile-pic" />
					<h3 className="alias">{uname}</h3>
					<p className="username">{instaID}</p>
					<button onClick={() => clickEvent(uname)}>Follow</button>
				</div>
			</article>
		</>
	);
}
