import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { loginUser, createUser } from '../redux/actions';

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
            nextProps.navigation.navigate('Main');
        }
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <Text> Sign In </Text>
                <Text> Email </Text>
                <TextInput
                    onChangeText={email =>
                        this.setState({
                            email
                        })
                    }
                    value={this.state.email}
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 300
                    }}
                />
                <Text> Password </Text>
                <TextInput
                    secureTextEntry
                    onChangeText={password =>
                        this.setState({
                            password
                        })
                    }
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 400
                    }}
                    value={this.state.password}
                />
                <Button
                    onPress={() => this.props.loginUser(this.state.email, this.state.password)}
                    title="Log In"
                />
                <Button
                    onPress={() => this.props.createUser(this.state.email, this.state.password)}
                    title="Sign Up"
                />
                {this.props.loading ? (
                    <Text
                        style={{
                            color: 'green'
                        }}
                    >
                        Loading...
                    </Text>
                ) : null}
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    {this.props.error}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { error, loading, user } = state.auth;
    return {
        error,
        loading,
        user
    };
};

export default connect(
    mapStateToProps,
    {
        loginUser,
        createUser
    }
)(SignInScreen);
