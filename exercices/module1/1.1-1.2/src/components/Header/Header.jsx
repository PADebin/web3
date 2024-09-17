/* eslint-disable react/prop-types */
import Image from "components/Header/LOGO HE VINCI.png";

const Header = (props) => {
  return (
    <>
      <img src={Image} alt="Vinci logo" />
      <h1>{props.course}</h1>
    </>
  );
};

export default Header;
