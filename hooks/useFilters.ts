import { useState, useCallback } from 'react';
import { SelectedFiltersState } from '@/types/filters';

export const useFilters = (initialState: SelectedFiltersState = {}) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>(initialState);

  const toggleFilter = useCallback((categoryId: string, value: string) => {
    setSelectedFilters((prev) => {
      if (prev[categoryId] === value) {
        const newState = { ...prev };
        delete newState[categoryId];
        return newState;
      }

      return { ...prev, [categoryId]: value };
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    setSelectedFilters({});
  }, []);

  return {
    selectedFilters,
    toggleFilter,
    clearAllFilters,
  };
};
