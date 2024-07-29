# Little Lemon Bistro - React Native App

This project is a mobile application developed using React Native as part of the Meta Coursera course on React Native. The app showcases a bistro named Little Lemon, allowing users to navigate through different screens, including a welcome screen, menu items, feedback form, and login page.

## Table of Contents

- [Usage](#usage)
- [Components](#components)
- [Navigation](#navigation)
- [Styling](#styling)

## Usage

This application consists of multiple screens that can be navigated using a drawer navigator. The main screens include a welcome screen, a menu screen, a login page, and a feedback form.


## Components

### App.js

This is the main entry point of the application. It sets up the navigation container and the drawer navigator.

### components/littleLemonHeader.js

A simple header component displaying the app's title.

### components/littleLemonFooter.js

A footer component displaying a copyright notice.

### components/welcomeScreen.js

The welcome screen displays the app's logo and a description, with a button to navigate to the menu.

### components/menuItems.js

The menu screen displays a list of menu items categorized into sections. Users can toggle the display of the menu.

### components/feedbackForm.js

A feedback form where users can submit their feedback about their visit to Little Lemon Bistro.

### components/loginPage.js

A login page where users can enter their email and password to log in.

## Navigation

The app uses React Navigation for navigation purposes. It incorporates a drawer navigator to switch between different screens.

### Drawer Navigator

The drawer navigator is defined in `App.js` with the following routes:
- Welcome Screen
- Menu Items
- Login Page
- Feedback Form

## Styling

The styles for each component are defined using `StyleSheet` from React Native. Each component has its own styles to ensure modularity and maintainability. The application has different styles for dark mode and light mode.

