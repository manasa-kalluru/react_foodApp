import { SIDENAV_IMG } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-items">
        <img className="sideNav" src={SIDENAV_IMG} />
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Location</li>
          <li>SearchBar</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;