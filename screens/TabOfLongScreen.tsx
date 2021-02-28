import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [noneStyle, setNoneStyle] = useState('None Style here!');
  const [isNoneStyle, setIsNoneStyle] = useState(true);
  const [dynamicStyle, setdynamicStyle] = useState({});
  const [count, setcount] = useState(0);
  const changeText = () => {
    if(isNoneStyle){
      setNoneStyle('Hello from Long!');
    }
    else{
      setNoneStyle('None Style here!'); 
    }
    setIsNoneStyle(!isNoneStyle);
    setdynamicStyle({});
    setcount(count => count + 1);
  }
  const buttonEffect = () => {
    setdynamicStyle({
      backgroundColor: '#CC9083',
      borderWidth: 5,
      borderColor: '#838DD0'
    });
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={[styles.title, styles.textColor]}>Hellu Guys, i am long who love a girl, her name is...</Text>
      <Text style={[styles.title, styles.textColor]}>Yolo : wut's up wut's up</Text>
        <View style = {[styles.commonBgColor]} onTouchEnd = {() => changeText()} onTouchStart = {() => buttonEffect()}>
          <Text style = {[styles.noneStyles, dynamicStyle]}>{noneStyle}</Text>
        </View>
        <View  style = {[styles.commonBgColor]} onTouchEnd = {() => setcount(0)}>
          <Text style = {[styles.noneStyles]}>Your touch: {count}</Text>
        </View>
      <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4C8C5',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textColor: {
    color: '#443B39'
  },
  noneStyles: {
    width: 200,
    height: 200,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 100,
    color: 'red',
    paddingTop: '30%',
    paddingLeft:'18%'
  },
  commonBgColor: {
    backgroundColor: '#D4C8C5',
  }
});

