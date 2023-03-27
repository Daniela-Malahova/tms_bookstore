import Lottie from "lottie-react";
import loader from "./loader.json";

import "./loader.scss";

const Loader = () => {
  return (
    <div className="backdrop">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
