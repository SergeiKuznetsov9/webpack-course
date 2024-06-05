import { useState } from "react";
import "./App.css";
import "./App.scss";
import cls from "./App.module.scss";
// Для инкапсуляции стилей удобно пользоваться css модулями. Однако если мы попробуем импортировать классы
// вот таким образом:
// import classes from "./App.scss";
// мы получим ошибку, т.к. сборщик не распознает файлы с расширением .scss в качестве модулей
// ему нужно это объяснить и для этого создадим файл с типами
// После этого модули будут доступны для работы (если версия css-loader ниже 7, там почему то это поломалось)

// Однако, если мы посмотрим в браузере класс кнопки, то он будет предствлять собой набор символов. Для того
// чтобы разработка была комфортнее, можно настроить нэйминг присваиваемых классов, что и сделаем

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
