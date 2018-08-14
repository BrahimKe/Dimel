import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	StatusBar,
	ActivityIndicator,
} from 'react-native';

export default class SpalshScreen extends React.Component {
	static navigationOptions = {
    header: null
	}
	
	componentWillMount() {
		setTimeout(() => {
			this.props.navigation.navigate('HomeScreen')
		}, 2000)
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					hidden={true}
				/>
				<Image 
					source={require('../assets/img/logo.png')}
					style={styles.img}
				/>
				<ActivityIndicator/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	img: {
		flex: 1,
    width: '62%',
    resizeMode: 'contain'
	}
});