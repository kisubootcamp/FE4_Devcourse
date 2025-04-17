# React v19 + TailwindCSS + Vite Starter Pack

## 구성

- Vite 6.2.0
- React 19.0.0
- TailwindCSS 4.1.4
- Tailwind-Merge 3.2.0

## 실행 방법

```bash
git clone

npm install

npm run dev
```

## Login Layout & Sign In Layout 작업

- 두 컴포넌트가 비슷한 디자인으로 구성되어 있어 재활용함
  - 이 과정에서 부득이하게 useState 가 사용되었지만... 읍읍
- Latout 파일 하나로 props 로 내려온 값으로 login, signin 을 구분하여 다르게 로드함
