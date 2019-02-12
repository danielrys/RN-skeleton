// @flow
import React from "react"
import { BackHandler } from "react-native"

import { createStackNavigator, NavigationActions } from "react-navigation"
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from "react-navigation-redux-helpers"
import type { NavigationScreenProps } from "react-navigation"
import { connect } from "react-redux"

// screens
import LoginScreen from "../screens/LoginScreen"

const AppRouteConfigs = {
  Login: {
    screen: LoginScreen,
  },
}

const AppNavigator = createStackNavigator(AppRouteConfigs, {
  initialRouteName: "Login",
})

export const navReducer = createNavigationReducer(AppNavigator)
export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)
const App = reduxifyNavigator(AppNavigator, "root")

const mapStateToProps = state => ({
  state: state.nav,
})

class AppWithBackButtonAndState extends React.Component<NavigationScreenProps> {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, state } = this.props
    if (state.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return <App {...this.props} />
  }
}

export default connect(mapStateToProps)(AppWithBackButtonAndState)
