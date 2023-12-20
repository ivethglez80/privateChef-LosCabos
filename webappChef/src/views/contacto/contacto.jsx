import ContactForm from "../../components/contactform/contactForm"
import chefalfonso2 from "../../img/chefalfonso2.png"
import wpp from "../../img/wpp-logo2.png"
import ig from "../../img/instagram-logo.png"
import mail from "../../img/mail-logo.png"
import loc from "../../img/location-icono.png"

const Contacto = () => {
    return (
        <>
            {/* main container */}
            <div className="md:h-screen md:grid md:grid-cols-2 
                            sm:flex sm:flex-col-reverse                   
                            border-b-2 border-yellow-400">

                <div className="md:m-20 md:block sm:m-10 sm:pl-20 md:pl-14 pt-3 md:border-r-2 md:border-yellow-400">{/* contact info */}

                <div className="flex flex-row justify-start pb-16">
                    <img src={wpp} alt="" className="h-[40px] pr-5" />
                    <a href="https://api.whatsapp.com/send?phone=05491134318192&text=Hello, I need more info about the chef services" target="_blank" className="flex flex-col font-title text-slate-400">
                    <h2>WHATSAPP</h2>
                    <p>00-000-0000 0000</p>
                    </a>
                </div>

                <div className="flex flex-row justify-start pb-16 ">
                    <img src={ig} alt="" className="h-[40px] pr-5" />
                    <a href="https://www.instagram.com/chefalfonsogonzalez/" className="flex flex-col font-title text-slate-400">
                    <h2>INSTAGRAM</h2>
                    <p>@ChefAlfonsoGonzalez</p>
                    </a>
                </div>

                <div className="flex flex-row justify-start pb-16 ">
                    <img src={mail} alt="" className="h-[40px] pr-5" />
                    <a href="mailto:privatecheffalgonzalez@gmail.com" className="flex flex-col font-title text-slate-400" target="_blank">
                    <h2>E-MAIL</h2>
                    <p>privatecheffalgonzalez@gmail.com</p>
                    </a>
                </div>

                <div className="flex flex-row justify-start pb-16">
                    <img src={loc} alt="" className="h-[40px] pr-5" />
                    <div className="flex flex-col font-title text-slate-400">
                    <h2>LOCATION</h2>
                    <p>Los Cabos, BCS Mexico</p>
                    </div>
                </div>

                </div> {/* contact info ends */}

                <div className="my-12 sm:mx-auto  flex justify-start"> {/* contactForm */}
                    <ContactForm />
                </div> {/* contactForm ends*/}
                
            </div>{/* main container ends*/}            

        </>
    )
}

export default Contacto;