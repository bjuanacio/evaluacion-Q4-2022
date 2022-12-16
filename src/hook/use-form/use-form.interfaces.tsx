export type initialForm = object

export interface UseFormReturn {
  formState: any;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}
