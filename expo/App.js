import React from 'react';
<<<<<<< HEAD
import * as React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
    <Layout style={{flex: 1}}/>
  </ApplicationProvider>
);

// import { theme, withGalio, GalioProvider } from 'galio-framework'
=======
import { theme, withGalio, GalioProvider } from 'galio-framework';
>>>>>>> 7acf72818bcc6b2368e5daa7e525a0e2e79dab81
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
            apiKey: 'AIzaSyASKpkaXZgBs9aNOalgCQUJ2CEhL7YoNuU',
            authDomain: 'spt-firebase.firebaseapp.com',
            databaseURL: 'https://spt-firebase.firebaseio.com',
            projectId: 'spt-firebase',
            storageBucket: '',
            messagingSenderId: '1092864377619',
            appId: '1:1092864377619:web:43fd3ee52593d1de'
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
                        backgroundColor: '#FFDDEE'
                    }}
                >
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}
