import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { Platform } from 'react-native';
import {
    Background,
    Container,
    Logo,
    AreaInp,
    Input,
    SubmitButton,
    TextButton,
    Link,
    TextLink
} from './styles'

export default function SingIn() {

    const [inputEmail, setinputEmail] = useState('')
    const [nome, setNome] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <Background>
            <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enabled >
                <AreaInp>
                    <Input
                        placeholder='Nome'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={inputEmail}
                        onChangeText={(nome) => setNome(nome)}
                    />
                </AreaInp>
                <AreaInp>
                    <Input
                        placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={inputEmail}
                        onChangeText={(email) => setinputEmail(email)}
                    />
                </AreaInp>

                <AreaInp>
                    <Input
                        placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={inputPassword}
                        onChangeText={value => setinputPassword(value)}

                    />
                </AreaInp>

                <AreaInp>
                    <Input
                        placeholder='Confirme Password'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={confirmPassword}
                        onChangeText={password => setConfirmPassword(password)}

                    />
                </AreaInp>

                <SubmitButton onPress={() => alert(inputEmail + inputPassword)}>
                    <TextButton>Registrar</TextButton>
                </SubmitButton>

            </Container>
        </Background>
    );
}
