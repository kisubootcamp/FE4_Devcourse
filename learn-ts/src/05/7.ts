{
	// public: 어디서든 접근 가능
	// private: 해당 클래스 내부만 접근
	// protected: 상속된 클래스까지는 접근 허용
	// #: private + 은닉화

	class Employee {
		protected name: string;
		constructor(name: string) {
			this.name = name;
		}

		getSalary() {
			console.log(this.name + "'s Salary!");
		}
	}

	class Manager extends Employee {
		role: string;
		constructor(name: string, role: string) {
			super(name);
			this.role = role;
		}

		getManager() {
			console.log(`${this.name}, ${this.role}`);
		}
	}

	const employee = new Employee("John");
	const manager = new Manager("Mike", "admin");
	manager.getSalary();
	manager.getManager();
}
