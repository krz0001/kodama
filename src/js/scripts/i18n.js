import i18next from "i18next";
import locI18next from "loc-i18next";
import englishFile from "i18n:en";
import japanFile from "i18n:jp";


const lang = localStorage.getItem('lang') || "en";

i18next
    .init({
        lng: lang,
        fallbackLng: "en",
        resources: {
            en: {
                translation: englishFile
            },
            jp: {
                translation: japanFile
            }
        }
    })
    .then(function () {
        updateContent();
        document.getElementById("language-switcher").value = lang;
    });

window.updateContent = function () {
    const localize = locI18next.init(i18next, {
        useOptionsAttr: true
    });
    localize("html");
}

window.changeLng = function (event) {
    const selectedLang = event.target.value ? event.target.value : "en";
    localStorage.setItem("lang", selectedLang);
    document.getElementById("language-switcher").value = selectedLang;
    i18next.changeLanguage(selectedLang).then((t) => {
        updateContent();
    });
}

const languageSwitcherElt = document.querySelector('#language-switcher');

languageSwitcherElt.addEventListener('change', (event) => {
    changeLng(event)
});