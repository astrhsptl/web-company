import { usePostListHook } from "@/shared/api/FetchHooks/BlogFetchHooks";
import { useQuery } from "react-query";
import { BlogPreview } from "./BlogPreview";
import "./css/blog.css";

export const BlogContent = () => {
  const { data } = useQuery({
    queryKey: ["postList"],
    queryFn: () => usePostListHook(),
  });

  return (
    <div className="blog-container">
      <h1 className="blog-head-title">Записки dev`a</h1>
      <div className="posts-container">
        {data?.map((post) => <BlogPreview key={post.id} post={post} />)}
      </div>
    </div>
  );
};
