// es .d porque solo va a tener definiciones y no código propio de ts
import { type SUPORTED_LANGUAGES, type AUTO_LANGUAGE } from './constants';


export type Language = keyof typeof SUPORTED_LANGUAGES; // lo quee estamos diciendo con esto es que el lenguage debe ser del tipo que le hemos puesto en las constantes
export type AutoLanguage = typeof AUTO_LANGUAGE; 
export type FromLanguage = Language | AutoLanguage;

export interface State {
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action = 
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_TO_LANGUAGE', payload: Language  }
    | { type: 'SET_FROM_TEXT', payload: string  }
    | { type: 'SET_RESULT', payload: string  }


export enum SectionType {
    From = 'from',
    To = 'to'
}
