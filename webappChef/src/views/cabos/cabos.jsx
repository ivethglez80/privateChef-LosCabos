import { FormattedMessage } from "react-intl";
import imgTop from "./../../img/losCabos.png";
import imgBottom from "./../../img/losCabos2.png";

const LosCabos = () =>{
    return (
        <>
        <div className="h-screen grid gid-cols-3 content-between">
            <div>
                <img src={imgTop} alt="los cabos san lucas" className="" />
            </div>

            <div className="px-10">
                <h1 className="font-title text-3xl tracking-widest flex justify-center text-yellow-200 pb-4">
                    <FormattedMessage id="cabos.title" defaultMessage="LOS CABOS" />
                </h1>
                <p className="font-text text-slate-200 flex justify-center">
                    <FormattedMessage id="cabos.1" defaultMessage="Welcome to Los Cabos, a vibrant stage of dazzling contrasts:" />
                </p>
                <p className="font-text text-slate-200 flex justify-center">
                    <FormattedMessage id="cabos.11" defaultMessage="turquoise waters embracing golden beaches and arid mountains rising majestically towards the sky." />
                </p>
                <p className="font-text text-slate-200 flex justify-center">
                    <FormattedMessage id="cabos.2" defaultMessage="Home to the iconic arch, where the Sea of Cortez and the Pacific Ocean converge." />
                </p>
                <p className="font-text text-slate-200 flex justify-center">
                    <FormattedMessage id="cabos.3" defaultMessage="With over a decade of experience in this paradise, we've made this corner our gastronomic home." />
                </p>
                <p className="font-text text-slate-200 flex justify-center">
                    <FormattedMessage id="cabos.4" defaultMessage="Discover that our service is a celebration of life, art, and local culture." />
                </p>
                <h2 className="font-signature text-5xl text-yellow-200 flex justify-center pt-4">
                    <FormattedMessage id="cabos.end" defaultMessage="We are awaiting your reservation" />
                </h2>
            </div>

            <div>
                <img src={imgBottom} alt="los cabos san lucas vacation" className="" />
            </div>
        </div>
        </>
    )
}

export default LosCabos;