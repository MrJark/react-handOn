import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"



interface Props {
    type: SectionType,
    placeholder: string,
    loading?: boolean, 
    onChange: ( value: string ) => void,
    value: string,
}

const commonStyle = { border: 0, height: '200px'}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean}) => {
    if ( type === SectionType.From ) return 'Enter Text'
    if ( loading === true ) return 'Loading...'
    return 'Translate'
}


export const TextArea = ({ type, loading, value, onChange}: Props) => {
    
    const styles = type === SectionType.From 
    ? commonStyle
    : { ...commonStyle, backgroundColor: '#f5f5f5' } 
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    return (
        <Form.Control 
            as='textarea'
            disabled={ type === SectionType.To}
            placeholder={getPlaceholder({ type, loading })}
            autoFocus={type === SectionType.From}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}
