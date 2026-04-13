import { View, Text, Pressable, FlatList } from 'react-native';
import FilterBar from '@/components/FilterBar';
import { useFilters } from '@/hooks/useFilters';
import { FILTER_DATA_MOCK } from '@/mocks/filterData';
import { router } from 'expo-router';
import { MOCK_ALERTS } from '@/mocks/alertData';
import AlertCard from '@/components/AlertCard';

export default function ForumScreen() {
  const { selectedFilters, toggleFilter } = useFilters();

  return (
    <View className="flex-1 bg-background">
      <View className="m-4 flex-row items-center justify-between">
        <Text className="text-3xl font-bold">Foro oficial</Text>
        <Pressable
          className="items-center rounded-lg bg-primary py-3 active:opacity-80"
          onPress={() => router.push('/crear-hilo')}>
          <Text className="mx-8 text-lg font-bold text-primary-foreground">Nuevo Hilo</Text>
        </Pressable>
      </View>
      <View className="mb-4">
        <FilterBar
          data={FILTER_DATA_MOCK}
          selectedFilters={selectedFilters}
          onFilterSelect={toggleFilter}
        />
      </View>
      <FlatList
        data={MOCK_ALERTS}
        numColumns={1}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
        renderItem={({ item }) => (
          <AlertCard
            id={item.id}
            date={item.date}
            title={item.title}
            source={item.source}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
