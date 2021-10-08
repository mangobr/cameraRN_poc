import React from 'react'
import { View,Text,TouchableOpacity,Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function LibraryPage({navigation}){

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
      }
      

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                Library
             </Text>
             <TouchableOpacity onPress={openImagePickerAsync} style={{backgroundColor:'gray'}}>
                <Text style={{color:'black'}}>Escolha uma foto</Text>
            </TouchableOpacity>
            <Button title="Camera Foto" onPress={()=>navigation.navigate('Camera')}  style={{margin:10}}/>
        </View>
    )
}