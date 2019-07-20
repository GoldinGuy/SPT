import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AdminTabNavigator from './AdminTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import StudentScreen from '../screens/StudentScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        Admin: AdminTabNavigator,
        Student: StudentScreen
    },
    {
        initialRouteName: 'Auth'
    }
);
