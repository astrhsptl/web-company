import Customer, { CustomerCreate, CustomerSearch } from "./CustomerInterface";
import ProductWork from "./ProductWorkInterface";
import Product from "./ProductInterface";
import FileInterface, { FileCreationInterface } from "./FileInterface";
import { TicketOrder, TicketOrderCreate } from "./TicketOrderInterfaces";
import BlogInterface from "./BlogInterfaces";
import { NotFoundResponse, FailedOperation } from "./APIResponses/APIResponses";

export {
  type Customer,
  type CustomerCreate,
  type CustomerSearch,
  type ProductWork,
  type Product,
  type FileInterface,
  type FileCreationInterface,
  type NotFoundResponse,
  type FailedOperation,
  type BlogInterface,
  type TicketOrder,
  type TicketOrderCreate,
};
