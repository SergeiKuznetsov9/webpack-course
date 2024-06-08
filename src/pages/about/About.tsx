import Jpg from "@/assets/abstract.jpg";
import Png from "@/assets/albert_einstein_avatar_icon_263209.png";
import SVGType from "@/assets/genetic-data-svgrepo-com.svg";

const About = () => (
  <>
    /<h1>About</h1>
    <div>{Jpg}</div>
    <img src={Jpg} />
    <div>{Png}</div>
    <img src={Png} />
    <SVGType fill="red" stroke="red" width={50} height={50} />
  </>
);

export default About;
