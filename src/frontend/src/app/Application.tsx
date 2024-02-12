import { TicketJobPage } from "@/pages/TicketJob";
import { Blog } from "@/pages/blog";
import { CertainBlog } from "@/pages/certainBlog/CertainBlog";
import { CertainProduct } from "@/pages/certainProduct/CertainProduct";
import { Homepage } from "@/pages/homepage";
import ServicePage from "@/pages/serviceList";
import { Ticket } from "@/pages/ticket";
import { TicketThanks } from "@/pages/ticketThanks/TicketThanks";
import { Work } from "@/pages/work";
import "@/shared/styles/initial.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function Application() {
  const [complited, setComplited] = useState(false);
  useEffect(() => {
    if (!complited) {
      console.log(
        `Привет, мы команда Потребления контента и рекомендаций — создаём раздел,
      в котором ты сейчас находишься. Хочешь присоединиться к нам?
      Заполни форму и присоединяйся к нам: http://localhost:5173/job`,
      );
      setComplited(true);
    }
  });
  return (
    <Routes>
      <Route key={"/"} path={"/"} element={<Homepage />} />
      <Route key={"/work"} path={"/work"} element={<Work />} />
      <Route key={"/blog"} path={"/blog"} element={<Blog />} />
      <Route key={"/service"} path={"/service"} element={<ServicePage />} />
      <Route key={"/ticket/new"} path={"/ticket/new"} element={<Ticket />} />
      <Route key={"/job"} path={"/job"} element={<TicketJobPage />} />
      <Route
        key={"/ticket/new"}
        path={"/ticket/thanks"}
        element={<TicketThanks />}
      />

      <Route key={"/blog/:id"} path={"/blog/:id"} element={<CertainBlog />} />
      <Route
        key={"/work/:id"}
        path={"/work/:id"}
        element={<CertainProduct />}
      />
    </Routes>
  );
}
