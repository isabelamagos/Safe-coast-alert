import { View } from 'react-native';
import FilterBar from '@/components/FilterBar';
import { useFilters } from '@/hooks/useFilters';
import { FILTER_DATA_MOCK } from '@/mocks/filterData';

export default function InicioScreen() {
  const { selectedFilters, toggleFilter } = useFilters();

  return (
    <View className="flex-1 items-center bg-background">
      <FilterBar
        data={FILTER_DATA_MOCK}
        selectedFilters={selectedFilters}
        onFilterSelect={toggleFilter}
      />
    </View>
  );
}
