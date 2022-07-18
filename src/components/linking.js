// import React, { useCallback } from "react";
// import { Alert, Button, Linking, StyleSheet, View } from "react-native";

// const supportedURL = "https://wa.me/";
// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);
//   return <Button title={children} onPress={handlePress} />;
// };
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>https://wa.me/554888520572</OpenURLButton>
//     </View>
//   );
// };