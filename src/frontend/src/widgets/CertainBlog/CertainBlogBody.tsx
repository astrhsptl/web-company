import { usePostByIdHook } from "@/shared/api/FetchHooks/BlogFetchHooks";
import { Loader } from "@/shared/components";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BlogCertainContent } from "./BlogCertainContent";
import "./styles/index.css";

export const CertainBlogBody = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["blogById", id],
    async () => await usePostByIdHook(id)
  );

  return (
    <>
      <Helmet>
        <title>{data ? data.title : "Хуй"} | WebLab</title>
      </Helmet>
      <div className="blog-content-container">
        {isLoading || !data ? <Loader /> : <BlogCertainContent data={data} />}
      </div>
    </>
  );
};
