import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function NosotrosScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Sobre Nosotros</Text>
      <Text className="mt-2 text-muted-foreground">Información del proyecto</Text>

      <Pressable className="mt-20" onPress={() => router.replace('/(auth)/login')}>
        <Text className="text-alert">Cerrar sesión prueba</Text>
      </Pressable>
    </View>
  );
}
