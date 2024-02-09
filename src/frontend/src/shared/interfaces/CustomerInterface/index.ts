interface Customer {
  id: string;
  name: string;
  link?: string;
  phone?: string;
  email?: string;
}

interface CustomerSearch {
  id?: string;
  name?: string;
  link?: string;

  search?: string;
}

type CustomerCreate = Omit<Customer, "id">;

export default Customer;
export { type CustomerSearch, type CustomerCreate };
