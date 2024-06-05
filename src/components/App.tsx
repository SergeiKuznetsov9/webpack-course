import { useState } from "react";
import "./App.css";
import "./App.scss";
import cls from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      <h1 className={cls.value}>{count}</h1>
      <button className={cls.button} onClick={increment}>
        <span>Increment</span>
      </button>
    </div>
  );
};
