import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import FilterBar from '@/components/FilterBar';
import BeachCard from '@/components/BeachCard';
import BeachInfoModal from '@/components/BeachInfoModal';
import { useFilters } from '@/hooks/useFilters';
import { FILTER_DATA_MOCK } from '@/mocks/filterData';
import { MOCK_BEACHES } from '@/mocks/beachData';
import { BeachInfo } from '@/types/beach';

export default function InicioScreen() {
  const { selectedFilters, toggleFilter } = useFilters();
  const [selectedBeach, setSelectedBeach] = useState<BeachInfo | null>(null);

  const handleOpenBeachModal = (beach: any) => {
    // Nota: Aquí 'beach' debería tener la estructura completa de BeachInfo.
    setSelectedBeach(beach as BeachInfo);
  };

  const handleCloseBeachModal = () => {
    setSelectedBeach(null);
  };

  return (
    <View className="flex-1 bg-background">
      <View className="mb-2">
        <FilterBar
          data={FILTER_DATA_MOCK}
          selectedFilters={selectedFilters}
          onFilterSelect={toggleFilter}
        />
      </View>
      {selectedBeach ? (
        <Text className="text-center text-lg">
          Mapa
        </Text> /* Esto es solo una propuesta para manejar el contenido de la pantalla cuando aparezca un mapa */
      ) : (
        <FlatList
          data={MOCK_BEACHES}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{
            gap: 16,
            marginBottom: 16,
          }}
          renderItem={({ item }) => (
            <BeachCard
              imageUrl={item.imageUrl}
              name={item.name}
              location={item.location}
              onPress={() => handleOpenBeachModal(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}

      <BeachInfoModal
        visible={!!selectedBeach}
        beachInfo={selectedBeach}
        onClose={handleCloseBeachModal}
      />
    </View>
  );
}
