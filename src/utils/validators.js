import i18n from "i18n-js"

export const validateEmail = values => {
  const errors = {}
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = i18n.t("_errorMessage.wrongEmailFormat")
  }
  return errors
}

export const validateCredentials = values => {
  let errors = {}

  errors = { ...validateEmail(values) }
  if (!values.password) errors.password = i18n.t("_errorMessage.required")

  return errors
}
