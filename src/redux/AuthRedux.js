import { from, of } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"

// api
import { loginRequest } from "../services/api"

export const initialState = {
  loading: false,
  error: null,
}

export const onLoginRequest = credentials => ({
  type: "ON_LOGIN_REQUEST",
  credentials,
})
export const onLoginSuccess = loginData => ({
  type: "ON_LOGIN_REQUEST_SUCCESS",
  loginData,
})
export const onLoginFail = error => ({
  type: "ON_LOGIN_REQUEST_FAIL",
  error,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ON_LOGIN_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
      }
    case "ON_LOGIN_REQUEST_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

const loginEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "ON_LOGIN_REQUEST"),
    switchMap(action =>
      from(loginRequest(action.credentials)).pipe(
        flatMap(response => from([onLoginSuccess(response.data)])),
        catchError(e => of(onLoginFail(e))),
      ),
    ),
  )

export const epics = [loginEpic]
