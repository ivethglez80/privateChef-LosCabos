import React, {useState} from "react";
import msjEn from "../lang/en-US.json";
import msjEs from "../lang/es-MX.json";
import {IntlProvider} from "react-intl";

const langContext = React.createContext();

const LangProvider = ({children}) =>{
    let localeDefault;
    let msjDefault;
    const langStatus = localStorage.getItem('langStored');

    if (langStatus){
        localeDefault = langStatus;
        if(langStatus==='es-MX'){
            msjDefault = msjEs
        }else if(langStatus==='en-US'){
            msjDefault = msjEn
        }else{
            localeDefault = 'en-US'
            msjDefault = msjEn
        }
    }

    const [msj, setMsj] = useState(msjDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLang = (lang) => {
        switch (lang) {
            case 'es-MX': setMsj(msjEs);
                          setLocale('es-MX');
                          localStorage.setItem('langStored', 'es-MX');
                          break;
            case 'en-US': setMsj(msjEn);
                          setLocale('en-US');
                          localStorage.setItem('langStored', 'en-US');
            default:
                setMsj(msjEn);
                setLocale('en-US');
                localStorage.setItem('langStored', 'en-US')
        }
    }

    return (
        <langContext.Provider value={{setLang: setLang}}>
            <IntlProvider locale={locale} messages={msj}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export {langContext, LangProvider};
