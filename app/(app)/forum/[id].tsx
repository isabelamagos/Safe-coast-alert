import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { MOCK_ALERTS } from '@/mocks/alertData';

export default function AlertDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const alertData = MOCK_ALERTS.find((alert) => alert.id === id);

  if (!alertData) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-2xl font-bold text-foreground">Alerta no encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40, paddingTop: 16 }}
      showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: alertData.imageUrl }}
        className="h-96 flex-1 rounded-3xl"
        contentFit="cover"
      />
      <Text className="mt-4 text-3xl font-bold text-foreground">{alertData.title}</Text>
      <Text className="mt-1 text-base text-muted-foreground">{alertData.source}</Text>
      <Text className="mt-1 text-base text-muted-foreground">{alertData.date}</Text>
      <Text className="mt-4 text-lg text-foreground">{alertData.description}</Text>
    </ScrollView>
  );
}
