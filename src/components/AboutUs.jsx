import "./AboutUs.css";
import Member1 from "./Member1.png";
import { FaCheckCircle } from "react-icons/fa";

function AboutUs() {
  return (
    <div id="model3">
      <h1 className="model-title">About Us</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img width={200} height={200} src={Member1} />
          <div className="description">
            <h1>Seo</h1>
            <h2>Team</h2>
            <p>자기소개</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member1} />
          <div className="description">
            <h1>Marie Lee</h1>
            <h2>Dev</h2>
            <p>자기소개</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member1} />
          <div className="description">
            <h1>KiYoung</h1>
            <h2>Dev</h2>
            <p>자기소개</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member1} />
          <div className="description">
            <h1>Been</h1>
            <h2>Dev</h2>
            <p>자기소개</p>
            <div className="social-media"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
