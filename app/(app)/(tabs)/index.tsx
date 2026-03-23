import { FlatList, View } from 'react-native';
import FilterBar from '@/components/FilterBar';
import { useFilters } from '@/hooks/useFilters';
import { FILTER_DATA_MOCK } from '@/mocks/filterData';
import { MOCK_BEACHES } from '@/mocks/beachData'; // Importas tus datos
import BeachCard from '@/components/BeachCard';

export default function InicioScreen() {
  const { selectedFilters, toggleFilter } = useFilters();

  return (
    <View className="flex-1 bg-background">
      <View className="mb-4 w-full items-center">
        <FilterBar
          data={FILTER_DATA_MOCK}
          selectedFilters={selectedFilters}
          onFilterSelect={toggleFilter}
        />
      </View>

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
          <BeachCard imageUrl={item.imageUrl} name={item.name} location={item.location} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
