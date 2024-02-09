import axios from "axios";
import { BASE_API_URL } from "../base";
import { NotFoundResponse, ProductWork } from "@/shared/interfaces";

const PATH_URL = "product-work";

const useProductWorkListHook = async () => {
  const { data } = await axios.get<ProductWork[]>(
    `${BASE_API_URL}/${PATH_URL}`,
  );
  return data;
};

const useProductWorkByIdHook = async (id: string) => {
  const { data } = await axios.get<ProductWork | NotFoundResponse>(
    `${BASE_API_URL}/${PATH_URL}/${id}`,
  );
  return data;
};

export { useProductWorkByIdHook, useProductWorkListHook };
