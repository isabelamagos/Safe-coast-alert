import { Stack } from 'expo-router';
import '../global.css'; // Importación para nativewind
import { cssInterop } from 'nativewind';
import { Feather } from '@expo/vector-icons';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Permite que los estilos de nativewind se apliquen correctamente a los íconos de Feather
cssInterop(Feather, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      color: true,
    },
  },
});

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </KeyboardProvider>
  );
}
