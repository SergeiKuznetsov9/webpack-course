import Jpg from "@/assets/abstract.jpg";
import Png from "@/assets/albert_einstein_avatar_icon_263209.png";
import SVGType from "@/assets/genetic-data-svgrepo-com.svg";

const About = () => (
  <>
    /<h1>About</h1>
    {/* 
     такой вариант нам генерит путь http://localhost:3000/c03692314f038f936f98.jpg
     Если его вставитьт в src нужного тега, отобразится картинка

     Такая подгрузка работает и с SVG тоже. Но svg мы обработаем по-другому, поскольку таким маркаром,
     в svg не прокинешь никаких пропсов
    */}
    <div>{Jpg}</div>
    <img src={Jpg} />
    <div>{Png}</div>
    <img src={Png} />
    <div>{SVGType}</div>
    <img src={SVGType} />
  </>
);

export default About;
