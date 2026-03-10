import { View, Text } from 'react-native';

export default function NosotrosScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Sobre Nosotros</Text>
      <Text className="mt-2 text-muted-foreground">Información del proyecto</Text>
    </View>
  );
}
