import { createHomeStyles } from '@/assets/settingsStyles';
import Header from '@/components/Header';
import useTheme from '@/hooks/useTheme';
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from "../../convex/_generated/api";

export default function HomeScreen() {
  const todos = useQuery(api.todos.getTodos)
  console.log("Fetched todos", todos)
  const addTodo = useMutation(api.todos.addTodo)
  const { toggleDarkMode, colors } = useTheme()
  const styles = createHomeStyles(colors)
  
  return (
    <LinearGradient colors={colors.gradients.background} style={styles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={styles.safeArea}>
        <Header/>
      </SafeAreaView>
      </LinearGradient>
      );
}

