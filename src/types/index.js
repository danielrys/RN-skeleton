// @flow
import type {
  TextStyleProp,
  ViewStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet"

// general styling types
export type TextType = {
  ...TextStyleProp,
}

export type ViewType = {
  ...ViewStyleProp,
}
export type Credentials = {
  username: string,
  password: string,
}
