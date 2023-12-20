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
                <img src={signature} alt="chef alfonso signature" className="my-8 sm:w-1/2 md:w-2/3 lg:pt-16"/>

                <div className="font-txt text-slate-200 mx-6">
                    <p>
                        <FormattedMessage id="chef.p1" defaultMessage="aqui va el parrafo 1" />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p2" defaultMessage="aqui va el parrafo 2" />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p3" defaultMessage="aqui va el parrafo 3" />
                    </p>
                    <p>
                        <FormattedMessage id="chef.p4" defaultMessage="aqui va el parrafo 4" />
                    </p>
                    {/* <p>
                        <FormattedMessage id="chef.p5" defaultMessage="aqui va el parrafo 5" />
                    </p> */}
                </div>

                    <p className="font-signature text-yellow-200 text-right pr-2 text-4xl font-medium my-6">
                        <FormattedMessage id="chef.phrase" defaultMessage="aqui va la frase" />
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