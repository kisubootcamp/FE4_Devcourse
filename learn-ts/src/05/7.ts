{
  // private : 자신 외 다른 클래스에서는 접근할 수 없음(상속포함)
  // protected: 상속 접근 허용. 외에 다른 클래스에서는 접근할 수 없음
  class Emplyee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    getSalary() {
      console.log("Salary!");
    }
  }

  class Manager extends Emplyee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }

    getManager() {
      console.log(`${this.name}, ${this.role}`);
    }
  }

  const employee = new Emplyee("John");
  const manager = new Manager("Mike", "admin");
  manager.getManager();
}
