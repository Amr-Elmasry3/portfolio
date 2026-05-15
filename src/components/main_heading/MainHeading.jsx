// Import Style
import "./main_heading.scss";

function MainHeading({ title, subTitle }) {
  return (
    <div className="main-heading">
      <span className="title same-title">{title}</span>

      <span className="sub-title">{subTitle}</span>
    </div>
  );
}

export default MainHeading;
