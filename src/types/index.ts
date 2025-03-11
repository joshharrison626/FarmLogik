export interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  birthDate: string;
  imageName: string;
  status: 'healthy' | 'sick' | 'treatment';
  tags: string[];
}

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
}