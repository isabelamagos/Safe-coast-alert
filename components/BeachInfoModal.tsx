import React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BeachInfoModalProps, BeachFlagColor } from '@/types/beach';

export default function BeachInfoModal({ visible, beachInfo, onClose }: BeachInfoModalProps) {
  if (!beachInfo) return null;

  const getFlagStyles = (color: BeachFlagColor) => {
    switch (color) {
      case 'green':
        return { bg: 'bg-success-background', text: 'text-success', label: 'Verde' };
      case 'yellow':
        return { bg: 'bg-warning-background', text: 'text-warning', label: 'Amarilla' };
      case 'red':
        return { bg: 'bg-alert-background', text: 'text-alert', label: 'Roja' };
      case 'black':
        return { bg: 'bg-critical-background', text: 'text-critical', label: 'Negra' };
      default:
        return { bg: 'bg-neutral-100', text: 'text-neutral-600', label: 'Desconocida' };
    }
  };

  const flagStyles = getFlagStyles(beachInfo.flagColor);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onClose}>
      <Pressable
        className="flex-1 justify-end bg-black/60"
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Cerrar información de la playa">
        <Pressable
          className="mb-safe-offset-20 m-4 rounded-t-3xl bg-card p-6 shadow-xl shadow-black/30"
          onPress={(e) => e.stopPropagation()}
          accessibilityRole="none">
          {/* Indicador estético del drag handle */}
          <View className="mb-6 items-center">
            <View className="h-1.5 w-12 rounded-full bg-neutral-300" />
          </View>

          {/* Header: Título y bandera */}
          <View className="mb-4 flex-col items-start">
            <Text className="mb-4 text-2xl font-bold text-card-foreground">{beachInfo.name}</Text>
            <View className="flex-row items-center">
              <View className={`rounded-full p-3 ${flagStyles.bg}`}>
                <Feather name="flag" size={20} className={flagStyles.text} />
              </View>
              <Text className={`ml-2 text-xl tracking-wide`}>
                Bandera: <Text className={`font-bold ${flagStyles.text}`}>{flagStyles.label}</Text>
              </Text>
            </View>
          </View>

          {/* Body: Condiciones */}
          <Text className="mb-6 text-base leading-relaxed text-card-foreground">
            {beachInfo.conditionsText}
          </Text>

          {/* Footer: Metadata */}
          <View className="flex-row items-center">
            <Feather name="clock" size={14} className="text-muted-foreground" />
            <Text className="ml-2 text-sm font-medium text-muted-foreground">
              Actualizado: {beachInfo.lastUpdated}
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
