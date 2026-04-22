export type BeachFlagColor = 'green' | 'yellow' | 'red' | 'black';

export interface BeachCompleteData {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  flagColor: BeachFlagColor;
  conditionsText: string;
  lastUpdated: string;
}

export const MOCK_BEACHES: BeachCompleteData[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    name: 'Playa Camarones',
    location: 'Puerto Vallarta',
    flagColor: 'green',
    conditionsText:
      'Condiciones óptimas para nadar. Oleaje tranquilo, marea estable y sin presencia de corrientes de resaca detectadas en la zona de bañistas.',
    lastUpdated: 'Hoy, 10:30 AM',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    name: 'Playa Los Muertos',
    location: 'Puerto Vallarta',
    flagColor: 'yellow',
    conditionsText:
      'Precaución al ingresar al mar. Se registra oleaje moderado y ráfagas de viento. Manténgase cerca de la orilla y siga las indicaciones de los guardavidas.',
    lastUpdated: 'Hoy, 11:15 AM',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    name: 'Playa Conchas Chinas',
    location: 'Puerto Vallarta',
    flagColor: 'red',
    conditionsText:
      'Peligro. Prohibido nadar. Fuerte oleaje, marea alta y corrientes de retorno activas que representan un alto riesgo para la integridad física.',
    lastUpdated: 'Hoy, 09:00 AM',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    name: 'Mismaloya',
    location: 'Puerto Vallarta',
    flagColor: 'green',
    conditionsText:
      'Agua en calma y excelente visibilidad. Ideal para actividades recreativas acuáticas. Nivel de bacterias dentro de la norma sanitaria.',
    lastUpdated: 'Hoy, 08:45 AM',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    name: 'Playa Boca de Tomatlán',
    location: 'Puerto Vallarta',
    flagColor: 'yellow',
    conditionsText:
      'Tránsito constante de embarcaciones menores en la bahía. Nade únicamente en las zonas delimitadas con boyas para evitar accidentes.',
    lastUpdated: 'Hoy, 12:00 PM',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    name: 'Playa Yelapa',
    location: 'Cabo Corrientes',
    flagColor: 'green',
    conditionsText:
      'Condiciones marítimas seguras. Zona vigilada por autoridades locales. Clima soleado y sin alteraciones en el oleaje.',
    lastUpdated: 'Hoy, 10:00 AM',
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    name: 'Playa Las Caletas',
    location: 'Cabo Corrientes',
    flagColor: 'black',
    conditionsText:
      'Playa cerrada al público. Presencia de marea roja tóxica y fauna marina peligrosa en la orilla. Acordonamiento preventivo activo.',
    lastUpdated: 'Hoy, 07:30 AM',
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    name: 'Playa Palmares',
    location: 'Puerto Vallarta',
    flagColor: 'black',
    conditionsText:
      'Playa cerrada al público. Presencia de marea roja tóxica y fauna marina peligrosa en la orilla. Acordonamiento preventivo activo.',
    lastUpdated: 'Hoy, 11:45 AM',
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    name: 'Playa Garza Blanca',
    location: 'Puerto Vallarta',
    flagColor: 'green',
    conditionsText:
      'Protegida por rompeolas natural. Aguas tranquilas sin riesgo aparente. Calidad del agua en parámetros óptimos.',
    lastUpdated: 'Hoy, 13:10 PM',
  },
];
