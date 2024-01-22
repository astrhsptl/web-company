import { useProductListHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import { useQuery } from "react-query"
import { ProductPreview } from "./ProductPreview";
import "../styles/product.css"

export const ProductList = () => {
  const { data } = useQuery({
    queryKey: ['productList'],
    queryFn: () => useProductListHook(),
  });

  return (
    <div>{
        data?.slice(0, 3).map((product, index) => <ProductPreview key={product.id} product={product} positionLeft={ index % 2 == 1 }  />)    
    }</div>
  )
}
