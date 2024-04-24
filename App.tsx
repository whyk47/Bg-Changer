import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const randomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    return color
  }

  const [bgColor, setBgColor] = React.useState(randomColor());
  const [squareColor, setSquareColor] = React.useState(randomColor());
  const [circleColor, setCircleColor] = React.useState(randomColor());
  const [diamondColor, setDiamondColor] = React.useState(randomColor());
  const [triangleColor, setTriangleColor] = React.useState(randomColor());
  const setters = [setBgColor, setSquareColor, setCircleColor, setDiamondColor, setTriangleColor];

  const changeColor = () => {
    setters.forEach((setter) => setter(randomColor()));
  }
  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View style={styles.row}>
          <View style={[styles.shape, styles.diamond, {backgroundColor: diamondColor}]} /> 
          <View style={[styles.shape, styles.triangle, {borderBottomColor: triangleColor}]} />
        </View>
        <View>
          <TouchableOpacity onPress={changeColor}>
            <View style={[styles.button, ]}>
              <Text style={[styles.buttonText, ]}>Press me!</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={[styles.shape, styles.circle, {backgroundColor: circleColor}]} />
          <View style={[styles.shape, styles.square, {backgroundColor: squareColor}]} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'black',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    width: '80%',
  },
  shape: {
    marginHorizontal: 20,
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  diamond: {
    width: 100 / Math.sqrt(2),
    height: 100 / Math.sqrt(2),
    margin: 10,
    transform: [{rotate: '45deg'}],
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  }
  
})


export default App;
