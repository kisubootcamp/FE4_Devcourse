{
  const printValue = (value: string | number): void => console.log(value);

  printValue("Hello");
  printValue(42);

  const doubleOrLength = (value: string | number): number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };
  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10));

  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };

  const mergeObjects = (
    person: Person,
    employee: Employee
  ): Person & Employee => {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);

  const getFirstElement = (
    value: number[] | string[]
  ): number | string | undefined => {
    if (value.length !== 0) return value[0];
    else return undefined;
  };
  console.log(getFirstElement([1, 2, 3]));
  console.log(getFirstElement(["a", "b", "c"]));
  console.log(getFirstElement([]));

  const isEqual = (a: string | number, b: string | number): boolean => a === b;
  console.log(isEqual(10, 10));
  console.log(isEqual("hello", "world"));
  console.log(isEqual(5, "5"));

  type Person2 = { name: string; age: number };
  const updateAddress = (
    person: Person2,
    addr?: string
  ): Person2 & { address?: string } => {
    return addr ? { ...person, address: addr } : person;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);

  const maxValue = (
    a: string | number,
    b: string | number
  ): string | number => {
    if (typeof a === "string" && typeof b === "string")
      return a.length > b.length ? a : b;
    else return a >= b ? a : b;
  };

  console.log(maxValue(10, 20));
  console.log(maxValue("apple", "banana"));
  console.log(maxValue(30, 30));
  console.log(maxValue("cat", "dog"));

  function getValue(val: string | number): string {
    return `${val}`;
  }

  console.log(getValue(123));
  console.log(getValue("abc"));

  type Person3 = { name: string; age: number };
  type Contact = { email: string };

  const createContact = (
    person: Person3,
    contact: Contact
  ): Person3 & Contact => {
    return { ...person, ...contact };
  };
  const person3 = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person3, contact);
  console.log(personWithContact);

  const getAge = (val: string | number): number => {
    if (typeof val === "string") return Number(val);
    else return val;
  };
  console.log(getAge("25"));
  console.log(getAge(30));
  console.log(getAge("abc"));

  const processInput = (val: string | number | boolean): string | number => {
    if (typeof val === "string") return val.toUpperCase();
    else if (typeof val === "number") return val ** 2;
    else return val ? "YES" : "NO";
  };
  console.log(processInput("hello"));
  console.log(processInput(5));
  console.log(processInput(true));

  const getFirstCharacter = (val: string | number): string | number => {
    if (typeof val === "string") return val[0];
    else return val.toString()[0];
  };

  console.log(getFirstCharacter("hello"));
  console.log(getFirstCharacter(12345));

  type Person4 = { name: string; age: number };
  type Employee2 = { jobTitle: string; salary: number };

  const combinePersonAndEmployee = (
    person: Person4,
    employee: Employee2
  ): Person4 & Employee2 => {
    return { ...person, ...employee };
  };

  const person4 = { name: "Alice", age: 30 };
  const employee2 = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person4, employee2));

  type idObj = { id: number | string };
  const getIdValue = (obj: idObj): number => {
    if (typeof obj.id === "string") return obj.id.length;
    else return obj.id;
  };

  console.log(getIdValue({ id: 123 }));
  console.log(getIdValue({ id: "hello123" }));

  const formatDate = (val: string | Date): string => {
    if (typeof val === "string") return val;
    else {
      const year = val.getFullYear();
      const month = val.getMonth().toString().padStart(2, "0");
      const day = val.getDate().toString().padStart(2, "0");
      return `${month}/${day}/${year}`;
    }
  };

  console.log(formatDate("2024-11-19"));
  console.log(formatDate(new Date(2024, 6, 19)));

  const convert = (val: number | string): number | string => {
    if (typeof val === "number") return val.toString();
    else return Number(val);
  };
  console.log(convert(123));
  console.log(convert("456"));
  console.log(convert("abc"));

  type Person5 = { name: string; age: number };
  type Address = { street: string; city: string; zipcode: string };

  const combinePersonAndAddress = (
    person: Person5,
    addr: Address
  ): Person5 & Address => {
    return { ...person, ...addr };
  };
  const person5 = { name: "John", age: 25 };
  const address = {
    street: "123 Elm St",
    city: "Springfield",
    zipcode: "12345",
  };
  console.log(combinePersonAndAddress(person5, address));

  const compareValues = (a: string | number, b: string | number): boolean => {
    if (typeof a === "string" && typeof b === "string") return a > b;
    else return a > b;
  };
  console.log(compareValues(10, 20));
  console.log(compareValues("apple", "banana"));
  console.log(compareValues("grape", "apple"));

  const checkEvenOdd = (val: string | number): string => {
    if (typeof val === "string")
      return val.length % 2 ? "Odd Length" : "Even Length";
    else return val % 2 ? "Odd" : "Even";
  };
  console.log(checkEvenOdd(4));
  console.log(checkEvenOdd(7));
  console.log(checkEvenOdd("hello"));
  console.log(checkEvenOdd("code"));

  type Person6 = { name: string; age: number };
  type ContactInfo = { email?: string; phoneNumber?: string };

  const mergeContactInfo = (
    person: Person6,
    contactInfo?: ContactInfo
  ): Person6 & ContactInfo => {
    return { ...person, ...contactInfo };
  };

  const person6 = { name: "Alice", age: 30 };
  const contactInfo = {
    email: "alice@example.com",
    phoneNumber: "123-456-7890",
  };
  console.log(mergeContactInfo(person6, contactInfo));

  const personWithoutContact = { name: "Bob", age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {}));
}
