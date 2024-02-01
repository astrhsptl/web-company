import { Product } from "@/shared/interfaces"
import { Link } from "react-router-dom";

interface ProductPreviewProps{
    positionLeft: boolean;
    product: Product;
}

export const ProductPreview = ({ product, positionLeft }: ProductPreviewProps) => {
  
  return (
    <div className={`product-container  ${ positionLeft ? "reversed_flow" : "" }`}>
        <div className="product-image-container">
            <img src={ product.images[0].file } alt="" className="product-image__preview" />
        </div>
        <div className={`product-info-container  ${ positionLeft ? "text-flow__reversed" : "" }`}>
            <p className="product-title">{ product.title }</p>
            <p className="product-company">{ product.customer.name }</p>
            <p className="product-description">{ product.description }</p>
            <Link to={`/work/${ product.id }`}><button className="product-button">Ознакомитесь с проектом?</button></Link>
        </div>
    </div>
  )
}
