{
    // 1번
    function sumAllNumbers(...arrays: number[][]): number[] {
      return arrays.map(arr => arr.reduce((sum, num) => sum + num, 0));
    }

    const sumAllNumbersArrow = (...arrays: number[][]): number[] => {
        return arrays.map(arr => arr.reduce((sum, num) => sum + num, 0));
    };
  
    const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
    console.log("1번 화살표 : " + result);

    const resultArrow = sumAllNumbersArrow([1, 2], [3, 4, 5], [6, 7]);
    console.log("1번 화살표 : " + resultArrow);

    
    // 2번
    function doubleValue(input: number | string): number {
        if (typeof input === "number") {
          return input * 2;
        } else {
          return input.length * 2;
        }
      }

    const doubleValueArrow = (doubleValue: number | string): number | string  =>{
        if(typeof doubleValue === "number" ){
            return doubleValue *2;
        }else{
            return doubleValue.length *2;
        }
    }

    const result1 = doubleValue(5); 
    const result2 = doubleValue("hello"); 
    console.log("2번 : " + result1); 
    console.log("2번 : " + result2); 
    
    const result1Arrow = doubleValueArrow(5); 
    const result2Arrow = doubleValueArrow("hello"); 
    console.log("2번 화살표 : " + result1Arrow); 
    console.log("2번 화살표 : " + result2Arrow);

    // 3번
    function multiplyArrays(arr1: number[] , arr2: number[]): number[]{
      const minLength = Math.min(arr1.length, arr2.length);
      const result: number[] = [];

      for (let i = 0; i < minLength; i++) {
        result.push(arr1[i] * arr2[i]);
      }

      return result;
    }

    const multiplyArraysArrow = (arr1: number[] , arr2: number[]): number[] =>{
      const minLength = Math.min(arr1.length, arr2.length);
      const result: number[] = [];
      console.log(minLength); 

      for (let i = 0; i < minLength; i++) {
        result.push(arr1[i] * arr2[i]);
      }

      return result;
    }
    
    const result3 = multiplyArrays([1, 2, 3], [4, 5, 6]);
    console.log(result3); 

    const result3Arrow = multiplyArraysArrow([1, 2, 3], [4, 5, 6]);
    console.log(result3Arrow); 

    // 4번
    function intersection(arr1: number[], arr2: number[]): number[]{
      return arr1.filter((value) => arr2.includes(value));
    }

    const intersectionArrow = (arr1: number[], arr2: number[]): number[] => {
      return arr1.filter((value) => arr2.includes(value));
    }

    const result4 = intersection([1, 2, 3], [2, 3, 4]);
    console.log(result4); 

    const result4Arrow = intersectionArrow([1, 2, 3], [2, 3, 4]);
    console.log(result4Arrow); 

    // 5번 애매함
    type PersonInfo = {
      name?: string;
      age?: number;
    };
    
    // function formatInfo(info: PersonInfo): string | number {
    //   if (info.name !== undefined) {
    //     return info.name;
    //   }
    //   if (info.age !== undefined) {
    //     return info.age;
    //   }
    // }
    
    
    // const info = formatInfo({ name: "Alice" });
    // console.log(info); 

    // const infoArrow = formatInfoArrow({ name: "Alice" });
    // console.log(infoArrow); 
}