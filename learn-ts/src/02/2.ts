{
    // 객체
    // Record<string, never> -> 객체의 키 값은 문자열, 값은 절대 올 수 없다
    let obj: Record<string, never> = {}; // null과 undefined를 제외한 모든 값을 허용하겠다는 됨

    let user: {
        name: string;
        age: number;
    } = {
        name: "sucoding",
        age: 20,
    };

    let person: {
        name: string;
        likesFood: string[];
        address: {
            street: string;
            city: string;
        };
        isLoggedIn: boolean;
    } = {
        name: "John",
        likesFood: ["apple", "banana"],
        address: {
            street: "Gang-nam",
            city: "seoul",
        },
        isLoggedIn: false,
    };

    let peopleArr: { id: number; name: string }[] = [
        { id: 1, name: "sucoding" },
        { id: 1, name: "sucoding" },
    ];

    let foodArr: { id: number; foods: string[] }[] = [
        { id: 1, foods: ["apple"] },
        { id: 1, foods: ["banana"] },
    ];

    let jsonObject: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    }[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    }
    ];
}
