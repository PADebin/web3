import logo from "./Moovin.png";

const Header = (props) => {
  return (
    <div>
      <img src={logo} alt="Moovin Logo" />
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;
