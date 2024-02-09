import { useProductWorkListHook } from "@/shared/api/FetchHooks/WorkListHooks";
import { useQuery } from "react-query";
import "./style/style.css";
import { Link } from "react-router-dom";

export const ServiceListContent = () => {
  const { data } = useQuery({
    queryKey: ["postList"],
    queryFn: () => useProductWorkListHook(),
  });

  return (
    <div className="service-work-container">
      <p className="service-work-title">
        Самый маленький спектр огромного количества услуг от нас
      </p>
      <ul className="service-collection">
        {data?.map((productWork) => (
          <li key={productWork.id}>
            <Link to={"/ticket/new"} className="service-work-link">
              {productWork.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
