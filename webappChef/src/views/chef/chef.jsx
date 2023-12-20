import { FormattedMessage } from "react-intl";
import fotochef from "../../img/chefalfonso.png";
import signature from "../../img/signature.png";

const Chef = () => {    

    return (
        
        <>
        <div className="md:h-screen md:grid md:grid-cols-2 
                        sm:flex sm:flex-col                   
                        border-b-2 border-yellow-400">

            {/*signature texto y frase*/}
            <div className="">
                <img src={signature} alt="chef alfonso signature" className="py-8 sm:w-1/2 md:w-2/3"/>

                <div className="font-txt text-slate-200 mx-6">
                    <p>
                        <FormattedMessage id="chef.p1" defaultMessage="From his childhood, Chef Alfonso has been captivated by the art of cooking. His early culinary experiments left family and friends astonished, revealing his innate talent from an early age." />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p2" defaultMessage="With dedication and determination, he studied and specialized in international cuisine, immersing himself in the richness of flavors from around the world." />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p3" defaultMessage="Every dish he creates is a culinary masterpiece, the result of years of experience and passion for gastronomy." />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p4" defaultMessage="With a solid academic foundation and a global perspective, this chef blends culinary traditions with innovation, offering unforgettable gastronomic experiences that delight the senses and satisfy the most discerning palates." />
                    </p>
                    {/* <p>
                        <FormattedMessage id="chef.p5" defaultMessage="aqui va el parrafo 5" />
                    </p> */}
                </div>

                    <p className="font-signature text-yellow-200 text-right pr-2 text-4xl font-medium my-6">
                        <FormattedMessage id="chef.phrase" defaultMessage="Gastronomy is not my profession, it is my life." />
                    </p>
            </div>

            {/*Foto de chef*/}
            <div>
                <img src={fotochef} alt="professional chef at los cabos san lucas" className="md:h-screen sm:w-screen"/>
            </div>
        
            

        </div>
        </>
        
    )
};

export default Chef;