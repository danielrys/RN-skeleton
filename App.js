// @flow
import "rxjs"
import React from "react"
// eslint-disable-next-line
import { Provider } from "react-redux"
// $FlowFixMe
import { PersistGate } from "redux-persist/integration/react"

// initialization
import configureLocalization from "./src/services/configureLocalization"
import initStore from "./src/services/configureRedux"
import AppWithNavigationState from "./src/services/configureNavigation"

configureLocalization()

const { store, persistor } = initStore()

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}
