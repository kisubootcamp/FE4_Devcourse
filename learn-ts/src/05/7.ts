{
  //class 예제 다시보기
  class Employee {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("Salary!" + this.name);
    }
  }
  class Manager extends Employee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }
    getManager() {
      console.log(`${this.name}${this.role}`);
    }
  }
  const employee = new Employee("John");
  employee.getSalary();

  const manager = new Manager("Mike", "admin");
  manager.getManager();
  manager.getSalary();
}

{
  // 강사님 코드
  class Employee {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("Salary!" + this.name);
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

  const manager = new Manager("Mike", "admin");
  manager.getSalary();
  manager.getManager();
}
