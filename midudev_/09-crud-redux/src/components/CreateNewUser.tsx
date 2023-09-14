import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hooks/useUserActions'
import { useState } from 'react';




export const CreateNewUser = () => {
    const { addUser } = useUserActions();

    //manejo de errores
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        setResult(null)

        const form = e.target as HTMLFormElement
        const fromData = new FormData(form)

        const name = fromData.get('name') as string
        const email = fromData.get('email') as string
        const github = fromData.get('github') as string

        if ( !name || !email || ! github ) {
            return setResult('ko')
        }

        addUser({ name, email, github})
        setResult('ok')
        form.reset(); //! esto es esencial
    }
  return (
    <>
    <Card style={{ marginTop: '16px'}}>
        <Title>Create New User</Title>

        <form onSubmit={handleSubmit}>
            <TextInput 
                name='name'
                placeholder='Name'
            />
            <TextInput 
                name='email'
                placeholder='Email'
            />
            <TextInput 
                name='github'
                placeholder='Github User'
            />
            <Button 
                type='submit'
                style={{ marginTop: '16px'}}
            >
                Create User
            </Button>
            <span>
                { result === 'ok' && <Badge color='green'>Save</Badge> }
                { result === 'ko' && <Badge color='red'>Error</Badge> }
            </span>
        </form>

    </Card>

    </>

  )
}
