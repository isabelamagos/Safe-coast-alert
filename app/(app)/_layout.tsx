import { Stack } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ options }) => <CustomHeader title={options.title || 'SafeCoast'} />,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="crear-hilo" options={{ title: 'Crear Hilo' }} />
    </Stack>
  );
}
