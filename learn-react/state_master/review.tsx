//state
//전역상태관리: 상태를 별도의 영역에서 지정 후 필요한 컴포넌트에 지급
//context: 전역상태처럼 컴포넌트 간 데이터를 공유할 수 있게 해주는 데이터 통로

/*useContext: 컨텍스트 API를 통해 전역적으로 상태관리, prop drilling 피할 수 있음
createContext로 컨텍스트 생성후 <컨텍스트><컴포넌트></컨텍스트>형태로 사용
counter->countergroup->countDisplay
                   ->countButton
countOutsider

//App.tsx
<CounterProvider>
    <Count />
</CounterProvider>

//provider/CounterProvider
increment,decrement,reset 정의 후 memoization에 useMemo로 메모이제이션
<CounterActionContext value={memoization}>
    <CounterContext value={{ count }}>{children}</CounterContext>
</CounterActionContext>
=>children에는 Count가 들어감

//CounterContext.ts
export const CounterContext = createContext(null);
export const CounterActionContext = createContext(null);

*/

/*Redux+Toolkit
 */

/*zustand
//App.tsx
<Count/>

//stores/counterStore.ts
export const useCounterStore=create((set)=>{increment:()=>{}, decrement:()=>{}})

//Count
=>counterStore.ts의 useCounterStore 이용해서 count 상태값 업데이트
 */
