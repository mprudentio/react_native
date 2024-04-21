import { Text, View,ScrollView,StyleSheet, TextInput, Button} from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { useName } from '../NameContext';
export default FormScreen = ({navigation}) => {
    const [name,setName]=useState("")
    const {tempName,setTempName}=useName(name)
    const [hobi,setHobi]=useState('')
    const [errors,setErrors]=useState({})

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Text style={style.textAndi}>Hi, {!tempName?"John Doe":tempName}</Text>
          ),
        });
      }, [tempName]);

    const validateForms = () => {
        let errors={}

        if(!name) errors.name="name is required"
        if(!hobi) errors.hobi="hobi is required"

        setErrors(errors)

        return Object.keys(errors).length===0
    }

    const handleSubmit = () => {
        if(validateForms()){
            setTempName(name); 
            setErrors({})
        }
    }
    return (
        <View style={{flex:1}}> 
            <View style={style.container}>
                <View style={style.viewStle}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", width:70}}>
                        <Text style={style.label}>Name</Text>
                        <Text style={style.label}>:</Text>
                    </View>
                    <TextInput value={name} style={style.input} placeholder='input your name' onChangeText={setName}></TextInput>
                </View>
                {errors.name? <Text style={{color:"red"}}>{errors.name}</Text>:null}
                <View style={style.viewStle}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", width:70}}>
                        <Text style={style.label}>Hobi</Text>
                        <Text style={style.label}>:</Text>
                    </View>
                    <TextInput style={style.input} placeholder='input your hobby' value={hobi} onChangeText={setHobi}></TextInput>
                </View>
                {errors.hobi? <Text style={{color:"red"}}>{errors.hobi}</Text>:null}
                <Button title='Save' onPress={handleSubmit} style={{padding:20, width:100, display:"block"}}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    viewStle:{
        display:"flex",
        flexDirection:"row",
        marginTop: 10,
        // borderColor:"red",
        // borderWidth:3,
        width:200,
        justifyContent: "space-between"
    },
    container:{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        backgroundColor: "white",
        padding:10,
        borderRadius:10,
        shadowOffset:{
            width:0,
            height:2
        },
        marginLeft:10,
        marginTop:150,
        marginRight:10,
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:"bold",
        marginTop:10
    },
    input:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5
    },
    textAndi:{
        fontSize:15,
        marginRight: 20,
        fontWeight:"400",
        color:"#FFF"
    },
})