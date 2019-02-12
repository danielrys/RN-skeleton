import i18n from "i18n-js"
import en from "../i18n/en"
import appConfig from "../config/appConfig"

export default () => {
  i18n.fallbacks = true
  i18n.translations = { en }
  i18n.locale = appConfig.defaultLocale
}
