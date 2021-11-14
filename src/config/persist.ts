import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { secretKey } from "config/env";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
  transforms: [
    encryptTransform({
      secretKey,
      onError: (error: Error) => {
        // Handle the error.
      },
    }),
  ],
};

export default persistConfig;
