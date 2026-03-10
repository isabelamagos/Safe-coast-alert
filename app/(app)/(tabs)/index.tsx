import { View, Text } from 'react-native';

export default function InicioScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Pantalla de Inicio</Text>
      <Text className="mt-2 text-muted-foreground">El mapa y alertas irán aquí</Text>
    </View>
  );
}
