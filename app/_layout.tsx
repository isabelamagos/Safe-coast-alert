import { Stack } from 'expo-router';
import '../global.css'; // Importación para nativewind
import { cssInterop } from 'nativewind'; // Perite aplicar clases de nativewind a componentes de terceros
import { Feather } from '@expo/vector-icons';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Image } from 'expo-image';

cssInterop(Feather, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      color: true,
    },
  },
});

cssInterop(Image, {
  className: {
    target: 'style',
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
