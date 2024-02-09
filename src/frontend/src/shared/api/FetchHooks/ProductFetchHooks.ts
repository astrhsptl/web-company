import axios from "axios";
import { BASE_API_URL } from "../base";
import { Product, NotFoundResponse } from "@/shared/interfaces";

const PATH_URL = "product";

const useProductListHook = async () => {
  const { data } = await axios.get<Product[]>(`${BASE_API_URL}/${PATH_URL}`);
  return data;
};

const useProductByIdHook = async (id: string) => {
  const { data, status } = await axios.get<Product | NotFoundResponse>(
    `${BASE_API_URL}/${PATH_URL}/${id}`,
  );

  if (status >= 200 && status < 300) {
    return data as Product;
  }

  return null;
};

export { useProductListHook, useProductByIdHook };
