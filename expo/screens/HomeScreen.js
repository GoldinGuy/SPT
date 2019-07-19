import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { Location, Permissions } from 'expo';
import MapView, { Marker } from 'react-native-maps';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        location: null,
        progress: 'Loading Location...'
    };

    getLocationAsync = async () => {
        try {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                this.setState({
                    progress: 'Permission to access location was denied'
                });
            }

            let location = await Location.getCurrentPositionAsync({ accuracy: 5 });
            this.setState({ location: location.coords, progress: 'Success' });
        } catch (e) {
            console.log(e);
            this.setState({ progress: e.message });
        }
    };

    componentDidMount() {
        this.getLocationAsync();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ textAlign: 'center', marginTop: 20 }}>{this.state.progress}</Text>
                <MapView
                    style={{
                        position: 'absolute',
                        top: 50,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'white'
                    }}
                >
                    {this.state.location ? (
                        <Marker
                            coordinate={{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude
                            }}
                        />
                    ) : null}
                </MapView>
            </View>
        );
    }
}
