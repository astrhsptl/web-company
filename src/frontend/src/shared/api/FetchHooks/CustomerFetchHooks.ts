import axios from "axios";
import { BASE_API_URL, createQueryArgumentString } from "../base";
import { 
    Customer,
    CustomerCreate,
    CustomerSearch,
    NotFoundResponse,
} from "@/shared/interfaces";


const PATH_URL = "customer";

const useCustomerListHook = async (searchArgs?: CustomerSearch) => {
    let path = `${BASE_API_URL}/${PATH_URL}/`;

    if (searchArgs) {
        path += createQueryArgumentString(searchArgs);
    }

    let { data } = await axios.get<Customer[]>(path);
    return data;
}

const useCustomerByIdHook = async (id: string) => {
    let { data } = await axios.get<Customer | NotFoundResponse>(`${BASE_API_URL}/${PATH_URL}/${id}`);
    return data;
}

const useCustomerCreate = async (uploadedData: CustomerCreate) => {
    let { data } = await axios.post<Customer>(
        `${BASE_API_URL}/${PATH_URL}/`,
        uploadedData, {
            headers: { "Content-Type": "multipart/form-data"}
        });
    
    return data 
}

export {
    useCustomerByIdHook,
    useCustomerListHook,
    useCustomerCreate
}