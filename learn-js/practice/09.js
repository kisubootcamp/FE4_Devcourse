// 1. 객체 병합
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 2. 키-값 배열화
function objectToArray(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

// 3. 객체 값 필터링
function filterByThreshold(obj, threshold) {
  const result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] >= threshold) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 4. 객체의 갑 변화
function squareValues(obj) {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key] * obj[key];
    }
  }
  return result;
}

// 5. 객체에서 특정 키 삭제
function deleteKey(obj, keyToDelete) {
  let result = {};

  for (let key in obj) {
    if (key !== keyToDelete) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 6. 객체의 중복 값 제거
function removeDuplicateValues(obj) {
  let count = {};
  let result = {};

  for (let key in obj) {
    const value = obj[key];

    if (count[value]) {
      count[value] += 1;
    } else {
      count[value] = 1;
    }
  }

  for (let key in obj) {
    if (count[obj[key]] === 1) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 7. 객체의 값으로 키 찾기
function findKeyByValue(obj, index) {
  for (let key in obj) {
    if (obj[key] === index) {
      return key;
    }
  }
  return null;
}

// 8. 객체의 모든 값 곱하기
function multiplyValues(obj) {
  let result = 1;

  for (let key in obj) {
    result *= obj[key];
  }
  return result;
}
