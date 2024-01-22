import axios from "axios";
import { BASE_API_URL } from "../base";
import { NotFoundResponse, ProductWork } from "@/shared/interfaces";


const ProductURL = "product-work";


const useProductWorkListHook = async () => {
    let { data } = await axios.get<ProductWork[]>(`${BASE_API_URL}/${ProductURL}`);
    return data;
}

const useProductWorkByIdHook = async (id: string) => {
    let { data } = await axios.get<ProductWork | NotFoundResponse>(`${BASE_API_URL}/${ProductURL}/${id}`);
    return data;
}




export {
    useProductWorkByIdHook,
    useProductWorkListHook,
}