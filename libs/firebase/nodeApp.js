import * as admin from "firebase-admin";

if (process.env.NODE_ENV === "development") {
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
  process.env.FIREBASE_STORAGE_EMULATOR_HOST = "localhost:9199";
}

if (!admin.apps.length) {
  admin.initializeApp();
}

export default admin;
