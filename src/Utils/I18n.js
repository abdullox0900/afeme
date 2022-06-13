import i18n from 'i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import FlagIconFactory from 'react-flag-icon-css'

i18n

    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: "uz",
        supportedLngs: ["en", "uz", "ru"],
        debug: false,
        detection: {
            order: ["cookie", "htmlTag", "localStorage"],
            caches: ["cookie"]
        },
        backend: {
            loadPath: "/Assets/Locales/{{lng}}/translation.json",
        },
        // react: { useSuspense:  }
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;