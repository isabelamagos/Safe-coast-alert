import BaseInput from '@/components/BaseInput';
import { ScrollView } from 'react-native';

export default function CrearHiloScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40, paddingTop: 16 }}
      showsVerticalScrollIndicator={false}>
      <BaseInput placeholder="Título del hilo" className="mb-4" />
      <BaseInput placeholder="" multiline={true} numberOfLines={5} />
    </ScrollView>
  );
}
