import React from "react";
import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Navigation } from "./src/infrastructure/navigation";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeyL9XPUJlzIR1cEmvRCWH7WccxrJ5ai4",
  authDomain: "meals-to-go-6d526.firebaseapp.com",
  projectId: "meals-to-go-6d526",
  storageBucket: "meals-to-go-6d526.appspot.com",
  messagingSenderId: "1064703074601",
  appId: "1:1064703074601:web:590e8e6986ca6ad4371738",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
