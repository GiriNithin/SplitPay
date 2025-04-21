import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LandingPage = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.replace("Login"); // Navigate to Login when the button is clicked
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SplitPay 💸</Text>
      <Text style={styles.subtitle}>Easily split bills with friends!</Text>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LandingPage;
