import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  useColorScheme,
  Alert,
} from "react-native";

const loginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 46,
    fontSize: 36,
    textAlign: "center",
  },
  regularText: {
    fontSize: 30,
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#F4CE14",
    backgroundColor: "#F4CE14",
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
  infoStyle: {
    fontSize: 32,
    textAlign: "center",
    padding: 30,
  },
});

export default function LoginPage({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  const colorScheme = useColorScheme();

  const validateInputs = () => {
    if (!email || !password) {
      Alert.alert("All fields are needed");
      return false;
    }
    if (!password.match("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
      Alert.alert("Password not valid");
      return false;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      Alert.alert("e-mail not valid !");
      return false;
    }
    return true;
  };

  return (
    <KeyboardAvoidingView
      style={loginPageStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={[
          loginPageStyles.container,
          colorScheme === "light"
            ? { backgroundColor: "#EDEFEE" }
            : { backgroundColor: "#333333" },
        ]}
        keyboardDismissMode="on-drag"
      >
        {!loggedIn && (
          <>
            <Text
              style={[
                loginPageStyles.regularText,
                colorScheme === "dark"
                  ? { color: "#EDEFEE" }
                  : { color: "#333333" },
              ]}
            >
              Login to continue{" "}
            </Text>
            <TextInput
              style={loginPageStyles.inputs}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              placeholderTextColor={"#333333"}
              keyboardType={"email-address"}
              clearButtonMode={true}
            />
            <TextInput
              style={loginPageStyles.inputs}
              value={password}
              onChangeText={onChangePassword}
              placeholder={"Password"}
              placeholderTextColor={"#333333"}
              keyboardType={"default"}
              secureTextEntry={true}
              clearButtonMode={true}
            />
            <Pressable
              onPress={() => {
                if (validateInputs()) {
                  setLogin("true");
                  navigation.navigate("Welcome");
                }
              }}
              style={loginPageStyles.button}
            >
              <Text style={loginPageStyles.buttonText}>Log in</Text>
            </Pressable>
          </>
        )}
        {loggedIn && (
          <>
            <Text
              style={[
                loginPageStyles.regularText,
                colorScheme === "dark"
                  ? { color: "#EDEFEE" }
                  : { color: "#333333" },
                { padding: 70 },
              ]}
            >
              Hello {email} !
            </Text>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
