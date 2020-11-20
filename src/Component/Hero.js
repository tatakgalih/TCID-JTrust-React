import heroImage from "../images/hero-image-1.png";
import OjkLps from "../images/ojk-lps-logo.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-area">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="container_fluid">
        <div className="ojk-lps-area">
          <img src={OjkLps} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
