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