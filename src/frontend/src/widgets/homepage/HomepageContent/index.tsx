import { PresentText } from "./PresentText";
import { PrinciplesOfWork } from "./PrinciplesOfWork";
import { FeedbackRedirect } from "./FeedbackRedirect";
import { ProductList } from "./ProductList";

export const HomepageContent = () => {
  return (
    <>
      <PresentText />
      <ProductList />
      <PrinciplesOfWork />
      <FeedbackRedirect />
    </>
  )
}
