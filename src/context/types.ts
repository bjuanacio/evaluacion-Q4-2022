export interface IGif {
  id: string;
  url: string;
  author_id: string;
}

export type GifContextType = {
  gifs: IGif[];
  isLoading: boolean;
};
