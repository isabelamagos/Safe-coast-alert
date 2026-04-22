export type BeachFlagColor = 'green' | 'yellow' | 'red' | 'black';

export interface BeachInfo {
  id: string;
  name: string;
  flagColor: BeachFlagColor;
  conditionsText: string;
  lastUpdated: string;
}

export interface BeachInfoModalProps {
  visible: boolean;
  beachInfo: BeachInfo | null;
  onClose: () => void;
}
