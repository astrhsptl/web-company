import { ProductPreview } from "../homepage/HomepageContent/ProductPreview";
import { Product } from "@/shared/interfaces";
import "../homepage/styles/product.css";


interface ProductListProps{
  productList?: Product[];
}

export const WorksList = ({ productList }: ProductListProps) => {
  return (
    <div className="product-container-page__works">{
        productList?.map((product, index) => <ProductPreview key={product.id} product={product} positionLeft={ index % 2 == 1 }  />)    
    }</div>
  )
}
