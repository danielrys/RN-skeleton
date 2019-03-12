// @flow
import axiosLib from "axios"
import config from "../config/appConfig"

// types
import type { Credentials } from "../types"

export const axios = axiosLib.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const loginRequest = (credentials: Credentials) =>
  axios.post("/oauth/v2/token", {
    ...config.oauthConfig,
    ...credentials,
  })
