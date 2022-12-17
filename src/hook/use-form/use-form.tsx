import { useEffect, useState } from "react";
import { useApi } from "../use-api/use-api";
import { UseFormReturn } from "./use-form.interfaces";

export const useForm = (): UseFormReturn => {
  const { data, ApiService } = useApi();
  const handlePost = (url:any) => {
    ApiService("post", {
      url,
      author_id: 20,
    });
  };

  const handleDelete = (idDelete: number, urlDelete: string) => {
    ApiService("delete", {
      id: idDelete!,
      url: urlDelete!,
      author_id: 20,
    });
  };

  return {
   data,
   handleDelete,
    handlePost,
    ApiService
  };
};
