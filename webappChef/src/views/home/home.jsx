import { FormattedMessage } from "react-intl";
import hero from "../../img/hero.png";
import herosm from "../../img/herosm.png";

const Home = () => {
    return (
        <div>
           <img src={hero} alt="logo vacation services" 
           className="       
           md:h-screen md:w-screen hidden md:block
           "/>
           <img src={herosm} alt="logo holidays at los cabos" 
           className="
           md:hidden block w-full h-auto
           "/>
        </div>
    );
};

export default Home;
