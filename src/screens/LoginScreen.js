// @flow
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { connect } from "react-redux"
import i18n from "i18n-js"

// components
import { Button } from "../components"
import { Colors } from "../themes"

// redux
import { onLoginRequest } from "../redux/AuthRedux"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

type LoginScreenProps = {
  onLoginRequest: typeof onLoginRequest,
}

class LoginScreen extends React.PureComponent<LoginScreenProps> {
  static navigationOptions = () => ({
    header: null,
  })

  handleLogin = () => {
    const { onLoginRequest } = this.props
    onLoginRequest({ email: "@TODO", password: "@TODO" })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={this.handleLogin}>
          {i18n.t("authScreen.loginButton")}
        </Button>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
})

const mapDispatchToProps = {
  onLoginRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)
