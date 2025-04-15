{
    // 1번 문제
    type Person = {
        name: string;
        age: number;
    }

    const user: Person = {
        name: "ChoJeonWoo",
        age: 28
    }
    const getPersonInfo = (user: Person): void => {
        console.log(user.name + user.age);
    }
    getPersonInfo(user);
}

{
    // 2번 문제
    type Config = {
        host: string;
        port: number;
        ssl: boolean;
    }
    const createConfig = (host: string,port: number, ssl: boolean):Config =>{
        return {
            host,
            port,
            ssl
        }
    }
    const config = createConfig('localhost', 8080, true);
    console.log(config);
}

{
    // 3번 문제
    type Rectangle ={
        width: number;
        height: number;
    }

    const calculateArea = (rectangle: Rectangle):void =>{
        console.log(rectangle.width * rectangle.height);
    }
    calculateArea({width:10,height:5});
}

{
    // 4번 문제
    type Student = {
        name: string;
        age: number;
        grades: number[];
    }

    const student: Student = {
        name: "ChoJeongWoo",
        age: 28,
        grades: [85, 90, 50, 70]
    };
    const calculateAverageGrade = (student: Student): void =>{
        const sum = student.grades.reduce((acc, num) => acc+num, 0);
        const ave = sum / student.grades.length;
        console.log(ave);
    }
    
    calculateAverageGrade(student)    
}