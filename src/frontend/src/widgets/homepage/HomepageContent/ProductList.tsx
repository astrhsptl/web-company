import { useProductListHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import { useEffect } from "react";
import { useQuery } from "react-query"
import { ProductPreview } from "./ProductPreview";
import "../styles/product.css"

export const ProductList = () => {
  const { data } = useQuery({
    queryKey: ['productList'],
    queryFn: () => useProductListHook(),
  });

  useEffect(() => {
    if (data) console.log(data![0].images[0].file);
  }, [data])

  return (
    <div>{
        data?.map((product, index) => <ProductPreview key={product.id} product={product} positionLeft={ index % 2 == 1 }  />)    
    }</div>
  )
}
