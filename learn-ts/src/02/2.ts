{
  //객체
  let user: {
    name: string;
    age: number;
  } = {
    name: 'ty',
    age: 20,
  };

  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: 'John',
    likesFood: ['apple', 'banana'],
    address: {
      street: 'Gang-nam',
      city: 'seoul',
    },
  };

  let peopleArr: { id: number; name: string }[] = [
    { id: 1, name: 'se' },
    { id: 1, name: 'se' },
  ];

  let foodArr: { id: number; food: string[] }[] = [
    { id: 1, food: ['banana'] },
    { id: 1, food: ['apple'] },
  ];
}
