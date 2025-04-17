//this 개념
//this -> this는 나를 호출한 객체
console.log(this); // 암기 window 객체

const obj = {
    name: 'obj',
    run: function(){
        console.log(this);
    }
}
obj.run();  //obj


// 단축 속성명
function run1(){
    console.log(this);
}
const obj1 = {
    name: 'obj1',
    run1
}
obj1.run1();  //obj

// smallObject
const obj3 = {
    name: 'obj',
    smallObject : {
        name: 'smallObject',
        smallRun: function(){
            console.log(this);
        }
    }
}
obj3.smallObject.smallRun();  //obj


//bind 단축속성명에서는 바인드 불가능
const obj4 = {
    name: "sucoding",
    smallObject: {
        name: "프로그래머스",
        run: function () {
            console.log(this); // 프로그래머스
        }.bind({ name: "프로그래머스" }),
        run2() {
            console.log(this);
        },
    },
};

obj4.smallObject.run();
obj4.smallObject.run2();
