export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
}

export type SelectedFiltersState = Record<string, string>;
