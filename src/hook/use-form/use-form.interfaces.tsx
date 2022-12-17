export type initialForm = object

export interface UseFormReturn {
  data: any
  handleDelete: (idDelete: number, urlDelete: string) => void
  handlePost: (url: any) => void
  ApiService: (method: string, body: any) => void
}
