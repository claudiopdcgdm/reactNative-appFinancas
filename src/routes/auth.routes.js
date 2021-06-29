import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'


const AuthStack = createStackNavigator()

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='Singin'
                component={SingIn}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name='SingUp'
                component={SingUp}
                options={{ headerShown: true }}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomColor: '#00b94a',
                        borderBottomWidth: 1,
                        elevation: 1,
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

        </AuthStack.Navigator>
    )
}

export default AuthRoutes