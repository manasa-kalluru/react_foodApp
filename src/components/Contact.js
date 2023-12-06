import User from "./User";
import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <User name="Name: Manasa (functional)"/>
      <UserClass name="Name: Manasa (class)" location = "Location: Cincinnati class" />
    </div>
  );
};

export default Contact;
