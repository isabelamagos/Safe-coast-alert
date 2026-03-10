import { View, Text } from 'react-native';

export default function CrearHiloScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Pantalla de Crear un nuevo hilo</Text>
      <Text className="mt-2 text-muted-foreground">Contenido del hilo</Text>
    </View>
  );
}
