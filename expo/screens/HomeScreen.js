import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { Location, Permissions } from 'expo';
import MapView, { AnimatedRegion } from 'react-native-maps';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      region: null,
      initialRegion: null,
    }
  }

  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        };
        this.setState({
          initialRegion: region
        });
      },
      error => console.log("ERROR: " + error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  componentDidMount(){
    this.getCurrentLocation();
  }

  render() {
    return (
      <MapView
        provider="google"
        style={{
          position: 'absolute',
          top: 50,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white'
        }}
        region={this.state.mapRegion}
        followUserLocation={true}
        ref={ref => (this.mapView = ref)}
        zoomEnabled={true}
        showsUserLocation={true}
        initialRegion={this.state.initialRegion}>
      </MapView>
    )
  }
}



// export default class HomeScreen extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       region: null,
//     }
//   }
//
//   async getCurrentLocation() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         let region = {
//           latitude: parseFloat(position.coords.latitude),
//           longitude: parseFloat(position.coords.longitude),
//           latitudeDelta: 5,
//           longitudeDelta: 5
//         };
//         return region;
//       },
//       error => console.log("ERROR: " + error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000
//       }
//     );
//   }
//
//   componentDidMount() {
//     var newRegion = this.getCurrentLocation();
//     this.mapView.animateToRegion(newRegion, 1000);
//   }
//
//   render() {
//     return (
//       <MapView
//         provider="google"
//         initialRegion={this.state.region}
//         zoomEnabled={true}
//         minZoomLevel={10}
//         ref={ref => { this.mapView = ref }}>
//       </MapView>
//     );
//   }
// }

// export default class HomeScreen extends React.Component {
//     mapRef;
//
//     static navigationOptions = {
//         header: null
//     };
//
//     state = {
//         location: null,
//         progress: 'Loading Location...'
//     };
//
//     getLocationAsync = async () => {
//         try {
//             let { status } = await Permissions.askAsync(Permissions.LOCATION);
//             if (status !== 'granted') {
//                 this.setState({
//                     progress: 'Permission to access location was denied'
//                 });
//             }
//
//             let location = await Location.getCurrentPositionAsync({ accuracy: 5 });
//             this.mapRef.animateCamera({ center: {
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude
//             }})
//             this.setState({ location: location.coords, progress: 'Success' });
//
//         } catch (e) {
//             console.log(e);
//             this.setState({ progress: e.message });
//         }
//     };
//
//     componentDidMount() {
//         this.getLocationAsync();
//     }
//
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#fff' }}>
//                 <Text
//                   style={{ textAlign: 'center', marginTop: 20 }}>{this.state.progress}</Text>
//                 <MapView
//                   provider="google"
//                   ref={ref => { this.mapRef = ref }}
//                     style={{
//                         position: 'absolute',
//                         top: 50,
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         backgroundColor: 'white'
//                     }}
//                 >
//                     {this.state.location ? (
//                         <Marker
//                             coordinate={{
//                                 latitude: this.state.location.latitude,
//                                 longitude: this.state.location.longitude
//                             }}
//                         />
//                     ) : null}
//                 </MapView>
//             </View>
//         );
//     }
// }
//
// -----------------
//
// import React from 'react';
// import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
// import { Location, Permissions } from 'expo';
// import MapView, { AnimatedRegion } from 'react-native-maps';
//
// export default class HomeScreen extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       region: null,
//       initialRegion: null,
//     }
//   }
//
//   async getCurrentLocation() {
//     navigator.geolocation.getCurrentPosition(
//         position => {
//         let region = {
//                 latitude: parseFloat(position.coords.latitude),
//                 longitude: parseFloat(position.coords.longitude),
//                 latitudeDelta: 5,
//                 longitudeDelta: 5
//             };
//             this.setState({
//                 initialRegion: region
//             });
//         },
//         error => console.log(error),
//         {
//             enableHighAccuracy: true,
//             timeout: 20000,
//             maximumAge: 1000
//         }
//     );
// }
//
//   componentDidMount(){
//     this.getCurrentLocation();
//   }
//
//   goToInitialLocation() {
//     let initialRegion = Object.assign({}, this.state.initialRegion);
//     initialRegion["latitudeDelta"] = 0.005;
//     initialRegion["longitudeDelta"] = 0.005;
//     this.mapView.animateToRegion(initialRegion, 2000);
//   }
//
//   render() {
//     return (
//       <MapView
//         provider="google"
//         style={{
//           position: 'absolute',
//           top: 50,
//           bottom: 0,
//           left: 0,
//           right: 0,
//           backgroundColor: 'white'
//         }}
//         region={this.state.mapRegion}
//         followUserLocation={true}
//         ref={ref => (this.mapView = ref)}
//         zoomEnabled={true}
//         showsUserLocation={true}
//         onMapReady={this.goToInitialRegion.bind(this)}
//         initialRegion={this.state.initialRegion}>
//       </MapView>
//     )
//   }
// }
