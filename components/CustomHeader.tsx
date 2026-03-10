import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

interface CustomHeaderProps {
  title: string;
}

export default function CustomHeader({ title }: CustomHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const canGoBack = router.canGoBack();

  return (
    <View
      className="flex-row items-center justify-between border-b border-border bg-card px-4 pb-3"
      style={{ paddingTop: insets.top + 12 }}>
      {/* Botón de regreso */}
      <View className="min-h-[40px] w-12 items-start justify-center">
        {canGoBack && (
          <Pressable
            onPress={() => router.back()}
            className="-ml-2 px-2 active:opacity-70"
            hitSlop={10}>
            <Feather name="chevron-left" size={26} className="text-foreground" />
          </Pressable>
        )}
      </View>

      {/* Título de la pantalla */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold tracking-tight text-foreground" numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Menú Drawer (Placeholder) */}
      {/* Estará comentado por ahora, ya que no se ha definido su función ni diseño en el Figma */}
      <View className="min-h-[40px] w-12 items-end justify-center">
        {/* <Pressable
          onPress={() => console.log('Lógica del drawer si se llega a implementar')}
          className="-mr-2 p-2 active:opacity-70"
          hitSlop={10}>
          <Feather name="menu" size={24} className="text-foreground" />
        </Pressable> */}
      </View>
    </View>
  );
}
