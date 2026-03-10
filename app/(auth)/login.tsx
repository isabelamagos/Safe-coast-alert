import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Pantalla de Inicio de Sesión</Text>
      <Text className="mt-2 text-muted-foreground">
        Contenido del formulario de inicio de sesión
      </Text>
    </View>
  );
}
