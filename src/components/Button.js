// @flow
import * as React from "react"
import { TouchableOpacity } from "react-native"

// components
import Text from "./Text"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Colors, Metrics } from "../themes"

// types
import type { ViewType, TextType } from "../types"

const themes = {
  primary: {
    backgroundColor: Colors.primary,
    color: Colors.background,
  },
  secondary: {
    backgroundColor: Colors.secondary,
    color: Colors.background,
  },
  disabled: {
    backgroundColor: Colors.disabled,
    color: Colors.textDisabled,
  },
}

const styles = {
  button: ({ theme }) => ({
    alignItems: "center",
    backgroundColor: themes[theme].backgroundColor,
    borderRadius: Metrics.radii.base,
    height: Metrics.buttons.heights.base,
    justifyContent: "center",
  }),
  text: ({ theme }) => ({
    color: themes[theme].color,
  }),
}

type ButtonProps = {|
  onPress: () => void,
  children: string | React.Node,
  theme?: "primary" | "secondary" | "disabled",
  style?: ViewType,
  textStyle?: TextType,
|}

export default class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    style: {},
    textStyle: {},
    theme: "primary",
  }

  render() {
    const { children, onPress, theme, style, textStyle } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[renderStyle(styles.button, { theme }), style]}
      >
        {typeof children === "string" ? (
          <Text
            size={Metrics.texts.sizes.button}
            style={[renderStyle(styles.text, { theme }), textStyle]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
}
