import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import LittleLemonHeader from "./components/littleLemonHeader";
import LittleLemonFooter from "./components/littleLemonFooter";
import WelcomeScreen from "./components/welcomeScreen";
import MenuItems from "./components/menuItems";
import FeedbackForm from "./components/feedbackForm";
import LoginPage from "./components/loginPage";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#333333" },
  footerContainer: { backgroundColor: "#333333" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
});

function LogoTitle(props) {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("./img/littleLogo.png")} style={styles.logo} />
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Drawer.Screen
          name="Menu"
          component={MenuItems}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginPage}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Drawer.Screen
          name="Feedback"
          component={FeedbackForm}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
