
export interface DefaultInputType {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date';
  required?: boolean;
  value?: string;
  children: React.ReactNode;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

