import { KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'

export const Background = styled.View`
flex: 1;
background-color: #131313;

`
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom:15px;
`;

export const AreaInp = styled.View`
flex-direction: row;
margin-bottom: 7px;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
background-color: rgba(0,0,0,0.20);
width: 90%;
font-size: 15px;
padding: 10px;
border-radius: 7px;
color:#fff;
`


export const SubmitButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #00b94a;
width: 90%;
height: 45px;
border-radius:7px;
margin-top:10px;
`;

export const TextButton = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 17px;
`;


export const Link = styled.TouchableOpacity`
    color: #fff;
    text-align: center;
    margin-top:10px;
    margin-bottom:7px;
`;

export const TextLink = styled.Text`
    color: #fff;
    text-align: center;
`;






