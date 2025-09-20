import { createHomeStyles } from '@/assets/styles/homeStyles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'

const Header = () => {

  const { colors } = useTheme()
  const styles = createHomeStyles(colors)

  const todos = useQuery(api.todos.getTodos)

  const completedCount = todos?.filter((todo) => todo.isCompleted).length || 0
  const totalCount = todos?.length || 0
  const percentage = totalCount > 0 ? (completedCount/totalCount) * 100 : 0
  
 // if (isLoading) {
 //   return <ActivityIndicator size={'large'} color={colors.primary}></ActivityIndicator>
 // }

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient colors={[colors.primary, colors.primary]}
          style={styles.container} />
      </View>
    </View>
  )
}

export default Header