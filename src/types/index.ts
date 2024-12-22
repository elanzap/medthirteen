// Add DiagnosticTest type
export interface DiagnosticTest {
  id: string;
  name: string;
  price: number;
}

// Add Doctor type
export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  qualification: string;
  registrationNumber: string;
  consultationFee: number;
}

// Add Medication type
export interface Medication {
  name: string;
  dosage: string;
  interval: string;
  duration: string;
  instructions: string;
}

// Add VitalSigns type
export interface VitalSigns {
  bloodPressure: string;
  pulseRate: number;
  temperature: number;
  weight: number;
}

// Add Patient type
export interface Patient {
  id: string;
  patientId: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  phoneNumber: string;
  visits: Visit[];
}

// Add Visit type
export interface Visit {
  id: string;
  date: string;
  prescriptionId?: string;
}

// Add Prescription type
export interface Prescription {
  prescriptionId: string;
  visitId: string;
  patientId: string;
  date: string;
  vitalSigns?: VitalSigns;
  symptoms?: string;
  diagnoses?: string[];
  medications?: Medication[];
  labTests?: string[];
}

// Add DiagnosisTemplate type
export interface DiagnosisTemplate {
  id: string;
  name: string;
  medications: Medication[];
  labTests: string[];
}
