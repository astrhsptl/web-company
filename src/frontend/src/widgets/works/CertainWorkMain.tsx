import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { Loader } from "@/shared/components";
import { useProductByIdHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import "./styles/certain__main.css";

export const CertainWorkMain = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["productByID", id], async () => useProductByIdHook(id)
  )

  useEffect(() => {
    console.log(data);
   }, [data])

  return (
    <div className="work-container__certain">
    {
      isLoading ?
      <Loader /> :
      <div>пенисы пенисы пенисы</div>
    }
    </div>
  )
}
