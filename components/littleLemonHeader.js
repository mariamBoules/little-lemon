import { StyleSheet, Text, View } from 'react-native';

const headerStyles = StyleSheet.create({
  container: {flex:0.1, backgroundColor: '#F4CE14'},
  text: {padding : 40, fontSize: 30, color: 'black'},

})

export default function LittleLemonHeader() {
  return (
    <View style = {headerStyles.container}>
        <Text style = {headerStyles.text} numberOfLines={3}>
            Welcome to Little Lemon
        </Text>
    </View>
  );
}