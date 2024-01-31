import Blog from "@/shared/interfaces/BlogInterfaces";


interface BlogCertainContent{
    data: Blog;
}

export const BlogCertainContent = ({ data }: BlogCertainContent) => {
  return (
    <div className="blog-content">
    <p className="blog-title__certain">{ data.title }</p>
    <img src={ data.preview } alt="" className="blog-image__certain" />
    <pre className="blog-body__certain">{ data.body }</pre>
    </div>
  )
}
