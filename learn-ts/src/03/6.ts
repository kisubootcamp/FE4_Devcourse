{
    type User = {
        name: string;
        age: number;
    };
    type Developer = {
        skill: string;
    };

    type HumonDeveloper = User & Developer;

    let humon: User = {
        name: 'sucoding',
        age: 20,
    };

    let developer01: HumonDeveloper = {
        name: 'sucoding',
        age: 20,
        skill: 'TypeScript',
    };
}
