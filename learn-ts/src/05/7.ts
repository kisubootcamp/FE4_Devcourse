{
	class Employee {
		name: string;
		constructor(name: string) {
			this.name = name;
		}

		getSalary() {
			console.log(`Salary!`);
		}
	}

	class Manager extends Employee {
		role: string;

		constructor(name: string, role: string) {
			super(name); // 그냥 super쓰면 안됨. 매개변수에 name적고 name을 super 매개변수로 넘겨줘야 됨.
			this.role = role;
		}

		getManager() {
			console.log(`${this.name}, ${this.role}`);
		}
	}

	const employee = new Employee("John");
	const manager = new Manager("Mike", "admin");
	employee.getSalary();
  manager.getManager();
  manager.getSalary();
}
{
	class Employee {
		private name: string;
		constructor(name: string) {
			this.name = name;
		}

		getSalary() {
			console.log(`Salary!` + this.name); // 이 안에서 접근은 가능하지만
		}
	}

	class Manager extends Employee {
		role: string;

		constructor(name: string, role: string) {
			super(name); // 그냥 super쓰면 안됨. 매개변수에 name적고 name을 super 매개변수로 넘겨줘야 됨.
			this.role = role;
		}

		getManager() {
			// console.log(`${this.name}, ${this.role}`); // 여기서 private 변수에 접근할 수 없음.
		}
	}

	const employee = new Employee("John");
	const manager = new Manager("Mike", "admin");
	employee.getSalary();
  manager.getManager();
  manager.getSalary();
}
{
	class Employee {
		protected name: string;
		constructor(name: string) {
			this.name = name;
		}

		getSalary() {
			console.log(`Salary!` + this.name);
		}
	}

	class Manager extends Employee {
		role: string;

		constructor(name: string, role: string) {
			super(name); // 그냥 super쓰면 안됨. 매개변수에 name적고 name을 super 매개변수로 넘겨줘야 됨.
			this.role = role;
		}

		getManager() {
			console.log(`${this.name}, ${this.role}`); // protected는 상속 받은 클래스가 사용 가능
		}
	}

	const employee = new Employee("John");
	const manager = new Manager("Mike", "admin");
  // employee.name; // 바깥에서 접근이 안된다.
	employee.getSalary();
  manager.getManager();
  manager.getSalary();
}
