import useTheme from '@/hooks/useTheme';
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { api } from "../../convex/_generated/api";

export default function HomeScreen() {
  const todos = useQuery(api.todos.getTodos)
  console.log("Fetched todos",todos)
  const { toggleDarkMode } = useTheme()
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
