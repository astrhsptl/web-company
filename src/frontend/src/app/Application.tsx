import { Blog } from "@/pages/blog"
import { Homepage } from "@/pages/homepage"
import { Work } from "@/pages/work"
import { Route, Routes } from "react-router-dom"
import { CertainBlog } from "@/pages/certainBlog/CertainBlog"
import { CertainProduct } from "@/pages/certainProduct/CertainProduct"
import ServicePage from "@/pages/serviceList";
import { Ticket } from "@/pages/ticket"
import "@/shared/styles/initial.css"


export default function Application() {
  return (
    <Routes>
      <Route key={'/'} path={"/"} element={<Homepage />} />
      <Route key={'/work'} path={"/work"} element={<Work />} />
      <Route key={'/blog'} path={"/blog"} element={<Blog />} />
      <Route key={'/service'} path={"/service"} element={<ServicePage />} />
      <Route key={'/ticket/new'} path={"/ticket/new"} element={<Ticket />} />

      <Route key={'/blog/:id'} path={"/blog/:id"} element={<CertainBlog />} />
      <Route key={'/product/:id'} path={"/product/:id"} element={<CertainProduct />} />
    </Routes>
  )
}
