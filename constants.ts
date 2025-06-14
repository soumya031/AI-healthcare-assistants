
import { SymptomOption, ConditionOption, SelectOption } from './types';

export const APP_TITLE = "AI Healthcare Assistant";

export const GENDER_OPTIONS: SelectOption[] = [
  { value: '', label: 'Select Gender' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export const ACTIVITY_LEVEL_OPTIONS: SelectOption[] = [
  { value: '', label: 'Select Activity Level' },
  { value: 'low', label: 'Low (Little to no exercise)' },
  { value: 'medium', label: 'Medium (Exercise 1-3 days/week)' },
  { value: 'high', label: 'High (Exercise 4-7 days/week)' },
];

export const YES_NO_OPTIONS: SelectOption[] = [
    { value: 'false', label: 'No' },
    { value: 'true', label: 'Yes' },
];

export const COMMON_SYMPTOMS: SymptomOption[] = [
  { id: 'fever', label: 'Fever (Persistent or High)' },
  { id: 'cough', label: 'Cough (Persistent or Severe)' },
  { id: 'fatigue', label: 'Unexplained Fatigue or Weakness' },
  { id: 'headache', label: 'Severe or Recurrent Headache' },
  { id: 'sore_throat', label: 'Sore Throat (Persistent)' },
  { id: 'shortness_of_breath', label: 'Shortness of Breath (Dyspnea)' },
  { id: 'chest_pain', label: 'Chest Pain or Discomfort' },
  { id: 'nausea_vomiting', label: 'Nausea or Vomiting (Persistent)' },
  { id: 'dizziness', label: 'Dizziness or Lightheadedness' },
  { id: 'weight_loss', label: 'Unexplained Weight Loss' },
  { id: 'weight_gain', label: 'Unexplained Weight Gain' },
  { id: 'joint_pain_swelling', label: 'Joint Pain or Swelling' },
  { id: 'muscle_aches', label: 'Widespread Muscle Aches' },
  { id: 'abdominal_pain', label: 'Persistent Abdominal Pain or Cramping' },
  { id: 'bloating', label: 'Persistent Bloating' },
  { id: 'bowel_changes', label: 'Changes in Bowel Habits (Diarrhea, Constipation)' },
  { id: 'skin_rash', label: 'Unexplained Skin Rash or Lesions' },
  { id: 'vision_changes', label: 'Blurred Vision or Vision Loss' },
  { id: 'memory_issues', label: 'Memory Loss or Confusion' },
  { id: 'mood_changes', label: 'Significant Mood Swings or Irritability' },
  { id: 'sleep_disturbances', label: 'Insomnia or Excessive Sleepiness' },
  { id: 'frequent_urination', label: 'Frequent or Painful Urination' },
  { id: 'swollen_lymph_nodes', label: 'Swollen Lymph Nodes (Persistent)' },
  { id: 'difficulty_swallowing', label: 'Difficulty Swallowing (Dysphagia)' },
  { id: 'hair_loss', label: 'Unexplained Hair Loss' },
];

export const COMMON_CONDITIONS: ConditionOption[] = [
  { id: 'hypertension', label: 'Hypertension (High Blood Pressure)' },
  { id: 'diabetes_t1', label: 'Diabetes (Type 1)' },
  { id: 'diabetes_t2', label: 'Diabetes (Type 2)' },
  { id: 'prediabetes', label: 'Prediabetes' },
  { id: 'asthma', label: 'Asthma' },
  { id: 'copd', label: 'COPD (Chronic Obstructive Pulmonary Disease)' },
  { id: 'heart_disease_coronary', label: 'Coronary Artery Disease' },
  { id: 'heart_failure', label: 'Heart Failure' },
  { id: 'arrhythmia', label: 'Arrhythmia (Irregular Heartbeat)' },
  { id: 'stroke_history', label: 'History of Stroke or TIA' },
  { id: 'kidney_disease_chronic', label: 'Chronic Kidney Disease (CKD)' },
  { id: 'liver_disease', label: 'Chronic Liver Disease (e.g., Cirrhosis, Hepatitis)' },
  { id: 'autoimmune_ra', label: 'Rheumatoid Arthritis (RA)' },
  { id: 'autoimmune_lupus', label: 'Lupus (SLE)' },
  { id: 'autoimmune_thyroid', label: 'Autoimmune Thyroid Disease (Hashimoto\'s, Graves\')'},
  { id: 'hypothyroidism', label: 'Hypothyroidism (Underactive Thyroid)' },
  { id: 'hyperthyroidism', label: 'Hyperthyroidism (Overactive Thyroid)' },
  { id: 'cancer_history', label: 'History of Cancer (any type)' },
  { id: 'depression', label: 'Depression (Diagnosed)' },
  { id: 'anxiety_disorder', label: 'Anxiety Disorder (Diagnosed)' },
  { id: 'bipolar_disorder', label: 'Bipolar Disorder (Diagnosed)' },
  { id: 'ibs', label: 'Irritable Bowel Syndrome (IBS)' },
  { id: 'ibd', label: 'Inflammatory Bowel Disease (Crohn\'s, Ulcerative Colitis)' },
  { id: 'osteoarthritis', label: 'Osteoarthritis' },
  { id: 'osteoporosis', label: 'Osteoporosis' },
  { id: 'migraine', label: 'Migraine Disorder' },
  { id: 'sleep_apnea', label: 'Sleep Apnea' },
  { id: 'obesity', label: 'Obesity (Clinically Diagnosed)' },
  { id: 'pcos', label: 'Polycystic Ovary Syndrome (PCOS)' },
  { id: 'endometriosis', label: 'Endometriosis' },
  { id: 'chronic_pain_syndrome', label: 'Chronic Pain Syndrome (e.g., Fibromyalgia)' },
  { id: 'allergies_severe', label: 'Severe Allergies / Anaphylaxis History' },
];

export const INITIAL_HEALTH_DATA: import('./types').HealthData = {
    age: null,
    gender: '',
    symptoms: [],
    conditions: [],
    isSmoker: false,
    activityLevel: '',
    customSymptoms: '',
    customConditions: '',
};
