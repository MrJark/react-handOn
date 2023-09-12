import { useReducer } from 'react';
import { Action, FromLanguage, Language, type State } from '../types.d';
import { AUTO_LANGUAGE } from '../constants';


// Paso 1: crear un initial state
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
};
  
// Paso 2: crear un reducer
function reducer ( state: State, action: Action ) { // state podemos decirle que es typeof initialState y se solucionaría el tipado pero es mejor hacer un types.d y mandárselo par atenerlo externo 
    const { type } = action;
  
    // en vez de ifs tb se puede usar el switch
    if( type === 'INTERCHANGE_LANGUAGES'){
      // esta parte es para hacer el switch del cambio del idioma, las flechitas que tiene en medio 🔁
      
      if( state.fromLanguage === AUTO_LANGUAGE ) return state;
      // esta lógica del if es esencial tenerla aquí para que se haga solo una vez y sea más fácil de testear
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    }
  
    if( type === 'SET_FROM_LANGUAGE') {
      if( state.fromLanguage === action.payload ) return state; // para evitar que se refresque cuando no es necesario
      const loading = state.fromText !== '';
      
      return {
        ...state,
        fromLanguage: action.payload,
        result: '',
        loading
      }
    }
  
    if ( type === 'SET_TO_LANGUAGE') {
      if( state.toLanguage === action.payload ) return state;
      const loading = state.fromText !== '';
      return {
        ...state,
        toLanguage: action.payload,
        result: '',
        loading
      }
    }
  
    if ( type === 'SET_FROM_TEXT') {
      const loading = action.payload !== ''; // para evitar que se ponga en 'loading...' cunado no haya nada
      return {
        ...state,
        loading,
        fromText: action.payload,
        result: '',

      }
    }
  
    if ( type === 'SET_RESULT') {
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state; // recuerda, siempre tiene que devolver un state
}

export function useStore() {
    // Paso 3: usar el useReducer teniendo en el el state y el dispatch
    // const [ state, dispatch ] = useReducer( reducer, initialState ); // podemos desestructurar del state el paso 1
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch ] = useReducer( reducer, initialState );

    // evitar usar el dispatch en los componentes ya que así no atas a dichps componentes a usar el reducer de react y puedes modificarlo usando otros
    const interchangeLanguage = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES'})
    }
    // es FromLanguage type porque necesita al escribir un tipo de lenguage que soporte y puede detectar el automático que dependiendo lo que escribas detecta
    const setFromLanguage = (payload: FromLanguage) => { 
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }
    // este es Language porque no puede detectar el auto ya que es la respuesta a lo que quieres traducir por tanto, tiene unos lenguages específicos
    const setToLannguage = (payload: Language) => { 
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }
    // y estos son type string porque es lo que devuelve
    const setFromText = (payload: string) => { 
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }
    const setResult = (payload: string) => { 
        dispatch({ type: 'SET_RESULT', payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguage,
        setFromLanguage,
        setToLannguage,
        setFromText,
        setResult,
    }
};