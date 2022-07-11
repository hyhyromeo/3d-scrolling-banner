import { useState } from "react";
import "./App.scss";
import bananas from "./bananas.png";

function Banner(props: { rotation: number }) {
  const BannerStyle = {
    width: "200px",
    height: "100px",
    transform: `rotateY(${props.rotation}deg)`,
  };

  return (
    <div className="bananaWrap" style={BannerStyle}>
      <div className="front">
        <img width="100%" height="100%" alt={"banana"} src={bananas}></img>
      </div>
      <div className="back">
        <img width="100%" height="100%" alt={"banana"} src={bananas}></img>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="left">
        <img width="100%" height="100%" alt={"banana"} src={bananas}></img>
      </div>
      <div className="right">
        <img width="100%" height="100%" alt={"banana"} src={bananas}></img>
      </div>
    </div>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  document.addEventListener("scroll", () => setScrollY(window.scrollY));

  return (
    <div className="App">
      <div className="title">Scroll Up or Down :D</div>
      <div>
      <div className="container">
        <Banner rotation={scrollY} />
      </div>

      </div>
     
    </div>
  );
}

export default App;
