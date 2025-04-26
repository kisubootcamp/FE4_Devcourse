interface User {
	id: number;
	name: string;
}

interface UserProps {
	message: string;
	count: number;
	isVisible: boolean;
	tags: string[];
	// user: { id: number; name: string };
	user: User; // 이렇게 쪼개서 적을 수도 있다.
}
