// @flow
import * as React from "react"
import { NetInfo } from "react-native"
import hoistNonReactStatics from "hoist-non-react-statics"

export type NetInfoProps = {
  isConnected: boolean,
  connectionInfo: {
    type: string,
  },
}

const withNetInfo = (WrappedComponent: React.AbstractComponent<*, *>) => {
  const AlteredComponent = class extends React.Component<*, *> {
    state = {
      connectionInfo: {},
      isConnected: false,
    }

    constructor(props: any) {
      super(props)
      NetInfo.getConnectionInfo().then(this.handleChange)
      NetInfo.isConnected.fetch().then(this.handleInfoChange)
    }

    componentDidMount() {
      NetInfo.addEventListener("connectionChange", this.handleInfoChange)
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleChange,
      )
    }

    componentWillUnmount() {
      NetInfo.removeEventListener("connectionChange", this.handleInfoChange)
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleChange,
      )
    }

    handleChange = (isConnected: boolean) => {
      this.setState({ isConnected })
    }

    handleInfoChange = (connectionInfo: any) => {
      this.setState({ connectionInfo })
    }

    render() {
      const { connectionInfo, isConnected } = this.state
      return (
        <WrappedComponent
          connectionInfo={connectionInfo}
          isConnected={isConnected}
          {...this.props}
        />
      )
    }
  }

  hoistNonReactStatics(AlteredComponent, WrappedComponent)
  return AlteredComponent
}

export default withNetInfo
