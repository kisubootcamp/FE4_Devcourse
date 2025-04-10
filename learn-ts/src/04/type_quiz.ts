{
	// 1.
	type Person = {
		name: string;
		age: number;
	};
	const getPersonInfo: Person = {
		name: "kisu",
		age: 30,
	};
}

{
	// 2. ☑️☑️☑️
	type Config = (h: string, p: number, s: boolean) => void;
	const createConfig: Config = (h, p, s) => {
		return { host: h, port: p, ssl: s };
	};

	//code
	const config = createConfig("localhost", 8080, true);
	console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
	// 3.
	type Rectangle = (width: number, height: number) => number;
	const calculateArea: Rectangle = (w, h) => w * h;
}

{
	// 4.
	type Student = (name: string, age: number, grades: number[]) => void;
	const calculateAverageGrade: Student = (name, age, grades) => {
		const average = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
		return { name: name, age: age, average: average };
	};

	console.log(calculateAverageGrade("kisu", 20, [78, 90, 67, 100, 95]));
}

{
	// 5.
	type Response = (status: string, data: string, message: string) => void;
	const createResponse: Response = (s, d, m) => {
		return { status: s, data: d, message: m };
	};

	// code
	console.log(createResponse("success", "John", "fetch success"));
	// { status: 'success', data: 'John', message: 'fetch success'
}

{
	// 6.
	type Employee = { id: string; name: string; position: string };
	const getEmployeeInfo = (data: Employee) => {
		return `${data.name} works as a ${data.position} with ID:${data.id}.`;
	};

	console.log(getEmployeeInfo({ id: "1", name: "james", position: "developer" }));
	// "james works as a developer with ID: 1."
}

{
	// 7.
	type Circle = { radius: number };
	function calculateCircumference(data: Circle) {
		return 2 * Math.PI * data.radius;
	}

	console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
	// 8.
	type Product = { name: string; price: number; inStock: boolean };
	function getDiscountedPrice(product: Product, num: number) {
		return product.price * (1 - num / 100);
	}

	console.log(getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10));
	// 900
}

{
	// 9.
	type Book = { title: string; author: string; publishedYear: number };
	function getBookSummary(data: Book) {
		return `${data.title} by ${data.author}, published in ${data.publishedYear}`;
	}

	console.log(getBookSummary({ title: "river", author: "james", publishedYear: 2020 }));
	// "river by james, published in 2020."
}

{
	// 10.
	type Transaction = { id: string; amount: number; timestamp: string };
	function isValidTransaction(data: Transaction) {
		if (data.amount > 0) return true;
		else return false;
	}
}
