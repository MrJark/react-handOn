import { EVENTS } from "../constants/constants";

// gracias a esye navigate consegues hacer el single page aplication
export function navigate (href) {

    window.history.pushState({}, '', href); // con esto haces que se refleje en la url el cambio pero que no se refresque la pag
    // crear un evento personalizado para avisar del cambio de url
    const navigationEvent = new Event(EVENTS.PUSHSTATE); // creación del evento
    window.dispatchEvent(navigationEvent); // dispatch del evento
}