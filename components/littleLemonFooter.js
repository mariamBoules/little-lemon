import { StyleSheet, Text, View } from 'react-native';

const footerStyles = StyleSheet.create({
  container: {marginBottom: 20,  backgroundColor: '#F4CE14'},
  footerText: {fontSize: 18, color: 'black', textAlign: 'center', fontStyle: 'italic'},
})

export default function LittleLemonFooter() {
  return (
    <View style = {footerStyles.container}>
        <Text style = {footerStyles.footerText}>
            All Rights Reserved Little Lemon, 2024
        </Text>
    </View>
  );
}