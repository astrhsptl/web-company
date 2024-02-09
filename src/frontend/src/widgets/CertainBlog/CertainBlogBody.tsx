import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Loader } from "@/shared/components";
import { BlogCertainContent } from "./BlogCertainContent";
import { usePostByIdHook } from "@/shared/api/FetchHooks/BlogFetchHooks";
import "./styles/index.css";

export const CertainBlogBody = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["blogById", id],
    async () => await usePostByIdHook(id),
  );

  return (
    <div className="blog-content-container">
      {isLoading ? <Loader /> : <BlogCertainContent data={data} />}
    </div>
  );
};
