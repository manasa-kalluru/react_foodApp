import { LOGO_URL } from "../utils/constants";
const Footer = () => {
    return (
      <div className="footer">
        <img className="logo" src={LOGO_URL}/>
        <ul>
          <li><h4>About US</h4></li>
          <li><h4>Contact US</h4></li>
        </ul>
        </div>
    );
  }

  export default Footer;