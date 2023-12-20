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
                    <li><FormattedMessage id="svcs.1" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.2" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.3" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.4" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.5" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.6" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.7" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.8" defaultMessage="" /></li>
                    <li><FormattedMessage id="svcs.9" defaultMessage="" /></li>
                </ul>
                    <p className="font-signature text-yellow-400 text-5xl pt-12 sm:pb-12 flex justify-center"><FormattedMessage id="svcs.10" defaultMessage="Contact us!" /></p>
                
            </div>{/* texts ends*/}

            <div className="sm:ml-5 ">{/* pics */}

                <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-1                                
                                sm:flex sm:flex-wrap">
                    <img src="https://i.ibb.co/ypg7fCp/dj.png" alt=""                        className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/6RdTMC7/event-Venue-At-Los-Cabos.png" alt=""  className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/4KxD8Dm/florist.png" alt=""                   className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/BC1bwQb/mariachi.png" alt=""                  className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/s3jhTYH/catering1.jpg" alt=""                 className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/Mp66qYw/photographer.png" alt=""              className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/NmC7Q3H/transportation.png" alt=""            className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/d5xY03t/work-meeting-at-los-cabos.png" alt="" className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                    <img src="https://i.ibb.co/VgTTjQH/spa-at-los-cabos-massage.png" alt=""  className="md:my-auto md:object-cover md:h-full sm:max-w-[200px] sm-max-h-[150px]"/>
                </div>

            </div>{/* pics ends*/}

        </div>{/* main container ends */}
        </>
    )
};

export default Servicios;