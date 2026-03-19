import { FilterCategory } from '../types/filters';

export const FILTER_DATA_MOCK: FilterCategory[] = [
  {
    id: 'color',
    title: 'Color',
    options: [
      { label: 'Rojo', value: 'red' },
      { label: 'Amarillo', value: 'yellow' },
      { label: 'Verde', value: 'green' },
    ],
  },
  {
    id: 'status',
    title: 'Estado',
    options: [
      { label: 'Seguro', value: 'safe' },
      { label: 'Precaución', value: 'caution' },
      { label: 'Peligro', value: 'danger' },
      { label: 'Crítico', value: 'critical' },
    ],
  },
  {
    id: 'date',
    title: 'Fecha/Hora',
    options: [
      { label: 'Últimas 24h', value: '24h' },
      { label: 'Última semana', value: '7d' },
    ],
  },
  {
    id: 'filtro1',
    title: 'Filtro 1',
    options: [
      { label: 'Opción 1', value: 'opc1' },
      { label: 'Opción 2', value: 'opc2' },
    ],
  },
  {
    id: 'filtro2',
    title: 'Filtro 2',
    options: [
      { label: 'Opción 1', value: 'opc1' },
      { label: 'Opción 2', value: 'opc2' },
    ],
  },
];
