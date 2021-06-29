import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
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
    const navigation = useNavigation()

    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')


    return (
        <Background>
            <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enabled >
                <Logo source={require('../../assets/Logo.png')} />

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


                <SubmitButton onPress={() => alert(inputEmail + inputPassword)}>
                    <TextButton>Acessar</TextButton>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SingUp')} >
                    <TextLink>Criar uma conta</TextLink>
                </Link>




            </Container>
        </Background>
    );
}
