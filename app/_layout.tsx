import { Stack } from 'expo-router';
import '../global.css'; // Importación para nativewind

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
    </Stack>
  );
}
