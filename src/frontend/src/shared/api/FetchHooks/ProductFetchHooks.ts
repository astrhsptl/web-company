import axios from "axios";
import { BASE_API_URL } from "../base";
import { Product, NotFoundResponse } from "@/shared/interfaces";


const ProductURL = "product";


const useProductListHook = async () => {
    let { data } = await axios.get<Product[]>(`${BASE_API_URL}/${ProductURL}`);
    return data;
}

const useProductByIdHook = async (id: string) => {
    let { data } = await axios.get<Product | NotFoundResponse>(`${BASE_API_URL}/${ProductURL}/${id}`);
    return data;
}




export {
    useProductListHook,
    useProductByIdHook,
}