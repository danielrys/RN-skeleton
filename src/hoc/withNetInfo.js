// @flow
import React, { Component } from "react"
import { NetInfo } from "react-native"

export type NetInfoProps = {
  isConnected: boolean,
  connectionInfo: {
    type: string,
  },
}

const withNetInfo = WrappedComponent => {
  return class extends Component {
    state = {
      connectionInfo: {},
      isConnected: false,
    }

    constructor(props) {
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

    handleChange = isConnected => {
      this.setState({ isConnected })
    }

    handleInfoChange = connectionInfo => {
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
}

export default withNetInfo
