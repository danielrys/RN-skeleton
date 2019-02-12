// @flow
import axiosLib from "axios"
import config from "../config/appConfig"

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

export const loginRequest = credentials => axios.post("@TODO", credentials)
