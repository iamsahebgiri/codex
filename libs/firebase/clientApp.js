import { initializeApp, getApps } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { config } from "libs/config";

function initializeServices() {
  const isConfigured = getApps().length > 0;
  const firebaseApp = initializeApp(config.firebase);
  const auth = getAuth(firebaseApp);
  return { firebaseApp, auth, isConfigured };
}

function connectToEmulators({ auth }) {
  if (typeof window !== "undefined") {
    if (location.hostname === "localhost") {
      connectAuthEmulator(auth, "http://localhost:9099");
    }
  }
}

export function getFirebase() {
  const services = initializeServices();
  if (!services.isConfigured) {
    connectToEmulators(services);
  }
  return services;
}
