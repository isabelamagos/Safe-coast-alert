import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FilterCategory, SelectedFiltersState } from '@/types/filters';

interface FilterBarProps {
  data: FilterCategory[];
  selectedFilters: SelectedFiltersState;
  onFilterSelect: (categoryId: string, value: string) => void;
}

export default function FilterBar({ data, selectedFilters, onFilterSelect }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory | null>(null);

  const handleSelect = (categoryId: string, value: string) => {
    onFilterSelect(categoryId, value);
    setActiveFilter(null); // Cierra el modal
  };

  const renderFilterCard = ({ item }: { item: FilterCategory }) => {
    const isSelected = !!selectedFilters[item.id];

    return (
      <Pressable
        onPress={() => setActiveFilter(item)}
        className={`mr-3 flex-row items-center rounded-xl border px-4 py-2 active:opacity-70
          ${isSelected ? 'border-ocean-400 bg-ocean-50' : 'border-transparent bg-card'}`}>
        <Text
          className={`mr-1 text-base font-medium 
          ${isSelected ? 'text-ocean-800' : 'text-card-foreground'}`}>
          {item.title}
        </Text>
        <Feather
          name="chevron-down"
          size={16}
          className={isSelected ? 'text-ocean-600' : 'text-card-foreground'}
        />
      </Pressable>
    );
  };

  return (
    <View className="flex flex-row py-4">
      <FlatList
        data={data}
        renderItem={renderFilterCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <Modal
        visible={activeFilter !== null}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}>
        <Pressable className="flex-1 justify-end bg-black/60" onPress={() => setActiveFilter(null)}>
          {/* Se usa un Pressable interior para atrapar los toques y que no cierren el modal si se toca la tarjeta blanca */}
          <Pressable
            className="mb-safe-offset-20 m-4 rounded-t-3xl bg-card p-6 shadow-xl shadow-black/30"
            onPress={(e) => e.stopPropagation()}>
            <View className="mb-4 items-center">
              <View className="h-1.5 w-12 rounded-full bg-neutral-300" />
            </View>

            <Text className="mb-6 text-xl font-bold text-card-foreground">
              Seleccionar {activeFilter?.title}
            </Text>

            {activeFilter?.options.map((option) => (
              <Pressable
                key={option.value}
                onPress={() => handleSelect(activeFilter.id, option.value)}
                className="border-b border-border px-2 py-4 active:bg-neutral-100">
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg text-card-foreground">{option.label}</Text>

                  {/* Se muestra un check si la opción actual es la seleccionada */}
                  {selectedFilters[activeFilter.id] === option.value && (
                    <Feather name="check" size={20} className={'text-ocean-600'} />
                  )}
                </View>
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
