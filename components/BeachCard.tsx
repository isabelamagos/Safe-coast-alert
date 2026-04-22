import { Text, Pressable } from 'react-native';
import { Image } from 'expo-image';

interface BeachCardProps {
  imageUrl: string;
  name: string;
  location: string;
  onPress: () => void;
}

export default function BeachCard({ imageUrl, name, location, onPress }: BeachCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="h-48 flex-1 rounded-xl border border-border bg-card p-2 active:opacity-80">
      <Image
        source={{ uri: imageUrl }}
        className="mb-3 h-28 w-full rounded-md"
        contentFit="cover"
        transition={200}
      />
      <Text className="text-xl font-medium text-card-foreground" numberOfLines={1}>
        {name}
      </Text>
      <Text className="mt-1 text-base text-muted-foreground" numberOfLines={1}>
        {location}
      </Text>
    </Pressable>
  );
}
