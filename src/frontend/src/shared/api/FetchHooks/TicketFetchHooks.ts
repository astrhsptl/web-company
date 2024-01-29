import axios from "axios";
import { BASE_API_URL } from "../base";
import { NotFoundResponse, TicketOrder, TicketOrderCreate } from "@/shared/interfaces";


const PATH_URL = "ticket/order";


const useTicketOrderListHook = async () => {
    let { data } = await axios.get<TicketOrder[]>(`${BASE_API_URL}/${PATH_URL}`);
    return data;
}

const useTicketOrderByIdHook = async (id: string) => {
    let { data } = await axios.get<TicketOrder | NotFoundResponse>(`${BASE_API_URL}/${PATH_URL}/${id}`);
    return data;
}

const useTicketOrderCreateHook = async (ticketOrderData: TicketOrderCreate) => {
    let { data } = await axios.post<TicketOrder>(`${BASE_API_URL}/${PATH_URL}/`, ticketOrderData);
    return data;
}

export {
    useTicketOrderListHook,
    useTicketOrderByIdHook,
    useTicketOrderCreateHook,
}