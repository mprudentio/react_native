import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text } from 'react-native';
import { useName } from '../NameContext';
export default function MapScreen({navigation}) {

  const {tempName,setTempName} = useName()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.textAndi}>Hi, {!tempName?"John Doe":tempName}</Text>
      ),
    });
  }, [tempName]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },    
  textAndi:{
    fontSize:15,
    marginRight: 20,
    fontWeight:"400",
    color:"#FFF"
},
});
