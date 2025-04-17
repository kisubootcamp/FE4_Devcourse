{
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("Salary");
    }
  }

  const employee = new Employee("Ho");
  employee.getSalary(); // Salary

  class Manager extends Employee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }
    getManager() {
      console.log(`${this.name} , ${this.role}`);
    }
  }

  const manager = new Manager("ji", "매니저");
  manager.getManager();
}
