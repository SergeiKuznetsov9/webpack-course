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
    <div>{SVGType}</div>
    <img src={SVGType} />
  </>
);

export default About;
