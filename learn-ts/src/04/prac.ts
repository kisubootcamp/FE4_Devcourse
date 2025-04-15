//인터페이스 연습문제

{
    //1.
    interface Person{
        name:string;
        age:number;
    }
}
{
    //2.
    interface Car{
        brand:string;
        model:string;
        start():void;
    }
    const cars:Car={
        brand:"a",
        model:"b",
        start(){
            console.log("start!");
        },
    };

}

{
    //3.
    interface Employee{
        name:string;
        position:string;
        department?:string;
    }
    const human:Employee={
        name:"minji",
        position:"frontend",
    }
    
}
{
    //4.
    interface Team{
        name:string;
        members:string[];
    }
    const team2:Team={
        name:"team2",
        members:["a","b","c","d","e"];
    }
}
{
    //5.
    interface Animal{
        name:string;
        age:number;
    }
    interface Dog extends Animal{
        breed:string;
    }

}
{
    //6.
    interface Person{
        name:string;
        age:number;
        greet():string;
    }
    const man:Person={
        name:"minji",
        age:25,
        greet(){
            return(`Hello, my name is ${this.name}`);
        }
    }

}

{
    //7.
    interface Shape{
        area():void;
    }
    interface Circle extends Shape{
        radius:number;
    }
    interface Rectangle extends Shape{
        width:number;
        height:number;
    }
}
{
    //8.
    interface Person{
        name:string;
        age:number;
    }
    interface Address{
        street:string;
        city:string;
        zipcode:string;
    }
    const Contact:Person&Address={
        name:"minji",
        age:25,
        street:"st",
        city:"suwon",
        zipcode:"",
    }
}
{
    //9.?
    interface Dictionary{
        [key:string]:string;
    }
    const dict:Dictionary={
        street:"st",
    }
}
{
    //10.?
    interface Operation{
        (a:number,b:number):number;
    };
    //화살표 함수로
    const add:Operation=(a,b)=>a+b;
    const subtract:Operation=(a,b)=>a-b;
    
}