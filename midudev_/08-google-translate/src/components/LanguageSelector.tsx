import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from '../constants'
import React, { FC } from 'react';
import { type Language, type FromLanguage, SectionType } from '../types.d'; // hay que poner el .d en la extensión

/** para tipar el onChange se podría hacer de la siguiente manera
 * { onChange }: { onChange: ( language: string) => void }
 * pero sería una manera no muy buena de hacerlo porque no da acceso a las propiedades de ts
 * la forma correcta sería a través de un interface o de la FC( FunctionComponent ) de React y le pasas entre <> las Props
 * Esta última es la más ideal pero con la segunda tb es mñas que suficiente
*/

// interface Props {
//     onChange: ( language: Language ) => void,
// }

type Props = // en vez de interface, también se puede usar en type y lo bueno del type es que puedes usar dos contratos diferentes para las mismas props dependiendo del type
    | { type: SectionType.From, value: FromLanguage, onChange: ( language: FromLanguage ) => void }
    | { type: SectionType.To, value: Language, onChange: ( language: Language ) => void }

// export const LanguageSelector = ( { onChange }:  Props ) => {
export const LanguageSelector: FC<Props> = ( { onChange, type, value } ) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { // en los eventos, en ts, es necesario poner este type. EN este caso es de tipo change pero si es un click, un anchor, etc, tienes que indicárselo y estar pendiente de ellos
        onChange(e.target.value as Language) // con esto le dices que el evento que es un string, tratalo como si fuera un Lenguage
    }

    return (
        <Form.Select aria-label="Select Language" onChange={handleChange} value={value}>
            { type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect language</option>}
            {/* hago el object. entries porque el SUPORTED_LANGUAGES es un objeto no un array */}
            {Object.entries(SUPORTED_LANGUAGES).map( ([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}