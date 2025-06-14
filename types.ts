
export interface HealthData {
  age: number | null;
  gender: string;
  symptoms: string[];
  conditions: string[];
  isSmoker: boolean;
  activityLevel: string; // 'low', 'medium', 'high'
  customSymptoms: string;
  customConditions: string;
}

export enum RiskLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  UNDETERMINED = 'Undetermined'
}

export interface RiskPrediction {
  riskLevel: RiskLevel;
  score: number; // For internal use or more detailed display
  summaryMessage: string;
}

export interface SymptomOption {
  id: string;
  label: string;
}

export interface ConditionOption {
  id: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
    