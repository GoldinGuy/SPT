import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'galio-framework';
import { connect } from 'react-redux';

import { getCamps } from '../../redux/actions';
import EnterCode from '../../components/general/EnterCode';

class CampsScreen extends React.Component {
    static navigationOptions = {
        title: 'Links'
    };

    componentDidMount() {
        this.props.getCamps();
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <EnterCode admin />
                {this.props.camps ? this.props.camps.map(camp => {
                    return (
                        <Button>{camp.name}</Button>
                    )
                }) : <Text> Loading Camps </Text>}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { error, loading, camps } = state.admin;
    const { user } = state.auth;
    return { error, loading, user, camps };
};

export default connect(
    mapStateToProps,
    { getCamps }
)(StudentScreen);

export default CampsScreen;
