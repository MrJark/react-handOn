import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

import './App.css'
import { useStore } from './hooks/useStore';
import { ArrowsIcon } from './components/icons';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translate';





function App () {

  const { loading, fromLanguage,fromText, result, toLanguage, setFromLanguage, setToLannguage, interchangeLanguage, setFromText, setResult } = useStore()

  useEffect( () => {
    if ( fromText === '' ) return;
    
    translate({ fromLanguage, toLanguage, text: fromText })
      .then( result => {
        // if( result == null ) return // en ts la igualación con 2 iguales si es más recomendada que en js. HAY QUE LLEVAR MUCHO CUIDADO CON EL DOBLE IGUAL
        if( result === null || result === undefined ) return // en ts los dos iguales hace que la linea de arriba y esta, sean iguales
        setResult(result)
      })
      .catch( () => setResult('Error'))
  }, [fromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h2>Google Translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type = {SectionType.From} 
              value ={fromLanguage}
              onChange={setFromLanguage}/>

            <TextArea
              placeholder='Enter Text'
              type = {SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>    
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
        <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLannguage}/>

            <TextArea
              placeholder='Translate'
              type = {SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
      {/* <div>
        <button 
          onClick={ () => {
            // dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es'})
            setFromLanguage('es') // esta es la forma con la cual no tenemos que tener los contratos de los dispatch 
          }}
        >Switch to Spaish</button>
      </div>
      <div>
        {fromLanguage}
      </div> */}
    </Container>
  )
}

export default App
