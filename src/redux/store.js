import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./news/slice.js";
import friendsReducer from "./friends/slice.js";
import noticesReducer from "./notices/slice.js";
import authReducer from "./auth/slice.js";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const noticesPersistConfig = {
  key: "notices",
  storage,
  whitelist: ["idFavorites"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
    friends: friendsReducer,
    notices: persistReducer(noticesPersistConfig, noticesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     news: newsReducer,
//     friends: friendsReducer,
//     notices: noticesReducer,
//     auth: authReducer,
//   },
// });
