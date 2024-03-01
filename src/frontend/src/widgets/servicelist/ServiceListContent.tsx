import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "./style/style.css";

export const ServiceListContent = () => {
    const navigate = useNavigate();
    const { data } = useQuery({
        queryKey: ["postList"],
        queryFn: () => {
            return [
                { id: 1, title: "Минет" },
                { id: 2, title: "Минет" },
                { id: 3, title: "Минет" },
                { id: 4, title: "Минет" },
                { id: 5, title: "Минет" },
                { id: 6, title: "Минет" }
            ];
        }
        // queryFn: () => useProductWorkListHook(),
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
