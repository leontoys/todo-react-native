import { ThemeProvider } from '@/hooks/useTheme';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from 'expo-router';
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function Layout() {
  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ConvexProvider>
    </ThemeProvider>
  );
}
