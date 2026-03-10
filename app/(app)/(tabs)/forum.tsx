import { View, Text } from 'react-native';

export default function ForumScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Forum Comunitario</Text>
      <Text className="mt-2 text-muted-foreground">Hilos y debates irán aquí</Text>
    </View>
  );
}
