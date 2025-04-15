{
  class Employee {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }

    getSalary() {
      console.log("Salary");
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
  manager.getManager();
  manager.getSalary();

}
