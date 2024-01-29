import { useCustomerCreate, useCustomerListHook } from "@/shared/api/FetchHooks/CustomerFetchHooks";
import { useFileCreate } from "@/shared/api/FetchHooks/FileFetchHook";
import { useTicketOrderCreateHook } from "@/shared/api/FetchHooks/TicketFetchHooks";
import { FileInterface } from "@/shared/interfaces";

const preprocessFilesFromList = async (files: File[]): Promise<string[]> => {
    let preprocessedFiles: string[] = [];

    for (let file of files) {
      let uploadedFile = await useFileCreate({ file: file });
      preprocessedFiles.push(uploadedFile.id);
    }

    return preprocessedFiles;
}

const getOrCreateCustomer = async (
    {
     name,
     email,
     link,
     phone
    }: TicketInput): Promise<string> => {

    let customerSearchResult = await useCustomerListHook({ search: name });

    if (customerSearchResult.length == 0) {
      let customerCreateData = {
        name: name,
        email: email,
        link: link,
        phone: phone,
      }
      let customer = await useCustomerCreate(customerCreateData);
      return customer.id
    }
    return customerSearchResult[0].id;
}


export const sendTicketData = async (data: TicketInput, files: File[]) => {
    let sendedFile = await preprocessFilesFromList(files); 
    let customerID = await getOrCreateCustomer(data);

    await useTicketOrderCreateHook({
        title: data.title,
        body: data.body,
        customer_id: customerID,
        files: sendedFile
    });
}

export interface TicketInput{
  title: string;
  body: string;

  name: string;
  link: string;
  email: string;
  phone: string;
  files?: FileInterface[];
}
