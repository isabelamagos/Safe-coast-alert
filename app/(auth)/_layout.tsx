import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen
        name="registro"
        options={{
          title: '', // Solo se necesita la flecha, por lo que no ponemos título
          headerTransparent: true,
          headerTintColor: '#001324',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
