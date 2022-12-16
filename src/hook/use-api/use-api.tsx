import { useState } from "react";
import Api from "../../services/api-service/api-service";

interface UseApiProp {
  method: "get" | "post" | "delete";
  params?: any;
}

interface UseApiReturn {
  data: any;
  ApiService: (method: string, params: any) => void;
}
export const useApi = (): UseApiReturn => {
  const [data, setData] = useState([]);

  const ApiService = async (method: string, params: object) => {
    if (method === "get") {
      try {
        const { data } = await Api.get("?author_id=1");
         setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    else if (method === "post") {
      try {
        const { data } = await Api.post("", params);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    else if (method === "delete") {
      try {
        const { data } = await Api.delete("", {
          data: params
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    data,
    ApiService,
  };
};
