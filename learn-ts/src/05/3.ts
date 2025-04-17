{
    // 1. <T, U>
    // T: Type -> 일반적인 타입(가장 흔하게 사용)
    // U: Another Type -> 두번째 타입
    // K: Key -> 객체 타입의 키
    // V: Value -> 객체 타입의 값
    // E: Element -> 주로 배열 요소의 타입
    // R: Return Type -> 반환 값의 타입 (함수에서 사용)

    type Pair<T extends string|number, U extends number> = T|U;
}