import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function AlertDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-background">
      <Text className="text-3xl font-bold">Detalle de la alerta {id}</Text>
    </View>
  );
}
