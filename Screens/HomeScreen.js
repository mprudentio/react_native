import * as React from 'react';
import { Text, View,ScrollView,StyleSheet,Image } from 'react-native';
import { useName } from '../NameContext';
const heroImage = require('../assets/bpbd.png')
export default HomeScreen = ({navigation}) => {

    const {tempName, setTempName}=useName()
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Text style={styles.textAndi}>Selamat datang, {!tempName?"John Doe":tempName}</Text>
          ),
        });
      }, [tempName]);

    return(
            <View style={styles.container}>
                <Image source={heroImage} style={{width:219, height:219, marginLeft:50,marginTop:120}}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    textAndi:{
        fontSize:15,
        marginRight: 20,
        fontWeight:"400",
        color:"#FFF"
    },
    line:{
        borderBottomColor:"black",
        width:"100%",
        borderBottomWidth:1,
        marginTop: 2
    }
})