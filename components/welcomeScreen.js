import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  Pressable,
} from "react-native";

const welcomeStyles = StyleSheet.create({
  container: { flex: 1, },
  headerContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
  },
  headerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 40,
  },

  descriptionText: {
    fontSize: 38,
    textAlign: "center",
    marginVertical: 20,
    padding: 20,
    color: "#F4CE14",
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
    margin: 30,
  },
});


export default function WelcomeScreen({navigation}) {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      indicatorStyle={"black"}
      style={[
        welcomeStyles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={welcomeStyles.headerContainer}>
        <Image
          style={welcomeStyles.logo}
          source={require("../img/littleLogo.png")}
          resizeMode="cover"
          accessibility={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={[welcomeStyles.headerText, colorScheme === 'light' ? {color: 'black'} : {color: '#fff'}]}>Little Lemon</Text>
      </View>

      <Pressable onPress={()=>navigation.navigate('Menu')}>
        <Text style={welcomeStyles.descriptionText}>
          Go to Menu
        </Text>
      </Pressable>
      <Image
        style={welcomeStyles.image}
        source={require("../img/picture1.png")}
        resizeMode="cover"
        accessibility={true}
        accessibilityLabel="Picture 1"
      />

      <Image
        style={welcomeStyles.image}
        source={require("../img/picture2.png")}
        resizeMode="cover"
        accessibility={true}
        accessibilityLabel="Picture 2"
      />
      <Image
        style={welcomeStyles.image}
        source={require("../img/picture3.png")}
        resizeMode="cover"
        accessibility={true}
        accessibilityLabel="Picture 3"
      />
      <Image
        style={welcomeStyles.image}
        source={require("../img/picture4.png")}
        resizeMode="cover"
        accessibility={true}
        accessibilityLabel="Picture 4"
      />
    </ScrollView>
  );
}
