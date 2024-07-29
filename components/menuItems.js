import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  SectionList,
  Pressable,
  useColorScheme,
} from "react-native";

const menuStyles = StyleSheet.create({
  container: { flex: 0.9, },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: { fontSize: 30, textAlign: "center",  },
  menuText: { fontSize: 25 },
  separatorStyle: {
    borderBottomWidth: 2,
    borderColor: "#EDEFEE",
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
  },
  sectionHeaderStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoStyle:{
    fontSize: 32,
    textAlign: 'center',
    color: 'grey',
    padding: 30,
  },
});
const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Separator = () => <View style={menuStyles.separatorStyle}></View>;
const Footer = () => (
  <View>
    <Text style={menuStyles.footerText}>
      All Rights Reserved Little Lemon, 2024
    </Text>
  </View>
);
const Header = () => <Text style={menuStyles.headerText}>Menu Items</Text>;
const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.menuText}>{name}</Text>
    <Text style={menuStyles.menuText}>{price}</Text>
  </View>
);

export default function MenuItems() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={[menuStyles.sectionHeaderStyle, colorScheme ==="light" ? {backgroundColor:"#fff", color:"#333333"}: {backgroundColor: "#333333",color:"#fff" } ]}> {title}</Text>
  );
  const [showMenu, setShowMenu] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <View style={[menuStyles.container,colorScheme === "light" ? {backgroundColor: "#fff", color: "#333333"} : {backgroundColor: "#333333", color: "#EDEFEE"} ]}>

      {!showMenu && (
        <Text style={menuStyles.infoStyle}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={menuStyles.buttonText}>
          {showMenu ? "Back" : "Show Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          style={[colorScheme ==="dark" ? {backgroundColor:"#fff", color:"#333333"}: {backgroundColor: "#EDEFEE",color:"#fff"} ]}
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        ></SectionList>
      )}
    </View>
  );
}
