import jtrustLogo from "../images/jtrust-logo.png";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-area">
          <a href="#">
            <img src={jtrustLogo} />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
