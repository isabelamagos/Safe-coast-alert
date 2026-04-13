import { Pressable, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

interface AlertCardProps {
  id: string;
  date: string;
  title: string;
  source: string;
  description: string;
  imageUrl: string;
}

export default function AlertCard({
  id,
  date,
  title,
  source,
  description,
  imageUrl,
}: AlertCardProps) {
  return (
    <Pressable
      className="mb-6 flex-row active:opacity-80"
      onPress={() => router.push(`/forum/${id}`)}>
      <View className="w-3/5 justify-center pr-1">
        <Text className="text-sm text-muted-foreground" numberOfLines={1}>
          {date}
        </Text>
        <Text className="text-xl font-bold text-foreground" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-sm text-muted-foreground" numberOfLines={2}>
          {source}
        </Text>
        <Text className="mt-1 text-lg text-foreground" numberOfLines={8}>
          Resumen: {description}
        </Text>
      </View>
      <Image
        source={{ uri: imageUrl }}
        className="min-h-64 flex-1 rounded-3xl"
        contentFit="cover"
        transition={200}
      />
    </Pressable>
  );
}
