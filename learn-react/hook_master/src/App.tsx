// import UseDeferredValue from "./components/hooks/basic/UseDeferredValue";
import UseTransition from "./components/hooks/basic/UseTransition";
import ShoppingCart from "./components/hooks/higher/cart/ShoppingCart";
import WeatherCard from "./components/hooks/higher/weather/WeatherCard";
import WithTransitionSearch from "./components/hooks/pratice/useTransition/WithTransitionSearch";
// import Todo from "./components/todos/memoization/Todo";

export default function App() {
  return (
    <>
      {/* <UseReducerPracticer /> */}
      <ShoppingCart />
      <WeatherCard />
    </>
  );
}
