{
    // 문제1. Person 타입작성
    type Person = {
        name: string;
        age: number;
    };

    function getPersonInfo(person: Person): void {
        console.log(`${person.name},${person.age}`);
    }

    const person1: Person = {
        name: 'ty',
        age: 26,
    };

    getPersonInfo(person1);
}

{
    // 문제2. 객체 생성
    type Config = {
        host: string;
        port: number;
        ssl: boolean;
    };

    function createConfig(host: string, port: number, ssl: boolean): Config {
        return {
            host,
            port,
            ssl,
        };
    }

    //code

    const config = createConfig('localhost', 8080, true);
    console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
    // 문제3. Rectangle 타입작성
    type Rectangle = {
        width: number;
        height: number;
    };

    function calculateArea(rect: Rectangle): number {
        return rect.width * rect.height;
    }
}

{
    // 문제4. Student 타입작성
    type Student = {
        name: string;
        age: number;
        grades: number[];
    };

    function calculateAverageGrade(student: Student): number {
        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        return student.grades.length > 0 ? total / student.grades.length : 0;
    }
}

{
    // 문제5. Response 타입작성
    type Response = {
        status: string;
        data: string;
        message: string;
    };

    function createResponse(status: string, data: string, message: string): Response {
        return {
            status,
            data,
            message,
        };
    }

    // code

    console.log(createResponse('success', 'John', 'fetch success')); // { status: 'success', data: 'John', message: 'fetch success'
}

{
    // 문제6. Employee 타입작성
    type Employee = {
        id: string;
        name: string;
        position: string;
    };

    function getEmployeeInfo(employee: Employee): string {
        return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
    }

    //code

    console.log(getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })); // "james works as a developer with ID: 1."
}

{
    // 문제7. Circle 타입작성
    type Circle = {
        radius: number;
    };

    function calculateCircumference(circle: Circle): number {
        return 2 * Math.PI * circle.radius;
    }

    //code

    console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
    // 문제8. Product 타입작성
    type Product = {
        name: string;
        price: number;
        inStock: boolean;
    };

    function getDiscountedPrice(product: Product, discountPercent: number): number {
        const discount = product.price * (discountPercent / 100);
        return product.price - discount;
    }

    //code

    console.log(getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)); // 900
}

{
    // 문제9. Book 타입작성
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    };

    function getBookSummary(book: Book): string {
        return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
    }

    //code..

    console.log(getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })); // "river by james, published in 2020."
}

{
    // 문제10. Transaction 타입작성
    type Transaction = {
        id: string;
        amount: number;
        timestamp: string;
    };

    function isValidTransaction(tx: Transaction): boolean {
        return tx.amount > 0;
    }
}
