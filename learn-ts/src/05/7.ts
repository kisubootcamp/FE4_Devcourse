{
  class Employee {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("Salary! " + this.name);
    }
  }

  class Manager extends Employee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }
    getManager() {
      // Employee 클래스의 name이 private이면 Manager 클래스에서 사용 불가능
      // Employee 클래스의 name이 protected이면 Manager 클래스까지는 사용 불가능 (외부에서는 불가능)
      console.log(`${this.name}, ${this.role}`);
    }
  }

  const employee = new Employee("John");
  employee.getSalary();
  const manager = new Manager("Mike", "admin");
  manager.getSalary();
  manager.getManager();
}
