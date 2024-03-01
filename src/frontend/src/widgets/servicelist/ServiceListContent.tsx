import { useProductWorkListHook } from "@/shared/api/FetchHooks/WorkListHooks";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "./style/style.css";

export const ServiceListContent = () => {
    const navigate = useNavigate();
    const { data } = useQuery({
        queryKey: ["postList"],
        queryFn: () => useProductWorkListHook()
    });

    return (
        <div className="service-work-container">
            <p className="service-work-title">
                Самый маленький спектр огромного количества услуг от нас
            </p>
            <div className="service-collection">
                {data?.map((productWork) => (
                    <div
                        key={productWork.id}
                        className="service-work-card"
                        onClick={() => navigate("/ticket/new")}
                    >
                        {productWork.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
