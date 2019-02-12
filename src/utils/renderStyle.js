// @flow
import { type } from "ramda"

// @TODO better types
type StyleType = any

const renderStyle = (style: StyleType, props?: Object) => {
  if (type(style) === "Array") {
    return style.reduce((styleSheet, currentStyle) => {
      if (typeof currentStyle === "function") {
        return { ...styleSheet, ...currentStyle(props) }
      }
      return { ...styleSheet, ...currentStyle }
    }, {})
  } if (typeof style === "function") {
    return style(props)
  }
  return style
}

export default renderStyle
