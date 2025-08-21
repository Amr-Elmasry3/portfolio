// Import Style
import "./main_heading.scss";

// Import Imgs
import boyImg from "../../assets/boy.png";
import toolsImg from "../../assets/tools.png";
import rocketImg from "../../assets/rocket.png";
import chatImg from "../../assets/chat.png";

function MainHeading({ title, subTitle, img }) {
  const imgs = {
    boy: boyImg,
    tools: toolsImg,
    rocket: rocketImg,
    chat: chatImg,
  };

  return (
    <div className="main-heading">
      <span className="title same-title">{title}</span>

      <span className="sub-title">{subTitle}</span>

      <img src={imgs[img]} alt="..." className="img" />
    </div>
  );
}

export default MainHeading;
