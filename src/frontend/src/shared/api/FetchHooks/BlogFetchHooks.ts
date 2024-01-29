import axios from "axios";
import { BASE_API_URL } from "../base";
import { BlogInterface, NotFoundResponse } from "@/shared/interfaces";

const PATH_URL = "post";

const usePostListHook = async () => {
    let { data } = await axios.get<BlogInterface[]>(`${BASE_API_URL}/${PATH_URL}`);
    return data;
}

const usePostByIdHook = async (id: string) => {
    let { data } = await axios.get<BlogInterface | NotFoundResponse>(`${BASE_API_URL}/${PATH_URL}/${id}`);
    return data;
}

export {
    usePostByIdHook,
    usePostListHook,
}