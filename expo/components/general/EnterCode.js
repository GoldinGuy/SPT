import React, { Component } from 'react-redux';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions';

class EnterCode extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text>Enter Camp Code:</Text>
                <Text />
                <Text>Camp Code</Text>
                <TextInput
                    onChangeText={code => this.setState({ code })}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                    value={this.state.code}
                />
                <Button
                    color="info"
                    radius={100}
                    onPress={() =>
                        this.props.addUser(this.state.code, this.props.user, this.props.admin)
                    }
                >
                    Submit
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
    { addUser }
)(EnterCode);
