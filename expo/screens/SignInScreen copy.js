import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { loginUser } from '../redux/actions';

class SignInScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email: '',
        password: ''
    };

    render() {
        if (this.props.user) {
            this.props.navigation.navigate('Main');
        }
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                <Text>Sign In</Text>
                <Text>Email</Text>
                <TextInput
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 400 }}
                />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 400 }}
                    value={this.state.password}
                />
                <Button
                    onPress={() => this.props.loginUser(this.state.email, this.state.password)}
                    title="Sign In"
                />
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
    { loginUser }
)(SignInScreen);
