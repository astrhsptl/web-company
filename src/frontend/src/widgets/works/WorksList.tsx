import { useProductListHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import { useQuery } from "react-query"
import { ProductPreview } from "../homepage/HomepageContent/ProductPreview";
import "../homepage/styles/product.css"

export const WorksList = () => {
  const { data } = useQuery({
    queryKey: ['productListPage'],
    queryFn: () => useProductListHook(),
  });

  return (
    <div className="product-container-page__works">{
        data?.map((product, index) => <ProductPreview key={product.id} product={product} positionLeft={ index % 2 == 1 }  />)    
    }</div>
  )
}
