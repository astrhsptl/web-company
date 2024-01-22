import axios from "axios";
import { BASE_API_URL } from "../base";
import { BlogInterface, NotFoundResponse } from "@/shared/interfaces";


const ProductURL = "post";


const usePostListHook = async () => {
    let { data } = await axios.get<BlogInterface[]>(`${BASE_API_URL}/${ProductURL}`);
    return data;
}

const usePostByIdHook = async (id: string) => {
    let { data } = await axios.get<BlogInterface | NotFoundResponse>(`${BASE_API_URL}/${ProductURL}/${id}`);
    return data;
}




export {
    usePostByIdHook,
    usePostListHook,
}