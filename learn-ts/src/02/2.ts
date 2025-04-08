{
	// 객체
	// 빈 객체를 타입을 지정하는 것을 조심해야 함.
	let obj: object = {};
	let obj2: {} = {}; // null과 defined를 제외한 모든 값을 허용하겠다는 말이 됨.

	// 래퍼 객체
	// 원시 타입(primitive type)

	obj = null;
	obj = undefined;
	obj = 20;
	obj = "A";
	// 우리가 사용하는 모든 타입은 결국 object에서 파생된 것이다.

	obj = [];
	obj = function () {};

	obj2 = null;
	obj2 = undefined;
	obj2 = 20;
	obj2 = "A";
	obj2 = [];
	obj2 = function () {};

	// => 빈 객체는 untility 타입으로 지정해야 됨.
	let obj3: Record<string, never> = {}; // 객체의 키 값은 문자열, 값은 절대 올 수 없다는 뜻을 가지게 됨. 속성값으로 어떤 값도 가질 수 없다면 그게 곧 빈객체니까.
	obj3 = {}; // 가능

	obj3 = null;
	obj3 = undefined;
	obj3 = 20;
	obj3 = "A";
	obj3 = [];
	obj3 = function () {};

	// let user: object = { //권장x
	// 	name: "yeonseo",
	// 	age: 20,
	// };

	// user.gender = "female"; // 추가할 때는 에러가 발생하기 때문에 object로 객체의 타입을 지정하는 것을 권장하지 않음.
	let user: {
		// <- 정확하게 각 속성값이 무슨 타입인지 나타내줌.
		name: string; // ;대신에 , 사용해도 에러 안나지만, 권장 방법은 ;이다.
		age: number;
	} = {
		//권장x
		name: "yeonseo",
		age: 20,
	};

	// let person: { name: string; address: { street: string; city: string; }; } = { // 줄바꿈 안해도 됨. but 가독성 때문에 아래와 같이
	let person: {
		name: string;
		likesFood: string[];
		address: {
			street: string;
			city: string;
		};
		isLoggedIn: boolean;
	} = {
		// 줄바꿈 안해도 됨.
		name: "John",
		likesFood: ["apple", "banana"],
		address: {
			street: "Gang-nam",
			city: "Seoul",
		},
		isLoggedIn: false,
	};

	let peopleArr: { id: number; name: string }[] = [
		{ id: 0, name: "yeonseo" }, // 여기에는 gender 값도 들어있었다면? 그건 나중에 배울 것임.
		{ id: 1, name: "cats" },
	];

	let foodArr: { id: number; foods: string[] }[] = [
		{ id: 1, foods: ["apple"] },
		{ id: 2, foods: ["banana"] },
	];

	let jsonObject: {
		id: number;
		name: string;
		username: string;
		email: string;
		address: {
			street: string;
			suite: string;
			city: string;
			zipcode: string;
			geo: {
				lat: string;
				lng: string;
			};
		};
		phone: string;
		website: string;
		company: {
			name: string;
			catchPhrase: string;
			bs: string;
		};
	}[] = [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496",
				},
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
		{
			id: 2,
			name: "Ervin Howell",
			username: "Antonette",
			email: "Shanna@melissa.tv",
			address: {
				street: "Victor Plains",
				suite: "Suite 879",
				city: "Wisokyburgh",
				zipcode: "90566-7771",
				geo: {
					lat: "-43.9509",
					lng: "-34.4618",
				},
			},
			phone: "010-692-6593 x09125",
			website: "anastasia.net",
			company: {
				name: "Deckow-Crist",
				catchPhrase: "Proactive didactic contingency",
				bs: "synergize scalable supply-chains",
			},
		},
		{
			id: 3,
			name: "Clementine Bauch",
			username: "Samantha",
			email: "Nathan@yesenia.net",
			address: {
				street: "Douglas Extension",
				suite: "Suite 847",
				city: "McKenziehaven",
				zipcode: "59590-4157",
				geo: {
					lat: "-68.6102",
					lng: "-47.0653",
				},
			},
			phone: "1-463-123-4447",
			website: "ramiro.info",
			company: {
				name: "Romaguera-Jacobson",
				catchPhrase: "Face to face bifurcated interface",
				bs: "e-enable strategic applications",
			},
		},
		{
			id: 4,
			name: "Patricia Lebsack",
			username: "Karianne",
			email: "Julianne.OConner@kory.org",
			address: {
				street: "Hoeger Mall",
				suite: "Apt. 692",
				city: "South Elvis",
				zipcode: "53919-4257",
				geo: {
					lat: "29.4572",
					lng: "-164.2990",
				},
			},
			phone: "493-170-9623 x156",
			website: "kale.biz",
			company: {
				name: "Robel-Corkery",
				catchPhrase: "Multi-tiered zero tolerance productivity",
				bs: "transition cutting-edge web services",
			},
		},
		{
			id: 5,
			name: "Chelsey Dietrich",
			username: "Kamren",
			email: "Lucio_Hettinger@annie.ca",
			address: {
				street: "Skiles Walks",
				suite: "Suite 351",
				city: "Roscoeview",
				zipcode: "33263",
				geo: {
					lat: "-31.8129",
					lng: "62.5342",
				},
			},
			phone: "(254)954-1289",
			website: "demarco.info",
			company: {
				name: "Keebler LLC",
				catchPhrase: "User-centric fault-tolerant solution",
				bs: "revolutionize end-to-end systems",
			},
		},
		{
			id: 6,
			name: "Mrs. Dennis Schulist",
			username: "Leopoldo_Corkery",
			email: "Karley_Dach@jasper.info",
			address: {
				street: "Norberto Crossing",
				suite: "Apt. 950",
				city: "South Christy",
				zipcode: "23505-1337",
				geo: {
					lat: "-71.4197",
					lng: "71.7478",
				},
			},
			phone: "1-477-935-8478 x6430",
			website: "ola.org",
			company: {
				name: "Considine-Lockman",
				catchPhrase: "Synchronised bottom-line interface",
				bs: "e-enable innovative applications",
			},
		},
		{
			id: 7,
			name: "Kurtis Weissnat",
			username: "Elwyn.Skiles",
			email: "Telly.Hoeger@billy.biz",
			address: {
				street: "Rex Trail",
				suite: "Suite 280",
				city: "Howemouth",
				zipcode: "58804-1099",
				geo: {
					lat: "24.8918",
					lng: "21.8984",
				},
			},
			phone: "210.067.6132",
			website: "elvis.io",
			company: {
				name: "Johns Group",
				catchPhrase: "Configurable multimedia task-force",
				bs: "generate enterprise e-tailers",
			},
		},
		{
			id: 8,
			name: "Nicholas Runolfsdottir V",
			username: "Maxime_Nienow",
			email: "Sherwood@rosamond.me",
			address: {
				street: "Ellsworth Summit",
				suite: "Suite 729",
				city: "Aliyaview",
				zipcode: "45169",
				geo: {
					lat: "-14.3990",
					lng: "-120.7677",
				},
			},
			phone: "586.493.6943 x140",
			website: "jacynthe.com",
			company: {
				name: "Abernathy Group",
				catchPhrase: "Implemented secondary concept",
				bs: "e-enable extensible e-tailers",
			},
		},
		{
			id: 9,
			name: "Glenna Reichert",
			username: "Delphine",
			email: "Chaim_McDermott@dana.io",
			address: {
				street: "Dayna Park",
				suite: "Suite 449",
				city: "Bartholomebury",
				zipcode: "76495-3109",
				geo: {
					lat: "24.6463",
					lng: "-168.8889",
				},
			},
			phone: "(775)976-6794 x41206",
			website: "conrad.com",
			company: {
				name: "Yost and Sons",
				catchPhrase: "Switchable contextually-based project",
				bs: "aggregate real-time technologies",
			},
		},
		{
			id: 10,
			name: "Clementina DuBuque",
			username: "Moriah.Stanton",
			email: "Rey.Padberg@karina.biz",
			address: {
				street: "Kattie Turnpike",
				suite: "Suite 198",
				city: "Lebsackbury",
				zipcode: "31428-2261",
				geo: {
					lat: "-38.2386",
					lng: "57.2232",
				},
			},
			phone: "024-648-3804",
			website: "ambrose.net",
			company: {
				name: "Hoeger LLC",
				catchPhrase: "Centralized empowering task-force",
				bs: "target end-to-end models",
			},
		},
	];
}

// jsonplaceholder 무료로 api제공해주는 사이트
