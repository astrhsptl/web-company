import axios from "axios";
import { BASE_API_URL } from "../base";
import { 
    FileInterface,
    FileCreationInterface,
    NotFoundResponse,
} from "@/shared/interfaces";


const PATH_URL = "file";

const useFileListHook = async () => {
    let { data } = await axios.get<FileInterface[]>(`${BASE_API_URL}/${PATH_URL}`);
    return data;
}

const useFileByIdHook = async (id: string) => {
    let { data } = await axios.get<FileInterface | NotFoundResponse>(`${BASE_API_URL}/${PATH_URL}/${id}`);
    return data;
}

const useFileCreate = async (uploadedData: FileCreationInterface) => {
    let { data } = await axios.post<FileInterface>(
        `${BASE_API_URL}/${PATH_URL}/`,
        uploadedData, {
            headers: { "Content-Type": "multipart/form-data"}
        });
    return data
}

export {
    useFileByIdHook,
    useFileListHook,
    useFileCreate
}