type User = {
	id: number;
	name: string;
};
// ***Props
type UserProps = {
	message: string;
	count: number;
	isVisible: boolean;
	tags: string[];
	user: User;
	myFunction: (message: string) => void;
	// greet: () => void;
};
