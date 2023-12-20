import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Transition } from "@headlessui/react";
import "../equipo/equipo.css"
import e1 from "../../img/events1.png";
import e2 from "../../img/events2.png";
import e3 from "../../img/events3.png";
import e4 from "../../img/events4.png";

const Eventos = () => {

    const images = [
        
        e3,
        e4,
        "https://i.ibb.co/w7qXS4y/wedding-at-los-cabos.png",
        "https://i.ibb.co/8Nsw7sz/dinner-at-the-beach.png",
        "https://i.ibb.co/94fr661/El-Equipo-1.png",
        "https://i.ibb.co/N711cQ5/El-Equipo.png",
        "https://i.ibb.co/j5fgqj5/friends-at-los-cabos.png",
        "https://i.ibb.co/tXj5PrV/wedding-at-los-cabos-2.png",
        "https://i.ibb.co/kc69FB8/wedding-at-los-cabos-3.png",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className=" md:h-screen                       
                        border-b-2 border-yellow-400">


                <div className="flex justify-center md:relative"> 
                    <div className="absolute text-slate-200 sm:w-5/6 md:w-2/3 sm:mt-6 md:mt-14 lg:mt-24 p-4 rounded-xl bg-slate-800 bg-opacity-50">
                        <h1 className="sm:text-3xl md:text-4xl text-yellow-300 font-title flex justify-center">
                            <FormattedMessage id="events.title" defaultMessage="EVENTS & OCASSIONS" />
                        </h1>
                        <p className="font-txt sm:text-xl md:text-2xl sm:pb-2 md:pb-5">
                            <FormattedMessage id="events.1" defaultMessage="We offer a complete range of services to transform your special moments into unforgettable experiences." />
                        </p>
                        <p className="font-txt sm:text-xl md:text-2xl sm:pb-2 md:pb-5">
                            <FormattedMessage id="events.2" defaultMessage="Whether you are planning a family vacation, your wedding, a romantic getaway, an intimate engagement dinner, or a high-level corporate event, we are committed to exceeding your expectations and providing exceptional service. " />
                        </p>
                        <p className="font-txt sm:text-xl md:text-2xl sm:pb-2 md:pb-5">
                            <FormattedMessage id="events.3" defaultMessage="We understand that each event is unique, which is why we customize every detail according to your needs." />
                        </p>
                        <h2 className="font-signature text-yellow-300 sm:text-5xl md:text-6xl flex justify-end">
                            <FormattedMessage id="events.4" defaultMessage="Contact us!" />
                        </h2>
                    </div>

                    {/* img carrousel */}
                    {images.map((image, i) => (
                        <Transition
                            key={i}
                            show={i === index}
                            enter=" ease-in-out duration-40 "
                            enterFrom="opacity-50"
                            enterTo="opacity-100"
                            leave=" ease-in-out duration-80 "
                            leaveFrom="opacity-100"
                            leaveTo="opacity-50"
                        >
                            <img
                                key={i}
                                src={image}
                                alt={`slide-${i}`}
                                className="sm:w-full sm:h-auto md:h-screen md:w-screen object-cover block"
                            />
                        </Transition>
                    ))}
                </div>{/* img carrousel ends */}


            </div>
        </>
    )
};

export default Eventos;