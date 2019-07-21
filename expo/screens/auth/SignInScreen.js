import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text } from 'galio-framework';
import { connect } from 'react-redux';

import { loginUser, createUser } from '../../redux/actions';

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
                    color="error"
                    radius={100}
                    style={{
                        margin: 20
                    }}
                    onPress={() => this.props.loginUser(this.state.email, this.state.password)}
                >
                    Log In
                </Button>
                <Button
                    color="success"
                    radius={100}
                    style={{
                        margin: 20
                    }}
                    onPress={() =>
                        this.props.createUser(this.state.email, this.state.password, false)
                    }
                >
                    Student Sign Up
                </Button>
                <Button
                    color="warning"
                    radius={100}
                    style={{
                        margin: 20
                    }}
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
