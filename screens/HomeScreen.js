import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image} from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
        <Button
          title="Go to details screen"
          onPress={() => navigation.navigate("Details")}
        /> */}
        <Image
        style={styles.image}
        source={require('../assets/barranquita.png')}
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: "100%",
  }
});