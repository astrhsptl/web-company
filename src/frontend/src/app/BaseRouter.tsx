import { Blog } from "@/pages/blog"
import { Homepage } from "@/pages/homepage"
import { Work } from "@/pages/work"
import { Route, Routes } from "react-router-dom"

export default function BaseRouter() {
  return (
    <Routes>
      <Route key={'/'} path={"/"} element={<Homepage />} />
      <Route key={'/work'} path={"/work"} element={<Work />} />
      <Route key={'/blog'} path={"/blog"} element={<Blog />} />
    </Routes>
  )
}
