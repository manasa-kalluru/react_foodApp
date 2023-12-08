import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <div className="footer flex justify-between">
      <img className="w-20 ml-4" src={LOGO_URL} />
      <ul className="flex align-middle  m-4 p-4">
        <li className="px-4 hover:text-lime-600">
          <h4>About US</h4>
        </li>
        <li className="px-4 hover:text-lime-600">
          <h4>Contact US</h4>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
