import axios from "axios";
import { BASE_API_URL } from "../base";
import { Product, NotFoundResponse } from "@/shared/interfaces";


const PATH_URL = "product";

const useProductListHook = async () => {
    let { data } = await axios.get<Product[]>(`${BASE_API_URL}/${PATH_URL}`);
    return data;
}

const useProductByIdHook = async (id: string) => {
    let { data } = await axios.get<Product | NotFoundResponse>(`${BASE_API_URL}/${PATH_URL}/${id}`);
    return data;
}


export {
    useProductListHook,
    useProductByIdHook,
}