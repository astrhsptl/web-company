import thinkPrinciple from "../images/lamp.webp";
import envisionPrinciple from "../images/eye.webp";
import buildPrinciple from "../images/build.webp";


export const PrinciplesOfWork = () => {
  return (
    <div className="work-principles-container">
      <div className="principle">
        <img src={thinkPrinciple} alt="" className="image-principle" />
        <p className="title-principle">we suck with u</p>
        <p className="description-principle">we suck with u so hark, how u like</p>
      </div>
      <div className="principle">
        <img src={envisionPrinciple} alt="" className="image-principle" />
        <p className="title-principle">we suck with u</p>
        <p className="description-principle">we suck with u so hark, how u like</p>
      </div>
      <div className="principle principle__border-blocked">
        <img src={buildPrinciple} alt="" className="image-principle" />
        <p className="title-principle">we suck with u</p>
        <p className="description-principle">we suck with u so hark, how u like</p>
      </div>
    </div>
  )
}