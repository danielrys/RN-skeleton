// @flow
import { createStore, applyMiddleware, combineReducers } from "redux"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createLogger } from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import { createBlacklistFilter } from "redux-persist-transform-filter"
import storage from "redux-persist/lib/storage"

// navigation
import { navReducer, navMiddleware } from "./configureNavigation"

// reducers & epics
import { reducer as authReducer, epics as authEpics } from "../redux/AuthRedux"

const epics = [...authEpics]

const blacklistFilter = createBlacklistFilter("auth", ["loading"])

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["nav"],
  transforms: [blacklistFilter],
}

const reducers = {
  auth: authReducer,
  nav: navReducer,
}

export default () => {
  const middleware = []

  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  })

  if (__DEV__) {
    const logger = createLogger({ collapsed: true })
    middleware.push(logger)
  }

  middleware.push(epicMiddleware)
  middleware.push(navMiddleware)

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(reducers),
  )

  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middleware),
  )
  epicMiddleware.run(combineEpics(...epics))

  const persistor = persistStore(store)

  return { store, persistor }
}
