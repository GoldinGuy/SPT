import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { store } from './redux/store';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png')
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
            })
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyAIHv2d1Y4mGCd-k-QqK-H_rBoAp15vAzc',
            authDomain: 'sustainable-app-mitlaunch2019.firebaseapp.com',
            databaseURL: 'https://sustainable-app-mitlaunch2019.firebaseio.com',
            projectId: 'sustainable-app-mitlaunch2019',
            storageBucket: 'sustainable-app-mitlaunch2019.appspot.com',
            messagingSenderId: '1098142246440',
            appId: '1:1098142246440:web:2ae9cfa8ed1ef3ae'
        };
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        }
        return (
            <Provider store={store}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'red'
                    }}
                >
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}
