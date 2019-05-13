// @flow
import * as React from "react"
import { View } from "react-native"

// external libs
// $FlowFixMe
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

// components
import Container from "./Container"
import type { ViewType } from "../types"

// utils
import renderStyle from "../utils/renderStyle"

type ScrollableContainerProps = {
  children: React.Node,
  style?: ViewType,
  contentStyle?: ViewType,
  centerContent?: boolean,
  loading: boolean,
}

const styles = {
  wrapperStyle: ({ centerContent }) => {
    const flex = centerContent ? { flex: 1 } : {}
    return {
      ...flex,
    }
  },
  contentStyle: ({ centerContent }) => {
    const center = centerContent
      ? { flexGrow: 1, justifyContent: "center" }
      : {}
    return {
      ...center,
    }
  },
}

export default class Detail extends React.Component<ScrollableContainerProps> {
  static defaultProps = {
    style: {},
    contentStyle: {},
    centerContent: false,
  }

  render() {
    const { children, style, loading, centerContent, contentStyle } = this.props

    return (
      <View
        style={[renderStyle(styles.wrapperStyle, { centerContent }), style]}
      >
        {loading ? (
          <Container loading />
        ) : (
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              [renderStyle(styles.contentStyle, { centerContent })],
              contentStyle,
            ]}
          >
            {children}
          </KeyboardAwareScrollView>
        )}
      </View>
    )
  }
}
