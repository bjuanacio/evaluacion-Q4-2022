export interface InputProps {
  placeholder?: string;
  type?: "text" | "password";
  label?: string;
  errorMessage?: string;
  variant?: "error" | "normal";
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange: (value: string, name?: string) => void;
}
