import ContactForm from "../../components/contactform/contactForm"
import chefalfonso2 from "../../img/chefalfonso2.png"
import wpp from "../../img/wpp-logo2.png"
import ig from "../../img/instagram-logo.png"
import mail from "../../img/mail-logo.png"
import loc from "../../img/location-icono.png"

const Contacto = () => {

    const handleCopyToClipboard = () => {
        const email = 'privatecheffalgonzalez@gmail.com';
        const textArea = document.createElement('textarea');
        textArea.value = email;    
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Dirección de correo copiada al portapapeles');
      };

      
    return (
        <>
            {/* main container */}
            <div className="md:h-screen md:grid md:grid-cols-2 
                            flex flex-col-reverse                   
                            border-b-2 border-yellow-400">

                <div className="md:m-16 md:block m-10 md:pl-0 pt-3 md:border-r-2 md:border-yellow-400">{/* contact info */}

                <div className="flex flex-row justify-start pb-16">
                    <img src={wpp} alt="" className="h-[40px] pr-5" />
                    <a href="https://api.whatsapp.com/send?phone=05491134318192&text=Hello, I need more info about the chef services" target="_blank" className="flex flex-col font-title text-slate-400 hover:text-slate-100">
                    <h2>WHATSAPP</h2>
                    <p>00-000-0000 0000</p>
                    </a>
                </div>

                <div className="flex flex-row justify-start pb-16 ">
                    <img src={ig} alt="" className="h-[40px] pr-5" />
                    <a href="https://www.instagram.com/chefalfonsogonzalez/" target="_blank" className="flex flex-col font-title text-slate-400 hover:text-slate-100">
                    <h2>INSTAGRAM</h2>
                    <p>@ChefAlfonsoGonzalez</p>
                    </a>
                </div>

                <div className="flex flex-row justify-start pb-16 ">
                    <img src={mail} alt="" className="h-[40px] pr-5" />
                    <div className="flex flex-col font-title text-slate-400 hover:text-slate-100">
                    <h2>E-MAIL</h2>
                    <p onClick={handleCopyToClipboard} style={{ cursor: 'pointer' }}> privatecheffalgonzalez@gmail.com </p>
                    </div>
                </div>

                <div className="flex flex-row justify-start pb-16">
                    <img src={loc} alt="" className="h-[40px] pr-5" />
                    <div className="flex flex-col font-title text-slate-400">
                    <h2>LOCATION</h2>
                    <p>Los Cabos, BCS Mexico</p>
                    </div>
                </div>

                </div> {/* contact info ends */}

                <div className="my-12 mx-6  flex justify-start"> {/* contactForm */}
                    <ContactForm />
                </div> {/* contactForm ends*/}
                
            </div>{/* main container ends*/}            

        </>
    )
}

export default Contacto;