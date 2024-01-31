import { usePostByIdHook } from "@/shared/api/FetchHooks/BlogFetchHooks";
import { Loader } from "@/shared/components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import "./styles/index.css";

export const CertainBlogContent = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["blogById", id], async () => await usePostByIdHook(id),
  )

  return (
    <div className="blog-content-container">
    {
        isLoading ?
        
        <Loader /> :
        
        <>
        <p>{ data?.title }</p>
        <img src={ data?.preview } alt="" />
        <div>{ data?.body }</div>
        </>
    }
    </div>
  )
}
