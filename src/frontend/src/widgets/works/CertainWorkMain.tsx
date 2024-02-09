import { useProductByIdHook } from "@/shared/api/FetchHooks/ProductFetchHooks";
import { Loader } from "@/shared/components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { WorkDescriptionSide } from "./WorkDescriptionSide";
import { WorkTitleSide } from "./WorkTitleSide";
import "./styles/certain__main.css";

export const CertainWorkMain = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["productByID", id], async () =>
    useProductByIdHook(id)
  );

  return (
    <div className="work-container__certain">
      {isLoading || !data ? (
        <Loader />
      ) : (
        <div className="work-data-container__main container">
          <WorkTitleSide
            title={data.title}
            works={data.works}
            link={data.link}
          />
          <WorkDescriptionSide
            description={data.description}
            images={data.images}
          />
        </div>
      )}
    </div>
  );
};
