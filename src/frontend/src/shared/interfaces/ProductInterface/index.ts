import Customer from "../CustomerInterface";
import ProductWork from "../ProductWorkInterface";
import FileInterface from "../FileInterface"

interface Product{
    id: string;
    title: string;
    description: string;
    link?: string;
    created?: string;
    customer_id?: string;

    customer: Customer;
    works: ProductWork[];
    images: FileInterface[];
}


export default Product;