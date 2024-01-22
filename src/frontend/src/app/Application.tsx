import { Blog } from "@/pages/blog"
import { Homepage } from "@/pages/homepage"
import { Work } from "@/pages/work"
import { Route, Routes } from "react-router-dom"
import "@/shared/styles/initial.css"
import { CertainBlog } from "@/pages/certainBlog/CertainBlog"
import { CertainProduct } from "@/pages/certainProduct/CertainProduct"

export default function Application() {
  return (
    <Routes>
      <Route key={'/'} path={"/"} element={<Homepage />} />
      <Route key={'/work'} path={"/work"} element={<Work />} />
      <Route key={'/blog'} path={"/blog"} element={<Blog />} />
      <Route key={'/blog/:id'} path={"/blog/:id"} element={<CertainBlog />} />
      <Route key={'/product/:id'} path={"/product/:id"} element={<CertainProduct />} />
    </Routes>
  )
}
