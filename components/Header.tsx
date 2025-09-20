import { createHomeStyles } from '@/assets/styles/homeStyles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {

  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  const todos = useQuery(api.todos.getTodos)

  const completedCount = todos?.filter((todo) => todo.isCompleted).length || 0
  const totalCount = todos?.length || 0
  const progressPercentage = totalCount > 0 ? (completedCount/totalCount) * 100 : 0

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
          <Ionicons name='flash-outline' size={24} color={colors.text} />
        </LinearGradient>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>
            Today's tasks
          </Text>
          <Text style={{ color: colors.textMuted }}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>

      {totalCount > 0 && (
        <View style={homeStyles.progressContainer}>
          <LinearGradient colors={colors.gradients.background}
          style={[homeStyles.progressBar,{width:`${progressPercentage}%`}]}></LinearGradient>
          </View>
      )}
    </View>
  )
}

export default Header