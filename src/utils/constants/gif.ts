import { AUTHOR_ID } from "./author";
import { Gif } from "../interfaces/gif";
export const DEFAULT_IMAGE =
  "https://sipr.mojokertokab.go.id/images/avatar/no-image.jpg";

export const EMPTY_GIF: Gif = {
  id: 0,
  url: "",
  author_id: AUTHOR_ID!,
};
