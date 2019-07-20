import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
                    onPress={() => this.props.loginUser(this.state.email, this.state.password)}
                    title="Log In"
                />
                <Button
                    onPress={() =>
                        this.props.createUser(this.state.email, this.state.password, false)
                    }
                    title="Student Sign Up"
                />
                <Button
                    onPress={() =>
                        this.props.createUser(this.state.email, this.state.password, true)
                    }
                    title="Admin Sign Up"
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
    { loginUser, createUser }
)(SignInScreen);
