import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Image } from 'expo-image';
import BaseInput from '@/components/BaseInput';
import { Feather } from '@expo/vector-icons';
import PasswordInput from '@/components/PasswordInput';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Falta una lógica de autenticación real
    router.replace('/(app)/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="mb-10 mt-32 items-center">
        <Image
          source={require('@/assets/icon.png')} // Placeholder, falta el logo real
          className="mb-4 h-36 w-36"
          contentFit="contain"
        />
        <Text className="mb-2 text-5xl font-bold text-foreground">SafeCoast</Text>
        <Text className="text-lg text-muted-foreground">Seguridad en el mar en tiempo real</Text>
      </View>

      <KeyboardAwareScrollView
        bottomOffset={20}
        className="flex-1"
        showsVerticalScrollIndicator={false}>
        <View className="px-4">
          <BaseInput
            placeholder="tucorreo@ejemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            leftElement={<Feather name="user" size={20} className="text-muted-foreground" />}
          />
          <PasswordInput placeholder="••••••••" />
          <View className="mb-6 items-end">
            <Link href="/(auth)/registro" asChild>
              {/* Falta la ruta de recuperación de contraseña */}
              <Text className="text-sm tracking-wide text-muted-foreground">
                ¿Olvidaste tu contraseña?
              </Text>
            </Link>
          </View>
          <Pressable
            onPress={handleLogin}
            className="mb-6 items-center rounded-lg bg-primary py-4 active:opacity-80">
            <Text className="text-lg font-bold text-primary-foreground">Iniciar sesión</Text>
          </Pressable>
          <View className="flex-row justify-center pb-12">
            <Text className="font-light text-ocean-600">¿No tienes una cuenta? </Text>
            <Link href="/(auth)/registro" asChild>
              <Text className="font-bold text-primary">Regístrate</Text>
            </Link>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
