import "./AboutUs.css";
import Member1 from "./Member1.jpeg";
import Member2 from "./Member2.jpeg";
import Member3 from "./Member3.jpeg";
import Member4 from "./Member4.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import { forwardRef } from "react";

const AboutUs = forwardRef((props, ref) => {
  return (
    <div id="model3" ref={ref}>
      <h1 className="model-title">About Us</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img width={200} height={200} src={Member2} />
          <div className="description">
            <h1>Seo</h1>
            <h2>Team Leader</h2>
            <p>Crypto degen</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member1} />
          <div className="description">
            <h1>Marie Lee</h1>
            <h2>Dev</h2>
            <p> Keep it Simple, Stupid!</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member3} />
          <div className="description">
            <h1>KiYoung</h1>
            <h2>Dev</h2>
            <p> where there is a will there is a way</p>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={Member4} />
          <div className="description">
            <h1>Been</h1>
            <h2>Dev</h2>
            <p> Bidding my time on block-chain</p>
            <div className="social-media"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;

