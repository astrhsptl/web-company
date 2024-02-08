import { useProductListHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import { Loader } from "@/shared/components"
import { PrinciplesOfWork } from "@/widgets/homepage/HomepageContent/PrinciplesOfWork"
import { WorkTitle, WorksList } from "@/widgets/works"
import { useQuery } from "react-query";


export const CompactWorkListContent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['productListData'],
    queryFn: () => useProductListHook(),
  });
    
  return (
    <>
    {
      isLoading ?
      <div className="loader-container__centred"> <Loader /> </div> :
      <>
        <WorkTitle />
        <WorksList productList={data} />
        <PrinciplesOfWork />
      </>
    }
    </>
  )
}
