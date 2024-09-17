export interface DefaultInputType {
  type: "text" | "email" | "password" | "number" | "tel" | "date";
  required?: boolean;
  value?: string;
  label: string;
  //children: React.ReactNode;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
