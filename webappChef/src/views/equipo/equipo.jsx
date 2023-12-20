import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import {Transition} from "@headlessui/react";
import "./equipo.css";
import equipo1 from "../../img/equipo1.png";
import equipo2 from "../../img/equipo2.png";
import equipo3 from "../../img/equipo3.png";

const Equipo = () => {
  const images = [equipo1, equipo2, equipo3];
  const[index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="md:h-screen md:grid md:grid-cols-2 
                        sm:flex sm:flex-col                   
                        border-b-2 border-yellow-400"> {/* el div que contiene todo */}

        <div className="font-txt text-slate-200 mx-10 sm:my-6 md:mt-20"> {/* textos */}

        <h1 className="font-signature text-yellow-400 text-5xl flex justify-center md:pb-3 "><FormattedMessage id="equipo.title" defaultMessage="About us" /></h1>
        <p className="mb-4">
            <FormattedMessage id="equipo.p1" defaultMessage="Each member of Chef Alfonso's working team is a passionate professional with a solid background in the gastronomic and tourism service industry. The Chef has instilled in each of them a passion for excellence, attention to detail, and a clear mission: for you to enjoy unforgettable moments." />
        </p>
        <p className="mb-4">
            <FormattedMessage id="equipo.p2" defaultMessage="Our service approach is personalized for each occasion, and with unwavering dedication, Chef Alfonso's team is ready to turn every moment into an extraordinary event." />
        </p>
        <p>
            <FormattedMessage id="equipo.p2" defaultMessage="We diligently work to make your stay in Los Cabos an experience where excellence is the norm, and your satisfaction is our greatest reward." />
        </p>
      </div>

        <div className=""> {/* img carrousel */}
        {images.map((image, i) => (
        <Transition
          key={i}
          show={i === index}
          enter="transition-opacity duration-300 "
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 "
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            key={i}
            src={image}
            alt={`slide-${i}`}
            className="md:h-screen md:object-scale-down sm:px-10 sm:mb-6 md:pr-10 "
          />
        </Transition>
      ))}
        </div>
      </div>
    </>
  );
};

export default Equipo;

