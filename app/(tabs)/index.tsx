import useTheme from '@/hooks/useTheme';
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, View } from 'react-native';
import { api } from "../../convex/_generated/api";

const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent : 'center'
  },
  content: {
    fontSize: 24,
    fontWeight: 'bold',
    color : colors.text
  }
})

export default function HomeScreen() {
  const todos = useQuery(api.todos.getTodos)
  console.log("Fetched todos", todos)
  const addTodo = useMutation(api.todos.addTodo)
  const { toggleDarkMode, colors } = useTheme()
  const styles = createStyles(colors)
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Home</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'red',
//     flexDirection: 'row', // <-- Add this line
//     gap: 10, // <-- Optional: Adds space between children
//   },
//   content: {
//     fontSize: 52,
//   },
// });
