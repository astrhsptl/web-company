import { Customer, FileInterface } from "..";

interface TicketOrder{
    id: string;
    title: string;
    body: string;
    customer_id?: string;
    files?: string[];

    fileList?: FileInterface[];
    customer?: Customer;
}

interface TicketOrderCreate{
    title: string;
    body: string;
    customer_id: string;
    files?: string[];
}

export {
    type TicketOrder,
    type TicketOrderCreate,
}