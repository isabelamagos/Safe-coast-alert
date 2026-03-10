import { View, Text } from 'react-native';

export default function RegistroScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Pantalla de Registro</Text>
      <Text className="mt-2 text-muted-foreground">Contenido del formulario de registro</Text>
    </View>
  );
}
