import { FormattedMessage } from "react-intl";

const Servicios = () => {
    return (
        <>
        
        <div className="md:h-screen md:grid md:grid-cols-2
                        border-b-2 border-yellow-400">{/* main container */}

            <div className="pt-12 flex flex-col px-10">{/* texts */}
                <h1 className="font-signature text-yellow-400 text-5xl flex justify-center pb-6">
                    <FormattedMessage id="svcs.title" defaultMessage="Services"/>
                </h1>
                <h2 className="font-title text-slate-200 text-lg pb-8">
                    <FormattedMessage id="svcs.desc" defaultMessage="Whatever the occasion or event, we have the available services to make it perfect and unforgettable." />
                </h2>
                <ul className="text-slate-200 list-disc pl-12 sm:text-xl">
                    <li><FormattedMessage id="svcs.1" defaultMessage="Events venue" /></li>
                    <li><FormattedMessage id="svcs.2" defaultMessage="Transportation" /></li>
                    <li><FormattedMessage id="svcs.3" defaultMessage="Mariachis" /></li>
                    <li><FormattedMessage id="svcs.4" defaultMessage="Villa rentals" /></li>
                    <li><FormattedMessage id="svcs.5" defaultMessage="Spa" /></li>
                    <li><FormattedMessage id="svcs.6" defaultMessage="Florist" /></li>
                    <li><FormattedMessage id="svcs.7" defaultMessage="Catering" /></li>
                    <li><FormattedMessage id="svcs.8" defaultMessage="DJ" /></li>
                    <li><FormattedMessage id="svcs.9" defaultMessage="Professional photographer" /></li>
                </ul>
                    <p className="font-signature text-yellow-400 text-4xl md:text-5xl pt-12 pb-12 flex justify-center"><FormattedMessage id="svcs.10" defaultMessage="Contact us!" /></p>
                
            </div>{/* texts ends*/}

            <div className="ml-5 ">{/* pics */}

                <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-1                                
                                flex flex-wrap">
                    <img src="https://i.ibb.co/ypg7fCp/dj.png" alt=""                        className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/6RdTMC7/event-Venue-At-Los-Cabos.png" alt=""  className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/4KxD8Dm/florist.png" alt=""                   className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/BC1bwQb/mariachi.png" alt=""                  className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/s3jhTYH/catering1.jpg" alt=""                 className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/Mp66qYw/photographer.png" alt=""              className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/NmC7Q3H/transportation.png" alt=""            className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/d5xY03t/work-meeting-at-los-cabos.png" alt="" className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                    <img src="https://i.ibb.co/VgTTjQH/spa-at-los-cabos-massage.png" alt=""  className="md:my-auto object-cover md:h-full max-w-[170px] max-h-[135px] md:max-w-[330px] md:max-h-[196px]"/>
                </div>

            </div>{/* pics ends*/}

        </div>{/* main container ends */}
        </>
    )
};

export default Servicios;