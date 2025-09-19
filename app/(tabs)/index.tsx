import { createHomeStyles } from '@/assets/settingsStyles';
import useTheme from '@/hooks/useTheme';
import { useMutation, useQuery } from "convex/react";
import { Text, View } from 'react-native';
import { api } from "../../convex/_generated/api";

export default function HomeScreen() {
  const todos = useQuery(api.todos.getTodos)
  console.log("Fetched todos", todos)
  const addTodo = useMutation(api.todos.addTodo)
  const { toggleDarkMode, colors } = useTheme()
  const styles = createHomeStyles(colors)
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

