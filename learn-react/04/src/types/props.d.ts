// .d.ts 파일을 쓰면 export, import를 사용하지 않아도 된다.
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위해 사용하는 파일 형식

interface UserProps {
    message: string;
    count: number;
    isVisible: boolean;
    tags: string[];
    user: { id: number; name: string };
    myFunction: (message: string) => void;
    greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
