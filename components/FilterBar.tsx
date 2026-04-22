import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FilterCategory, FilterBarProps } from '@/types/filters';

export default function FilterBar({ data, selectedFilters, onFilterSelect }: FilterBarProps) {
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const activeCategory = data.find((cat) => cat.id === activeFilterId);

  const handleToggleFilter = (item: FilterCategory) => {
    if (activeFilterId === item.id) {
      setActiveFilterId(null);
    } else {
      setActiveFilterId(item.id);
    }
  };

  const handleSelectOption = (categoryId: string, value: string) => {
    onFilterSelect(categoryId, value);
    setActiveFilterId(null);
  };

  const renderFilterCard = ({ item }: { item: FilterCategory }) => {
    const isSelected = !!selectedFilters[item.id];
    const isActive = activeFilterId === item.id;

    return (
      <Pressable
        onPress={() => handleToggleFilter(item)}
        className={`mr-3 flex-row items-center rounded-xl border px-4 py-2 active:opacity-70
          ${isSelected || isActive ? 'border-ocean-400 bg-ocean-50' : 'border-transparent bg-card'}`}>
        <Text
          className={`mr-1 text-base font-medium 
          ${isSelected || isActive ? 'text-ocean-800' : 'text-card-foreground'}`}>
          {item.title}
        </Text>
        <Feather
          name={isActive ? 'chevron-up' : 'chevron-down'}
          size={16}
          className={isSelected || isActive ? 'text-ocean-600' : 'text-card-foreground'}
        />
      </Pressable>
    );
  };

  return (
    <View className="py-4">
      <FlatList
        data={data}
        renderItem={renderFilterCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      {/* Contenedor de opciones */}
      {activeCategory && (
        <View className="mx-4 mt-4 rounded-xl border border-border bg-card p-2 shadow-sm">
          {activeCategory.options.map((option) => {
            const isOptionSelected = selectedFilters[activeCategory.id] === option.value;
            return (
              <Pressable
                key={option.value}
                onPress={() => handleSelectOption(activeCategory.id, option.value)}
                className="flex-row items-center justify-between rounded-lg px-4 py-3 active:bg-neutral-100">
                <Text
                  className={`text-base ${isOptionSelected ? 'font-bold text-ocean-700' : 'text-card-foreground'}`}>
                  {option.label}
                </Text>
                {isOptionSelected && <Feather name="check" size={18} className="text-ocean-600" />}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}
