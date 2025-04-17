{
    // 1번문제
    interface Person{
        name: string;
        age: number;
    }
}

{
    // 2번 문제
    interface Car{
        brand: string;
        model: string;
        start(): void;
    }
    const carFunc: Car = {
        brand: 'Hyundai',
        model: 'Genesis',
        start() {
            console.log(this.brand + " " + this.model + " 드림카");
        } 
    };

    carFunc.start();
}

{
    // 3번 문제
    interface Employee{
        name: string;
        position: string;
        department?: string;
    }
}

{
    // 4번 문제
    interface Team{
        name: string;
        members: string[];
    }
}

{
    // 5번 문제
    interface Animal{
        name: string;
        age: number;
    }

    interface Dog extends Animal{
        breed: string;
    }
}

{
    // 6번 문제
    interface Person{
        name: string;
        age: number;
        greet(): string;
    }

    const person = {
        name: 'ChoJenogWoo',
        age: 28,
        greet(){
            return "Hello, my name is " + this.name;
        }
    }

    console.log(person.greet());
}

{
    // 7번
    interface Shape{
        area(): void;
    }
    interface Circle extends Shape{
        radius: number;
    }
    interface Rectangle extends Shape{
        width: number;
        height: number;
    }
}

{
    // 8번
    interface Person{
        name: string;
        age: number;
    }
    interface Address{
        street: string;
        city: string;
        zipcode: number;
    }

    type Contact = Person & Address;
}   

{
    // 9번
    interface Dictionary {
        [key: string]: string;
    }
}

{
    // 10번
    interface Operation{
        (a: number, b: number): number;
    }

    const add: Operation = (a, b) => {
        return a + b;
    };
    
    const subtract: Operation = (a, b) => {
        return a - b;
    };
    
    // 3. 테스트 출력
    console.log(add(5, 3));       
    console.log(subtract(5, 3));
    
}