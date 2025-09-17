import useTheme from '@/hooks/useTheme';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tab() {
  const {toggleDarkMode} = useTheme()
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
