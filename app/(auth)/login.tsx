import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Image } from 'expo-image';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAwareScrollView bottomOffset={20} className="flex-1">
        <View className="mb-10 mt-20 items-center">
          <Image
            source={require('@/assets/icon.png')} // Placeholder, falta el logo real
            className="mb-4 h-36 w-36"
            contentFit="contain"
          />
          <Text className="mb-2 text-5xl font-bold text-foreground">SafeCoast</Text>
          <Text className="text-lg text-muted-foreground">Seguridad en el mar en tiempo real</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
