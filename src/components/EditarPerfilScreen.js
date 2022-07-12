import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Button, Image, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from "expo-image-picker"
// import { useTheme } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';
// import Constants from 'expo-constants'

const EditarPerfilScreen = () => {

  const [image, setImage] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'grandet') {
        alert('Permission denied!')
      }
    }
  }, [])

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  // const { colors } = useTheme();
  // bs = React.createRef();
  // fall = new Animated.Value(1);


  return (
    <View style={styles.container}>
    <Button title="Choose Image" onPress={PickImage} />
            {image && <Image source={{uri:image}} style={{
              width:200,
              height:200
            }}/>}
    </View>

    
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default EditarPerfilScreen;