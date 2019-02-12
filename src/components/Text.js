// @flow
import * as React from "react"
import { Text as RNText } from "react-native"

// types
import type { TextType } from "../types"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Colors, Metrics } from "../themes"

const styles = {
  text: ({ color, lineHeight, size, centered }) => {
    const textColor = color ? { color } : {}
    const textSize = size ? { fontSize: size } : {}
    const textCenter = centered ? { textAlign: "center" } : {}
    const textLineHeight = lineHeight ? { lineHeight } : {}
    return {
      ...textColor,
      ...textSize,
      ...textCenter,
      ...textLineHeight,
    }
  },
}

type TextProps = {
  children: string | React.Node,
  centered?: boolean,
  color?: string,
  size?: number,
  lineHeight?: number,
  style?: TextType,
}

export default class Text extends React.PureComponent<TextProps> {
  static defaultProps = {
    centered: false,
    color: Colors.base,
    lineHeight: undefined,
    size: Metrics.texts.sizes.base,
    style: {},
  }

  render() {
    const { children, centered, color, size, lineHeight, style } = this.props
    return (
      <RNText
        style={[
          renderStyle(styles.text, {
            color,
            centered,
            lineHeight,
            size,
          }),
          style,
        ]}
      >
        {children}
      </RNText>
    )
  }
}
