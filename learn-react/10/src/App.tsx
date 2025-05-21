import { useEffect } from "react";
import CountDisplay from "./components/CountDisplay";
import CountButtons from "./components/CountButtons";
import { useCountStore } from "./stores/CountStore";

export default function App() {
    useEffect(() => {
        const unsubscribe = useCountStore.subscribe(
            (state) => state.count,
            (newCount) => {
                console.log("new count: ", newCount);
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <CountDisplay />
            <CountButtons />
        </>
    );
}
