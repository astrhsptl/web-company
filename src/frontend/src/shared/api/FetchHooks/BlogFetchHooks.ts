import { BlogInterface, NotFoundResponse } from "@/shared/interfaces";
import axios from "axios";
import { BASE_API_URL } from "../base";

const PATH_URL = "post";

const usePostListHook = async () => {
  const { data } = await axios.get<BlogInterface[]>(
    `${BASE_API_URL}/${PATH_URL}`,
  );
  return data;
};

const usePostByIdHook = async (id: string | null | undefined) => {
  if (!id) return null;
  const { data, status } = await axios.get<BlogInterface | NotFoundResponse>(
    `${BASE_API_URL}/${PATH_URL}/${id}`,
  );

  if (status >= 200 && status < 300) {
    return data as BlogInterface;
  }

  return null;
};

export { usePostByIdHook, usePostListHook };
