import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput } from 'react-native';
// import { theme, withGalio, GalioProvider, Button } from 'galio-framework'
=======
import { View, TextInput } from 'react-native';
import { Button, Text } from 'galio-framework';
>>>>>>> 7acf72818bcc6b2368e5daa7e525a0e2e79dab81
import { connect } from 'react-redux';
import { loginUser, createUser } from '../../redux/actions';

import * as React from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to losing your privacy</Text>
    <Button>BUTTON</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
    <HomeScreen/>
  </ApplicationProvider>
);

class SignInScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email: '',
        password: ''
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            nextProps.navigation.navigate(nextProps.user.admin ? 'Admin' : 'Student');
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                <Text>Sign In</Text>
                <Text>Email</Text>
                <TextInput
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                    value={this.state.password}
                />
                <Button
<<<<<<< HEAD
                style={{
                    padding: 25,
                    margin: 20 }}
=======
                    color="error"
                    radius={100}
                    style={{
                        margin: 20
                    }}
>>>>>>> 7acf72818bcc6b2368e5daa7e525a0e2e79dab81
                    onPress={() => this.props.loginUser(this.state.email, this.state.password)}
                >
                    Log In
                </Button>
                <Button
<<<<<<< HEAD
                style={{
                    padding: 25,
                    margin: 20 }}
=======
                    color="success"
                    radius={100}
                    style={{
                        margin: 20
                    }}
>>>>>>> 7acf72818bcc6b2368e5daa7e525a0e2e79dab81
                    onPress={() =>
                        this.props.createUser(this.state.email, this.state.password, false)
                    }
                >
                    Student Sign Up
                </Button>
                <Button
<<<<<<< HEAD
                style={{
                    padding: 25,
                    margin: 20 }}
=======
                    color="warning"
                    radius={100}
                    style={{
                        margin: 20
                    }}
>>>>>>> 7acf72818bcc6b2368e5daa7e525a0e2e79dab81
                    onPress={() =>
                        this.props.createUser(this.state.email, this.state.password, true)
                    }
                >
                    Admin Sign Up
                </Button>
                {this.props.loading ? <Text style={{ color: 'green' }}>Loading...</Text> : null}
                <Text style={{ color: 'red' }}>{this.props.error}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { error, loading, user } = state.auth;
    return { error, loading, user };
};

export default connect(
    mapStateToProps,
    { loginUser, createUser }
)(SignInScreen);
