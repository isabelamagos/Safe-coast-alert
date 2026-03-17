import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';

interface CustomHeaderProps {
  title: string;
}

export default function CustomHeader({ title }: CustomHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const canGoBack = router.canGoBack();

  return (
    <View
      className="bg-header flex-row items-center justify-between border-b border-border px-4 pb-3"
      style={{ paddingTop: insets.top + 12 }}>
      {/* Botón de regreso */}
      <View className="min-h-[40px] w-12 items-start justify-center">
        {canGoBack && (
          <Pressable
            onPress={() => router.back()}
            className="-ml-2 px-2 active:opacity-70"
            hitSlop={10}>
            <Feather name="chevron-left" size={26} className="text-header-foreground" />
          </Pressable>
        )}
      </View>

      {/* Título de la pantalla */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-header-foreground text-lg font-bold tracking-tight" numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Logo con propósito estético */}
      <View className="min-h-[40px] w-12 items-end justify-center">
        <Image
          source={require('@/assets/logo-sin-fondo.png')}
          className="h-10 w-10"
          contentFit="contain"
        />
      </View>
    </View>
  );
}
