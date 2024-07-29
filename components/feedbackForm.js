import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  Pressable,
  Alert,
} from "react-native";

const feedbackFormStyles = StyleSheet.create({
  Container: {
    flex: 0.9,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  headingSection: {
    padding: 30,
    fontSize: 30,
    textAlign: "center",
  },
  infoSection: {
    fontSize: 15,
    textAlign: "center",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 50,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 24,
  },
});

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangelastName] = React.useState("");
  const [Message, onChangeMessage] = React.useState("");
  const colorScheme = useColorScheme();

  const validateInputs = () => {
    if (!firstName || !lastName || !Message) {
      Alert.alert("All fields are required!");
      return false;
    }

    if (firstName.length > 50 || lastName.length > 50) {
      Alert.alert("First name and Last name should not exceed 50 characters.");
      return false;
    }

    if (Message.length > 250) {
      Alert.alert("Message should not exceed 250 characters.");
      return false;
    }
    Alert.alert("Thank you for your feedback !");
    onChangeFirstName("");
    onChangelastName("");
    onChangeMessage("");
    
    return true;
  };

  return (
    <KeyboardAvoidingView
      style={feedbackFormStyles.Container}
      behavior={Platform === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={[
          feedbackFormStyles.Container,
          colorScheme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#333333" },
        ]}
        keyboardDismissMode="on-drag"
      >
        <>
          <Text
            style={[
              feedbackFormStyles.headingSection,
              colorScheme === "light" ? { color: "black" } : { color: "white" },
            ]}
          >
            How was your visit to Little Lemon?{" "}
          </Text>
          <Text
            style={[
              feedbackFormStyles.infoSection,
              colorScheme === "light" ? { color: "black" } : { color: "white" },
            ]}
          >
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear your experience with us!
          </Text>
          <TextInput
            style={feedbackFormStyles.inputs}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder="First Name"
            placeholderTextColor={"grey"}
            clearButtonMode="always"
          />
          <TextInput
            style={feedbackFormStyles.inputs}
            value={lastName}
            onChangeText={onChangelastName}
            placeholder="Last Name"
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={feedbackFormStyles.messageInput}
            value={Message}
            placeholder="Please Leave a Feedback"
            placeholderTextColor={"grey"}
            onChangeText={onChangeMessage}
            multiline={true}
            maxLength={250}
          />

          <Pressable onPress={validateInputs} style={feedbackFormStyles.button}>
            <Text style={feedbackFormStyles.buttonText}>Submit</Text>
          </Pressable>
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
