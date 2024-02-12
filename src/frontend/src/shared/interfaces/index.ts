import { FailedOperation, NotFoundResponse } from "./APIResponses/APIResponses";
import BlogInterface from "./BlogInterfaces";
import Customer, { CustomerCreate, CustomerSearch } from "./CustomerInterface";
import FileInterface, { FileCreationInterface } from "./FileInterface";
import Product from "./ProductInterface";
import ProductWork from "./ProductWorkInterface";
import { InputJobTicket, JobTicket } from "./TIcketJobInterfaces";
import { TicketOrder, TicketOrderCreate } from "./TicketOrderInterfaces";

export {
  type BlogInterface,
  type Customer,
  type CustomerCreate,
  type CustomerSearch,
  type FailedOperation,
  type FileCreationInterface,
  type FileInterface,
  type InputJobTicket,
  type JobTicket,
  type NotFoundResponse,
  type Product,
  type ProductWork,
  type TicketOrder,
  type TicketOrderCreate,
};
