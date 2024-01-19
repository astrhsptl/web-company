import { QualificationList } from "./QualificationList";
import { PresentText } from "./PresentText";
import { PrinciplesOfWork } from "./PrinciplesOfWork";
import { FeedbackRedirect } from "./FeedbackRedirect";

export const HomepageContent = () => {
  return (
    <>
      <PresentText />
      <QualificationList />
      <PrinciplesOfWork />
      <FeedbackRedirect />
    </>
  )
}
