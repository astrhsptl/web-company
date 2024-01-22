import { BlogInterface } from "@/shared/interfaces";
import { Link } from "react-router-dom";


interface BlogPreviewProps{
  post: BlogInterface;
}

export const BlogPreview = ({ post }: BlogPreviewProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="link-post__preview">
    <div className="post-card-preview">
      <img src={ post.preview } alt="" className="post-img__preview" />
      <p className="post-title">{ post.title }</p>
    </div>
    </Link>
  )
}
